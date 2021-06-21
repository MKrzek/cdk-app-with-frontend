"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoBackend = void 0;
const cdk = require("@aws-cdk/core");
const dynamodb = require("@aws-cdk/aws-dynamodb");
const lambda = require("@aws-cdk/aws-lambda");
class ToDoBackend extends cdk.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const todosTable = new dynamodb.Table(this, 'TodoDatabase', {
            partitionKey: { name: "id", type: dynamodb.AttributeType.STRING }
        });
        this.handler = new lambda.Function(this, "TodoHandler", {
            code: lambda.Code.fromAsset('lambda'),
            handler: "todoHandler.handler",
            runtime: lambda.Runtime.NODEJS_12_X,
            environment: {
                TABLE_NAME: todosTable.tableName
            }
        });
        todosTable.grantReadWriteData(this.handler);
    }
}
exports.ToDoBackend = ToDoBackend;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1iYWNrZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kby1iYWNrZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxrREFBa0Q7QUFDbEQsOENBQThDO0FBRzlDLE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxTQUFTO0lBRTFDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDaEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUdoQixNQUFNLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4RCxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtTQUNwRSxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3BELElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckMsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFdBQVcsRUFBRTtnQkFDVCxVQUFVLEVBQUUsVUFBVSxDQUFDLFNBQVM7YUFDbkM7U0FDSixDQUFDLENBQUE7UUFDRixVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRS9DLENBQUM7Q0FDSjtBQXJCRCxrQ0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcbmltcG9ydCAqIGFzIGR5bmFtb2RiIGZyb20gXCJAYXdzLWNkay9hd3MtZHluYW1vZGJcIjtcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcblxuXG5leHBvcnQgY2xhc3MgVG9Eb0JhY2tlbmQgZXh0ZW5kcyBjZGsuQ29uc3RydWN0IHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFuZGxlcjogbGFtYmRhLkZ1bmN0aW9uXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKVxuXG5cbiAgICAgICAgY29uc3QgdG9kb3NUYWJsZSA9IG5ldyBkeW5hbW9kYi5UYWJsZSh0aGlzLCAnVG9kb0RhdGFiYXNlJywge1xuICAgICAgICAgICAgcGFydGl0aW9uS2V5OiB7IG5hbWU6IFwiaWRcIiwgdHlwZTogZHluYW1vZGIuQXR0cmlidXRlVHlwZS5TVFJJTkcgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJUb2RvSGFuZGxlclwiLCB7XG4gICAgICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLFxuICAgICAgICAgICAgaGFuZGxlcjogXCJ0b2RvSGFuZGxlci5oYW5kbGVyXCIsXG4gICAgICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcbiAgICAgICAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgICAgICAgICAgVEFCTEVfTkFNRTogdG9kb3NUYWJsZS50YWJsZU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdG9kb3NUYWJsZS5ncmFudFJlYWRXcml0ZURhdGEodGhpcy5oYW5kbGVyKVxuXG4gICAgfVxufSJdfQ==