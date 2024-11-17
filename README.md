# Lumanation

Ensure that AWS CLI is installed:

https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

Ensure that AWS CDK is installed:

pnpm i --global aws-cdk

Setting up your config file in `.aws/config`
```
aws configure sso

Lumanation

SSO start URL: https://tundrashark.awsapps.com/start/#
SSO Region: us-east-1


[Enter]
json
Lumanation
```

Login before using `cdk` commands
```
aws sso login --profile=Lumanation
```

Deploy with these commands in the `cdk` directory
```
cdk bootstrap --profile=Lumanation
cdk deploy --profile=Lumanation
```

Once deploying has been completed, you can create configuration files with this command in the `website` directory
```
pnpm build-and-deploy-frontend-dev
```

For development, run this command in the `website` directory
```
pnpm dev
```
