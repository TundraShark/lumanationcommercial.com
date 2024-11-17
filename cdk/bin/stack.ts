import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  aws_certificatemanager as cert,
  aws_cloudfront as cf,
  aws_dynamodb as ddb,
  aws_cloudfront_origins as origins,
  aws_iam as iam,
  // aws_lambda as lambda,
  aws_route53 as route53,
  aws_s3 as s3,
  // Fn
} from "aws-cdk-lib";
import { AttributeType, BillingMode, TableClass } from "aws-cdk-lib/aws-dynamodb";

const HOSTED_ZONE_ID    = "Z02894193A5H6BBH7PKFE";
const HOSTED_ZONE_NAME  = "lumanationelectric.com";
const S3_BUCKET_DEV     = "dev.lumanationelectric.com";
const S3_BUCKET_PROD    = "lumanationelectric.com";
const CF_HOSTED_ZONE_ID = "Z2FDTNDATAQYW2";

export class Lumanation extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const route53HostedZone = route53.HostedZone.fromHostedZoneAttributes(this, "Route53HostedZone", {
      hostedZoneId: HOSTED_ZONE_ID,
      zoneName: HOSTED_ZONE_NAME
    });

    // SSL Certificates

    const sslCertificate = new cert.Certificate(this, "Lumanation-cert", {
      domainName: "lumanationelectric.com",
      subjectAlternativeNames: [
        "*.lumanationelectric.com",
        "dev.lumanationelectric.com",
        "*.dev.lumanationelectric.com"
      ],
      validation: cert.CertificateValidation.fromDnsMultiZone({
        "lumanationelectric.com": route53HostedZone,
        "*.lumanationelectric.com": route53HostedZone,
        "dev.lumanationelectric.com": route53HostedZone,
        "*.dev.lumanationelectric.com": route53HostedZone
      })
    });

    // S3 Buckets

    const s3BaseRules = {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      publicReadAccess: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
      })
    };

    const s3BucketDevWebsite = new s3.Bucket(this, "Lumanation-s3-dev-website", {
      bucketName: S3_BUCKET_DEV,
      ...s3BaseRules
    });

    const s3BucketProdWebsite = new s3.Bucket(this, "Lumanation-s3-prod-website", {
      bucketName: S3_BUCKET_PROD,
      ...s3BaseRules
    });

    // DynamoDB

    // const dynamoDevTableName  = "Lumanation-dynamo-dev";
    // const dynamoProdTableName = "Lumanation-dynamo-prod";

    // const dynamoDev = new ddb.Table(this, dynamoDevTableName, {
    //   tableName: dynamoDevTableName,
    //   billingMode: BillingMode.PAY_PER_REQUEST,
    //   tableClass: TableClass.STANDARD_INFREQUENT_ACCESS,
    //   partitionKey: {
    //     name: "type",
    //     type: AttributeType.STRING
    //   },
    //   sortKey: {
    //     name: "emailAddress",
    //     type: AttributeType.STRING
    //   }
    // });

    // const dynamoProd = new ddb.Table(this, dynamoProdTableName, {
    //   tableName: dynamoProdTableName,
    //   billingMode: BillingMode.PAY_PER_REQUEST,
    //   tableClass: TableClass.STANDARD_INFREQUENT_ACCESS,
    //   partitionKey: {
    //     name: "type",
    //     type: AttributeType.STRING
    //   },
    //   sortKey: {
    //     name: "emailAddress",
    //     type: AttributeType.STRING
    //   }
    // });

    // IAM Role

    // const iamRoleLambdaDev = new iam.Role(this, "Lumanation-LambdaRole-dev", {
    //   assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"), // Allow Lambdas to assume this role
    //   managedPolicies: [
    //     iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")
    //   ],
    //   inlinePolicies: {
    //     DynamoDBAccessPolicy: new iam.PolicyDocument({
    //       statements: [
    //         new iam.PolicyStatement({
    //           actions: [
    //             "dynamodb:GetItem",
    //             "dynamodb:PutItem",
    //             "dynamodb:UpdateItem",
    //             "dynamodb:DeleteItem",
    //             "dynamodb:Query",
    //             "dynamodb:Scan"
    //           ],
    //           resources: [
    //             `arn:aws:dynamodb:${process.env.CDK_DEFAULT_REGION}:${process.env.CDK_DEFAULT_ACCOUNT}:table/${dynamoDevTableName}`
    //           ]
    //         })
    //       ]
    //     })
    //   }
    // });

    // const iamRoleLambdaProd = new iam.Role(this, "Lumanation-LambdaRole-prod", {
    //   assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"), // Allow Lambdas to assume this role
    //   managedPolicies: [
    //     iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")
    //   ],
    //   inlinePolicies: {
    //     DynamoDBAccessPolicy: new iam.PolicyDocument({
    //       statements: [
    //         new iam.PolicyStatement({
    //           actions: [
    //             "dynamodb:GetItem",
    //             "dynamodb:PutItem",
    //             "dynamodb:UpdateItem",
    //             "dynamodb:DeleteItem",
    //             "dynamodb:Query",
    //             "dynamodb:Scan"
    //           ],
    //           resources: [
    //             `arn:aws:dynamodb:${process.env.CDK_DEFAULT_REGION}:${process.env.CDK_DEFAULT_ACCOUNT}:table/${dynamoProdTableName}`
    //           ]
    //         })
    //       ]
    //     })
    //   }
    // });

    // Lambda Functions

    // const lambdaApiDev = new lambda.Function(this, "Lumanation-api-dev", {
    //   functionName: "Lumanation-api-dev",
    //   runtime: lambda.Runtime.NODEJS_20_X,
    //   handler: "index.handler",
    //   code: lambda.Code.fromAsset("./bin/lambda.zip"),
    //   memorySize: 1024,
    //   role: iamRoleLambdaDev,
    //   timeout: cdk.Duration.seconds(10)
    // });

    // const lambdaApiProd = new lambda.Function(this, "Lumanation-api-prod", {
    //   functionName: "Lumanation-api-prod",
    //   runtime: lambda.Runtime.NODEJS_20_X,
    //   handler: "index.handler",
    //   code: lambda.Code.fromAsset("./bin/lambda.zip"),
    //   memorySize: 1024,
    //   role: iamRoleLambdaProd,
    //   timeout: cdk.Duration.seconds(10)
    // });

    // const lambdaApiFunctionUrlDev  = lambdaApiDev.addFunctionUrl({ authType: lambda.FunctionUrlAuthType.NONE });
    // const lambdaApiFunctionUrlProd = lambdaApiProd.addFunctionUrl({ authType: lambda.FunctionUrlAuthType.NONE });

    // const cfHttpOriginDev  = Fn.select(0, Fn.split("/", Fn.select(1, Fn.split("https://", lambdaApiFunctionUrlDev.url))));
    // const cfHttpOriginProd = Fn.select(0, Fn.split("/", Fn.select(1, Fn.split("https://", lambdaApiFunctionUrlProd.url))));

    // CloudFront Distributions

    // const cfDevApi = new cf.Distribution(this, "Lumanation-cf-dev-api", {
    //   domainNames: ["api.dev.lumanationelectric.com"],
    //   certificate: sslCertificate,
    //   httpVersion: cf.HttpVersion.HTTP2_AND_3,
    //   minimumProtocolVersion: cf.SecurityPolicyProtocol.TLS_V1_2_2021,
    //   defaultBehavior: {
    //     allowedMethods: cf.AllowedMethods.ALLOW_ALL,
    //     viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    //     origin: new origins.HttpOrigin(cfHttpOriginDev, {
    //       protocolPolicy: cf.OriginProtocolPolicy.HTTPS_ONLY,
    //       httpsPort: 443
    //     }),
    //     cachePolicy: {
    //       // Caching Disabled
    //       cachePolicyId: "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
    //     },
    //     originRequestPolicy: {
    //       // All Viewer Except Host Header
    //       originRequestPolicyId: "b689b0a8-53d0-40ab-baf2-68738e2966ac"
    //     }
    //   }
    // });

    const cfDevWebsite = new cf.Distribution(this, "Lumanation-cf-dev-website", {
      domainNames: ["dev.lumanationelectric.com"],
      certificate: sslCertificate,
      httpVersion: cf.HttpVersion.HTTP2_AND_3,
      minimumProtocolVersion: cf.SecurityPolicyProtocol.TLS_V1_2_2021,
      defaultBehavior: {
        origin: new origins.S3Origin(s3BucketDevWebsite),
        viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
      },
      errorResponses: [{
        ttl: cdk.Duration.seconds(10),
        httpStatus: 404,
        responseHttpStatus: 200,
        responsePagePath: "/index.html"
      }]
    });

    // const cfProdApi = new cf.Distribution(this, "Lumanation-cf-prod-api", {
    //   domainNames: ["api.lumanationelectric.com"],
    //   certificate: sslCertificate,
    //   httpVersion: cf.HttpVersion.HTTP2_AND_3,
    //   minimumProtocolVersion: cf.SecurityPolicyProtocol.TLS_V1_2_2021,
    //   defaultBehavior: {
    //     allowedMethods: cf.AllowedMethods.ALLOW_ALL,
    //     viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    //     origin: new origins.HttpOrigin(cfHttpOriginProd, {
    //       protocolPolicy: cf.OriginProtocolPolicy.HTTPS_ONLY,
    //       httpsPort: 443
    //     }),
    //     cachePolicy: {
    //       // Caching Disabled
    //       cachePolicyId: "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
    //     },
    //     originRequestPolicy: {
    //       // All Viewer Except Host Header
    //       originRequestPolicyId: "b689b0a8-53d0-40ab-baf2-68738e2966ac"
    //     }
    //   }
    // });

    const cfProdWebsite = new cf.Distribution(this, "Lumanation-cf-prod-website", {
      domainNames: ["lumanationelectric.com"],
      certificate: sslCertificate,
      httpVersion: cf.HttpVersion.HTTP2_AND_3,
      minimumProtocolVersion: cf.SecurityPolicyProtocol.TLS_V1_2_2021,
      defaultBehavior: {
        origin: new origins.S3Origin(s3BucketProdWebsite),
        viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
      },
      errorResponses: [{
        ttl: cdk.Duration.seconds(10),
        httpStatus: 404,
        responseHttpStatus: 200,
        responsePagePath: "/index.html"
      }]
    });

    // A Records

    // new route53.ARecord(this, "ARecord-dev-api", {
    //   zone: route53HostedZone,
    //   recordName: "api.dev",
    //   target: route53.RecordTarget.fromAlias({bind: () => ({
    //     dnsName: cfDevApi.distributionDomainName,
    //     hostedZoneId: CF_HOSTED_ZONE_ID
    //   })})
    // });

    new route53.ARecord(this, "ARecord-dev-website", {
      zone: route53HostedZone,
      recordName: "dev",
      target: route53.RecordTarget.fromAlias({bind: () => ({
        dnsName: cfDevWebsite.distributionDomainName,
        hostedZoneId: CF_HOSTED_ZONE_ID
      })})
    });

    // new route53.ARecord(this, "ARecord-prod-api", {
    //   zone: route53HostedZone,
    //   recordName: "api",
    //   target: route53.RecordTarget.fromAlias({bind: () => ({
    //     dnsName: cfProdApi.distributionDomainName,
    //     hostedZoneId: CF_HOSTED_ZONE_ID
    //   })})
    // });

    new route53.ARecord(this, "ARecord-prod-website", {
      zone: route53HostedZone,
      recordName: "",
      target: route53.RecordTarget.fromAlias({bind: () => ({
        dnsName: cfProdWebsite.distributionDomainName,
        hostedZoneId: CF_HOSTED_ZONE_ID
      })})
    });

    // CDK CloudFormation Outputs
    const s3BucketDev     = new cdk.CfnOutput(this, "S3BucketDev",                  { value: S3_BUCKET_DEV });
    const s3BucketProd    = new cdk.CfnOutput(this, "S3BucketProd",                 { value: S3_BUCKET_PROD });
    const cfIdDev         = new cdk.CfnOutput(this, "CloudFrontDistributionIdDev",  { value: cfDevWebsite.distributionId });
    const cfIdProd        = new cdk.CfnOutput(this, "CloudFrontDistributionIdProd", { value: cfProdWebsite.distributionId });
  }
}
