import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { CloudFormationClient, DescribeStacksCommand, type Stack, type Output } from "@aws-sdk/client-cloudformation";
import fs from "fs";

async function CreateConfig() {
  try {
    const credentials = await fromSSO({ profile: "StratosFur" })();
    const client = new CloudFormationClient({
      region: "us-east-1",
      credentials: credentials
    });
    const command = new DescribeStacksCommand({ StackName: "StratosFur" });
    const response = await client.send(command);
    const stacks = response.Stacks;

    if (stacks === undefined) {
      console.error("No stacks have been found");
      return;
    }

    const stack = stacks.find((obj: Stack) => {
      return obj.StackName === "StratosFur";
    });

    if (stack === undefined || stack.Outputs === undefined) {
      console.error("No stack or stack outputs have been found");
      return;
    }

    const accessKeyId        = stack.Outputs.find((obj: Output) => { return obj.OutputKey === "AccessKeyId" })?.OutputValue;
    const secretAccessKey    = stack.Outputs.find((obj: Output) => { return obj.OutputKey === "SecretAccessKey" })?.OutputValue;
    const s3BucketDev        = stack.Outputs.find((obj: Output) => { return obj.OutputKey === "S3BucketDev" })?.OutputValue;
    const s3BucketProd       = stack.Outputs.find((obj: Output) => { return obj.OutputKey === "S3BucketProd" })?.OutputValue;
    const cfDistributionDev  = stack.Outputs.find((obj: Output) => { return obj.OutputKey === "CloudFrontDistributionIdDev" })?.OutputValue;
    const cfDistributionProd = stack.Outputs.find((obj: Output) => { return obj.OutputKey === "CloudFrontDistributionIdProd" })?.OutputValue;

    let configDev  = "";
    let configProd = "";
    configDev  += `region: "us-east-1"\n`;
    configDev  += `accessKeyId: "${accessKeyId}"\n`;
    configDev  += `secretAccessKey: "${secretAccessKey}"\n`;
    configDev  += `s3Bucket: "${s3BucketDev}"\n`;
    configDev  += `cloudFrontDistributionId: "${cfDistributionDev}"\n`;
    configProd += `region: "us-east-1"\n`;
    configProd += `accessKeyId: "${accessKeyId}"\n`;
    configProd += `secretAccessKey: "${secretAccessKey}"\n`;
    configProd += `s3Bucket: "${s3BucketProd}"\n`;
    configProd += `cloudFrontDistributionId: "${cfDistributionProd}"\n`;

    fs.writeFileSync("./config-dev.yml", configDev);
    fs.writeFileSync("./config-prod.yml", configProd);

    console.log("Configuration files for the development and production environments have been created");
  } catch (error) {
    console.error("Error getting SSO credentials");
    console.error(error);
  }
}

CreateConfig();
