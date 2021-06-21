import * as cdk from "@aws-cdk/core";
import * as lambda from '@aws-cdk/aws-lambda';
export declare class ToDoBackend extends cdk.Construct {
    readonly handler: lambda.Function;
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps);
}
