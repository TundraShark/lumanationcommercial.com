import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Create SES client
const sesClient = new SESClient({ region: "us-east-1" }); // Replace with your AWS region

// Lambda handler function
export const handler = async (event, context) => {
  try {
    // Email parameters for SES
    const params = {
      Source: "coleman.leif@gmail.com",
      Destination: {
        ToAddresses: ["mageleif@yahoo.com"]
      },
      Message: {
        Subject: {
          Data: "Test Email from AWS Lambda",
          Charset: "UTF-8"
        },
        Body: {
          Html: {
            Data: "<h1>Test Email</h1><p>This is a test email sent from AWS Lambda using SES.</p>",
            Charset: "UTF-8"
          },
          Text: {
            Data: "This is a test email sent from AWS Lambda using SES.",
            Charset: "UTF-8"
          }
        }
      }
    };

    // Send email using SES
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent successfully!',
        messageId: response.MessageId
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error sending email',
        error: error.message
      })
    };
  }
};
