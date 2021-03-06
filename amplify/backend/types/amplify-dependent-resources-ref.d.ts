export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "debtrepayment": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "HostedUIDomain": "string",
            "OAuthMetadata": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "GoogleWebClient": "string",
            "FacebookWebClient": "string"
        },
        "userPoolGroups": {
            "adminGroupRole": "string",
            "authenticatedGroupRole": "string",
            "unauthenticatedGroupRole": "string"
        }
    },
    "api": {
        "debtrepayment": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}