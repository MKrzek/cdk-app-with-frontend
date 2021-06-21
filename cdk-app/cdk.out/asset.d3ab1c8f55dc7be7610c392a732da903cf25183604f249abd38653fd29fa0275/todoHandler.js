"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const tableName = (_a = process.env.TABLE_NAME) !== null && _a !== void 0 ? _a : "";
const dynamodb = new AWS.DynamoDB.DocumentClient();
const createResponse = (body, statusCode = 200) => ({
    statusCode,
    body: JSON.stringify(body, null, 2)
});
const getAllTodos = async () => await dynamodb.scan({
    TableName: tableName
}).promise();
const addTodoItem = async (data) => {
    const { id, todo } = data;
    if (todo && todo !== "") {
        await dynamodb.put({
            TableName: tableName,
            Item: {
                id: "totally_random_id",
                todo
            }
        }).promise();
    }
    return todo;
};
const deleteTodoItem = async (data) => {
    const { id } = data;
    if (id && id !== "") {
        await dynamodb.delete({
            TableName: tableName,
            Key: {
                id
            }
        }).promise();
    }
    return id;
};
exports.handler = async function (event) {
    var _a;
    try {
        const { httpMethod, body: requestBody } = event;
        if (httpMethod === "GET") {
            const response = await getAllTodos();
            console.log('xxxx-response', response);
            return createResponse((_a = response === null || response === void 0 ? void 0 : response.Items) !== null && _a !== void 0 ? _a : []);
        }
        if (requestBody == null) {
            return createResponse('missing request body', 500);
        }
        const data = JSON.parse(requestBody);
        if (httpMethod === "POST") {
            const todo = await addTodoItem(data);
            return todo ? createResponse(`${todo} added to the database`)
                : createResponse('Todo is  missing', 500);
        }
        if (httpMethod === 'DELETE') {
            const id = await deleteTodoItem(data);
            return id ? createResponse(`Todo item with id: ${id} was delted`) : createResponse("ID missing", 500);
        }
        return createResponse(`We only accept GET,POST, OPTIONS, and DELETE request for now, not ${httpMethod}`);
    }
    catch (error) {
        console.log('error', error);
        return createResponse(error, 500);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwrQkFBK0I7QUFDL0IsTUFBTSxTQUFTLFNBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLG1DQUFJLEVBQUUsQ0FBQztBQUMvQyxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUE7QUFFbEQsTUFBTSxjQUFjLEdBQUcsQ0FDbkIsSUFBbUQsRUFDbkQsVUFBVSxHQUFHLEdBQUcsRUFDbEIsRUFBRSxDQUFDLENBQUM7SUFDRixVQUFVO0lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Q0FDdEMsQ0FBQyxDQUFBO0FBQ0YsTUFBTSxXQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FDM0IsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2hCLFNBQVMsRUFBRSxTQUFTO0NBQ3ZCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtBQUdoQixNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBa0MsRUFBRSxFQUFFO0lBQzdELE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFBO0lBQ3pCLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7UUFDckIsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ2YsU0FBUyxFQUFFLFNBQVM7WUFDcEIsSUFBSSxFQUFFO2dCQUNGLEVBQUUsRUFBRSxtQkFBbUI7Z0JBQ3ZCLElBQUk7YUFDUDtTQUNKLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtLQUNmO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDZixDQUFDLENBQUE7QUFDRCxNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUUsSUFBb0IsRUFBRSxFQUFFO0lBQ2xELE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUE7SUFDbkIsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNqQixNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsR0FBRyxFQUFFO2dCQUNELEVBQUU7YUFDTDtTQUNKLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtLQUNmO0lBQ0QsT0FBTyxFQUFFLENBQUE7QUFHYixDQUFDLENBQUE7QUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssV0FBVyxLQUFnQzs7SUFDOUQsSUFBSTtRQUNBLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQTtRQUMvQyxJQUFJLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFDdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxXQUFXLEVBQUUsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUN0QyxPQUFPLGNBQWMsT0FBQyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsS0FBSyxtQ0FBSSxFQUFFLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUksV0FBVyxJQUFJLElBQUksRUFBRTtZQUNyQixPQUFPLGNBQWMsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUNyRDtRQUNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFcEMsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXBDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLHdCQUF3QixDQUFDO2dCQUN6RCxDQUFDLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ2hEO1FBQ0QsSUFBSSxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxHQUFHLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDeEc7UUFFRCxPQUFPLGNBQWMsQ0FBQyxxRUFBcUUsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUM1RztJQUNELE9BQU8sS0FBSyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3JDO0FBQ0wsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQVdTID0gcmVxdWlyZSgnYXdzLXNkaycpXG5jb25zdCB0YWJsZU5hbWUgPSBwcm9jZXNzLmVudi5UQUJMRV9OQU1FID8/IFwiXCI7XG5jb25zdCBkeW5hbW9kYiA9IG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKVxuXG5jb25zdCBjcmVhdGVSZXNwb25zZSA9IChcbiAgICBib2R5OiBzdHJpbmcgfCBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQuSXRlbUxpc3QsXG4gICAgc3RhdHVzQ29kZSA9IDIwMFxuKSA9PiAoe1xuICAgIHN0YXR1c0NvZGUsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMilcbn0pXG5jb25zdCBnZXRBbGxUb2RvcyA9IGFzeW5jICgpID0+XG4gICAgYXdhaXQgZHluYW1vZGIuc2Nhbih7XG4gICAgICAgIFRhYmxlTmFtZTogdGFibGVOYW1lXG4gICAgfSkucHJvbWlzZSgpXG5cblxuY29uc3QgYWRkVG9kb0l0ZW0gPSBhc3luYyAoZGF0YTogeyB0b2RvOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHRvZG8gfSA9IGRhdGFcbiAgICBpZiAodG9kbyAmJiB0b2RvICE9PSBcIlwiKSB7XG4gICAgICAgIGF3YWl0IGR5bmFtb2RiLnB1dCh7XG4gICAgICAgICAgICBUYWJsZU5hbWU6IHRhYmxlTmFtZSxcbiAgICAgICAgICAgIEl0ZW06IHtcbiAgICAgICAgICAgICAgICBpZDogXCJ0b3RhbGx5X3JhbmRvbV9pZFwiLFxuICAgICAgICAgICAgICAgIHRvZG9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkucHJvbWlzZSgpXG4gICAgfVxuICAgIHJldHVybiB0b2RvXG59XG5jb25zdCBkZWxldGVUb2RvSXRlbSA9IGFzeW5jIChkYXRhOiB7IGlkOiBzdHJpbmcgfSkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IGRhdGFcbiAgICBpZiAoaWQgJiYgaWQgIT09IFwiXCIpIHtcbiAgICAgICAgYXdhaXQgZHluYW1vZGIuZGVsZXRlKHtcbiAgICAgICAgICAgIFRhYmxlTmFtZTogdGFibGVOYW1lLFxuICAgICAgICAgICAgS2V5OiB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkucHJvbWlzZSgpXG4gICAgfVxuICAgIHJldHVybiBpZFxuXG5cbn1cblxuZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50OiBBV1NMYW1iZGEuQVBJR2F0ZXdheUV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBodHRwTWV0aG9kLCBib2R5OiByZXF1ZXN0Qm9keSB9ID0gZXZlbnRcbiAgICAgICAgaWYgKGh0dHBNZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd4eHh4LXJlc3BvbnNlJywgcmVzcG9uc2UpXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUmVzcG9uc2UocmVzcG9uc2U/Lkl0ZW1zID8/IFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0Qm9keSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUmVzcG9uc2UoJ21pc3NpbmcgcmVxdWVzdCBib2R5JywgNTAwKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3RCb2R5KVxuXG4gICAgICAgIGlmIChodHRwTWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGF3YWl0IGFkZFRvZG9JdGVtKGRhdGEpXG5cbiAgICAgICAgICAgIHJldHVybiB0b2RvID8gY3JlYXRlUmVzcG9uc2UoYCR7dG9kb30gYWRkZWQgdG8gdGhlIGRhdGFiYXNlYClcbiAgICAgICAgICAgICAgICA6IGNyZWF0ZVJlc3BvbnNlKCdUb2RvIGlzICBtaXNzaW5nJywgNTAwKVxuICAgICAgICB9XG4gICAgICAgIGlmIChodHRwTWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBhd2FpdCBkZWxldGVUb2RvSXRlbShkYXRhKVxuICAgICAgICAgICAgcmV0dXJuIGlkID8gY3JlYXRlUmVzcG9uc2UoYFRvZG8gaXRlbSB3aXRoIGlkOiAke2lkfSB3YXMgZGVsdGVkYCkgOiBjcmVhdGVSZXNwb25zZShcIklEIG1pc3NpbmdcIiwgNTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVJlc3BvbnNlKGBXZSBvbmx5IGFjY2VwdCBHRVQsUE9TVCwgT1BUSU9OUywgYW5kIERFTEVURSByZXF1ZXN0IGZvciBub3csIG5vdCAke2h0dHBNZXRob2R9YCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBjcmVhdGVSZXNwb25zZShlcnJvciwgNTAwKTtcbiAgICB9XG59Il19