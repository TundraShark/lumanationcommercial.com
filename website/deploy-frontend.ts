import { S3Client, ListObjectsV2Command, ListObjectsV2Request, ListObjectsV2Output, PutObjectCommand, PutObjectOutput, DeleteObjectsCommand, DeleteObjectsCommandInput } from "@aws-sdk/client-s3";
import { CloudFrontClient, CreateInvalidationCommand, ListDistributionsCommand } from "@aws-sdk/client-cloudfront";
import fs from "fs";             // File system
import {promisify} from "util";  // Utilities
import mime from "mime-types";   // MIME types for ContentType
import yaml from "js-yaml";      // Parse .yaml files for config info
import { fromSSO } from "@aws-sdk/credential-provider-sso";
const stat = promisify(fs.stat); // Promisify file statistics

const PROFILE = "Lumanation";

type PutObjects = Promise<PutObjectOutput>;
interface Config {
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  s3Bucket: string;
  cloudFrontDistributionId: string;
}
process.env.env = "prod";
const config = yaml.load(fs.readFileSync(`config-${process.env.env}.yml`, "utf-8")) as Config;

async function GetFiles(s3: any, currentPath: string, promises: PutObjects[] = [], fileList: string[] = []): Promise<{ promises: PutObjects[], fileList: string[] }> {
  for (const obj of fs.readdirSync(currentPath)) {
    const localPath = `${currentPath}/${obj}`;
    const stats: fs.Stats = await stat(localPath);
    let remotePath: string|string[] = localPath.split("/");
    remotePath.shift();
    remotePath = remotePath.join("/");

    if (stats.isDirectory()) {
      const result = await GetFiles(s3, localPath, promises, fileList);
      promises = result.promises;
      fileList = result.fileList;
    } else {
      fileList.push(remotePath as string);

      const putObject = s3.send(new PutObjectCommand({
        Bucket: config.s3Bucket,
        Key: `${remotePath}`,
        Body: fs.readFileSync(localPath),
        ContentType: mime.lookup(obj) as string,
        StorageClass: "STANDARD",
        ServerSideEncryption: "AES256"
      }));

      promises.push(putObject);
    }
  }
  return { promises, fileList };
}

async function GetCloudFrontDistributionIdByCNAME(cloudFrontClient: any, cname: string): Promise<string | undefined> {
  const command = new ListDistributionsCommand({});
  const response = await cloudFrontClient.send(command);

  if (response.DistributionList?.Items) {
    for (const distribution of response.DistributionList.Items) {
      if (distribution.Aliases?.Items?.includes(cname)) {
        return distribution.Id;
      }
    }
  }
  return undefined;
}

async function Main(): Promise<void> {
  const credentials = await fromSSO({ profile: PROFILE })();

  const s3 = new S3Client({
    region: "us-east-1",
    credentials: credentials
  });

  const cloudfront = new CloudFrontClient({
    region: "us-east-1",
    credentials: credentials
  });

  const params: ListObjectsV2Request = {
    Bucket: config.s3Bucket,
    MaxKeys: 1000
  };

  console.log("Getting files...");

  let isTruncated = true;

  while (isTruncated) {
    const data = await s3.send(new ListObjectsV2Command(params)) as ListObjectsV2Output;
    isTruncated = data.IsTruncated as boolean;

    const params2: DeleteObjectsCommandInput = {
      Bucket: config.s3Bucket,
      Delete: {
        Objects: [],
        Quiet: true
      }
    };

    if ("Contents" in data) {
      for (const obj of data.Contents!) {
        params2.Delete!.Objects!.push({Key: obj.Key});
      }
    }

    if (params2.Delete!.Objects!.length) {
      console.log("Deleting files...");
      await s3.send(new DeleteObjectsCommand(params2));
    }
  }

  console.log("Uploading files...");
  const { promises, fileList } = await GetFiles(s3, "dist");
  const totalFiles = fileList.length;

  let completedUploads = 0;
  const updateProgress = () => {
    completedUploads++;
    const percentComplete = Math.floor((completedUploads / totalFiles) * 100);
    process.stdout.write(`\rProgress: ${completedUploads}/${totalFiles} files (${percentComplete}% complete)`);

    if (completedUploads === totalFiles) {
      process.stdout.write("\n");
    }
  };

  // Create an array of promises that will call updateProgress when each upload completes
  const progressPromises = promises.map(promise =>
    promise.then(result => {
      updateProgress();
      return result;
    })
  );

  await Promise.all(progressPromises);
  console.log("Upload complete!");
  console.log("Creating invalidation");

  await cloudfront.send(new CreateInvalidationCommand({
    DistributionId: config.cloudFrontDistributionId,
    InvalidationBatch: {
      CallerReference: Date.now().toString(),
      Paths: {
        Quantity: 1,
        Items: ["/*"]
      }
    }
  }));
}

Main();
