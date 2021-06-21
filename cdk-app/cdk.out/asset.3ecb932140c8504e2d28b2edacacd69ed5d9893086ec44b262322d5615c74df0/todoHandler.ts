
import AWS = require('aws-sdk')
const tableName = process.env.TABLE_NAME ?? "";
const dynamodb = new AWS.DynamoDB.DocumentClient()

const createResponse = (
    body: string | AWS.DynamoDB.DocumentClient.ItemList,
    statusCode = 200
) => ({
    statusCode,
    body: JSON.stringify(body, null, 2)
})
const getAllTodos = async () => {
    return await dynamodb.scan({
        TableName: tableName
    }).promise()

}

exports.handler = async function (event: AWSLambda.APIGatewayEvent) {
    try {
        const { httpMethod, body: requestBody } = event
        if (httpMethod === "GET") {
            const response = await getAllTodos()
            return createResponse(response?.Items ?? [])
        }
        return createResponse(`We only accept GET request for now, not ${httpMethod}`);
    } catch (error) {
        console.log('error', error);
        return createResponse(error, 500)
    }
}