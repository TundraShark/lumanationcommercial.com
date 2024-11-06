import { DynamoDBClient, GetItemCommand, PutItemCommand, DeleteItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";

const tableName = "LumaNation-dynamo-dev";

const dynamoClient = new DynamoDBClient({
  region: "us-east-1"
});

async function GetAll (event) {
  const type = event?.queryStringParameters?.type;

  if (!["aa", "dd"].includes(type)) {
    return "BAD";
  }

  const params = {
    TableName: tableName,
    KeyConditionExpression:    "#type = :type",
    ExpressionAttributeNames:  { "#type": "type" },
    ExpressionAttributeValues: { ":type": { S: type }}
  };

  const command = new QueryCommand(params);
  const result = await dynamoClient.send(command);
  const emailAddresses = result.Items.map(item => item.emailAddress.S);

  return emailAddresses;
}

async function GetOne (event) {
  const type         = event?.queryStringParameters?.type;
  const emailAddress = event?.queryStringParameters?.emailAddress;

  if (!["aa", "dd"].includes(type) || !emailAddress) {
    return "BAD";
  }

  const params = {
    TableName: tableName,
    Key: {
      type: { S: type },
      emailAddress: { S: emailAddress }
    }
  };

  const command = new GetItemCommand(params);
  const result = await dynamoClient.send(command);

  if ("Item" in result) {
    return result.Item.emailAddress.S;
  } else {
    return null;
  }
}

async function PutOne (event) {
  const { type, emailAddress } = JSON.parse(event.body);

  if (!["aa", "dd"].includes(type) || !emailAddress) {
    return "BAD";
  }

  const params = {
    TableName: tableName,
    Item: {
      type: { S: type },
      emailAddress: { S: emailAddress }
    }
  };

  const command = new PutItemCommand(params);
  const result = await dynamoClient.send(command);

  return result.$metadata.httpStatusCode;
}

async function DeleteOne (event) {
  const { type, emailAddress } = JSON.parse(event.body);

  if (!["aa", "dd"].includes(type) || !emailAddress) {
    return "BAD";
  }

  const params = {
    TableName: tableName,
    Key: {
      emailAddress: { S: emailAddress },
      type: { S: type }
    }
  };

  const command = new DeleteItemCommand(params);
  const result = await dynamoClient.send(command);

  return result.$metadata.httpStatusCode;
}

async function GET (event) {
  switch (event.requestContext.http.path) {
    case "/all": return await GetAll(event);
    case "/one": return await GetOne(event);
    default:     return null;
  }
}

async function POST (event) {
  switch (event.requestContext.http.path) {
    case "/subscribe":   return await PutOne(event);
    case "/unsubscribe": return await DeleteOne(event);
    default:             return null;
  }
}

export async function handler (event) {
  switch (event.requestContext.http.method) {
    case "GET":  return await GET(event);
    case "POST": return await POST(event);
    default:     return null;
  }
}
