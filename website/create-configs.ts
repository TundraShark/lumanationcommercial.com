import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { CloudFrontClient, ListDistributionsCommand } from "@aws-sdk/client-cloudfront";
import fs from "fs";

const DOMAIN_NAME = "luma-nationcommercial.com";

// Configure the credentials using the SSO profile
const credentials = fromSSO({ profile: "Lumanation" });

// Create CloudFront client
const cloudFrontClient = new CloudFrontClient({
  credentials,
  region: "us-east-1"
});

async function GetCloudFrontDistributionIdByCNAME(cname: string): Promise<string | undefined> {
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

async function Main () {
  // const devApi      = await GetCloudFrontDistributionIdByCNAME(`api.dev.${DOMAIN_NAME}`);
  const devWebsite  = await GetCloudFrontDistributionIdByCNAME(`dev.${DOMAIN_NAME}`);
  // const prodApi     = await GetCloudFrontDistributionIdByCNAME(`api.${DOMAIN_NAME}`);
  const prodWebsite = await GetCloudFrontDistributionIdByCNAME(`${DOMAIN_NAME}`);

  fs.writeFileSync ("./config-dev.yml", `region: "us-east-1"\n`);
  fs.appendFileSync("./config-dev.yml", `s3Bucket: "dev.${DOMAIN_NAME}"\n`);
  fs.appendFileSync("./config-dev.yml", `cloudFrontDistributionId: "${devWebsite}"\n`);

  fs.writeFileSync ("./config-prod.yml", `region: "us-east-1"\n`);
  fs.appendFileSync("./config-prod.yml", `s3Bucket: "${DOMAIN_NAME}"\n`);
  fs.appendFileSync("./config-prod.yml", `cloudFrontDistributionId: "${prodWebsite}"\n`);
}

Main();
