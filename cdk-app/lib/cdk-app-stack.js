"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkAppStack = void 0;
const cdk = require("@aws-cdk/core");
const apiGateway = require("@aws-cdk/aws-apigateway");
const todo_backend_1 = require("./todo-backend");
class CdkAppStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const toDoBackend = new todo_backend_1.ToDoBackend(this, 'ToDoBackend');
        // const helloLambda = new lambda.Function(this, 'HelloLambda', {
        //   code: lambda.Code.fromAsset('lambda'),
        //   handler: 'hello.handler',
        //   runtime: lambda.Runtime.NODEJS_12_X,
        //   memorySize: 256,
        //   timeout: Duration.seconds(30),
        //   environment: {
        //     isProduction: 'Not is not'
        //   }
        // })
        new apiGateway.LambdaRestApi(this, 'Endpoint', {
            handler: toDoBackend.handler
        });
        // const logoBucket = new s3.Bucket(this, 'LogoBucket', {
        //   publicReadAccess: true
        // });
        // logoBucket.addEventNotification(
        //   s3.EventType.OBJECT_CREATED,
        //   new s3Notifications.LambdaDestination(helloLambda)
        // );
        // new s3Deployment.BucketDeployment(this, "DeployLogo", {
        //   destinationBucket: logoBucket,
        //   sources: [s3Deployment.Source.asset("./assets")]
        // })
    }
}
exports.CdkAppStack = CdkAppStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWFwcC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNkay1hcHAtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscUNBQXNDO0FBQ3RDLHNEQUFzRDtBQUl0RCxpREFBNkM7QUFNN0MsTUFBYSxXQUFZLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDeEMsWUFBWSxLQUFjLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUE7UUFHeEQsaUVBQWlFO1FBQ2pFLDJDQUEyQztRQUMzQyw4QkFBOEI7UUFDOUIseUNBQXlDO1FBQ3pDLHFCQUFxQjtRQUNyQixtQ0FBbUM7UUFDbkMsbUJBQW1CO1FBQ25CLGlDQUFpQztRQUNqQyxNQUFNO1FBQ04sS0FBSztRQUNMLElBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQzdDLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTztTQUM3QixDQUFDLENBQUE7UUFFRix5REFBeUQ7UUFDekQsMkJBQTJCO1FBQzNCLE1BQU07UUFFTixtQ0FBbUM7UUFDbkMsaUNBQWlDO1FBQ2pDLHVEQUF1RDtRQUN2RCxLQUFLO1FBRUwsMERBQTBEO1FBQzFELG1DQUFtQztRQUNuQyxxREFBcUQ7UUFDckQsS0FBSztJQUNQLENBQUM7Q0FDRjtBQW5DRCxrQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqICBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBhcGlHYXRld2F5IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCAqIGFzIHMzIGZyb20gXCJAYXdzLWNkay9hd3MtczNcIjtcblxuaW1wb3J0ICogYXMgczNEZXBsb3ltZW50IGZyb20gXCJAYXdzLWNkay9hd3MtczMtZGVwbG95bWVudFwiO1xuaW1wb3J0IHsgVG9Eb0JhY2tlbmQgfSBmcm9tIFwiLi90b2RvLWJhY2tlbmRcIjtcblxuXG5cblxuXG5leHBvcnQgY2xhc3MgQ2RrQXBwU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgdG9Eb0JhY2tlbmQgPSBuZXcgVG9Eb0JhY2tlbmQodGhpcywgJ1RvRG9CYWNrZW5kJylcblxuXG4gICAgLy8gY29uc3QgaGVsbG9MYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb0xhbWJkYScsIHtcbiAgICAvLyAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksXG4gICAgLy8gICBoYW5kbGVyOiAnaGVsbG8uaGFuZGxlcicsXG4gICAgLy8gICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcbiAgICAvLyAgIG1lbW9yeVNpemU6IDI1NixcbiAgICAvLyAgIHRpbWVvdXQ6IER1cmF0aW9uLnNlY29uZHMoMzApLFxuICAgIC8vICAgZW52aXJvbm1lbnQ6IHtcbiAgICAvLyAgICAgaXNQcm9kdWN0aW9uOiAnTm90IGlzIG5vdCdcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIG5ldyBhcGlHYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgJ0VuZHBvaW50Jywge1xuICAgICAgaGFuZGxlcjogdG9Eb0JhY2tlbmQuaGFuZGxlclxuICAgIH0pXG5cbiAgICAvLyBjb25zdCBsb2dvQnVja2V0ID0gbmV3IHMzLkJ1Y2tldCh0aGlzLCAnTG9nb0J1Y2tldCcsIHtcbiAgICAvLyAgIHB1YmxpY1JlYWRBY2Nlc3M6IHRydWVcbiAgICAvLyB9KTtcblxuICAgIC8vIGxvZ29CdWNrZXQuYWRkRXZlbnROb3RpZmljYXRpb24oXG4gICAgLy8gICBzMy5FdmVudFR5cGUuT0JKRUNUX0NSRUFURUQsXG4gICAgLy8gICBuZXcgczNOb3RpZmljYXRpb25zLkxhbWJkYURlc3RpbmF0aW9uKGhlbGxvTGFtYmRhKVxuICAgIC8vICk7XG5cbiAgICAvLyBuZXcgczNEZXBsb3ltZW50LkJ1Y2tldERlcGxveW1lbnQodGhpcywgXCJEZXBsb3lMb2dvXCIsIHtcbiAgICAvLyAgIGRlc3RpbmF0aW9uQnVja2V0OiBsb2dvQnVja2V0LFxuICAgIC8vICAgc291cmNlczogW3MzRGVwbG95bWVudC5Tb3VyY2UuYXNzZXQoXCIuL2Fzc2V0c1wiKV1cbiAgICAvLyB9KVxuICB9XG59XG4iXX0=