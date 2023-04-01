'use client'
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure({
        aws_project_region: process.env.awsRegion,
        aws_cognito_identity_pool_id: process.env.cognitoIdentityPoolId,
        aws_cognito_region: process.env.awsRegion,
        aws_user_pools_id: process.env.awsUserPoolId,
        aws_user_pools_web_client_id: process.env.awsUserPoolWebClientId,
        oauth: {},
        aws_cognito_username_attributes: [],
        aws_cognito_social_providers: [],
        aws_cognito_signup_attributes: ["EMAIL"],
        aws_cognito_mfa_configuration: "OFF",
        aws_cognito_mfa_types: ["SMS"],
        aws_cognito_password_protection_settings: {
            passwordPolicyMinLength: 8,
            passwordPolicyCharacters: []
        },
        aws_cognito_verification_mechanisms: ["EMAIL"],
    }
);

const formFields = {
    confirmVerifyUser: {
        confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
};
  
const components = {
    VerifyUser: {
    Header() {
        const { tokens } = useTheme();
        return (
            <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>Enter Information:</Heading>
        );
    },
    Footer() {
        return <Text>Footer Information</Text>;
    },
},
  
ConfirmVerifyUser: {
    Header() {
        const { tokens } = useTheme();
        return (
            <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>Enter Information:</Heading>
        );
    },
    Footer() {
        return <Text>Footer Information</Text>;
    },
    },
};


export default function AuthManager( {children} ) {
    return(
        <Authenticator formFields={formFields} components={components} hideSignUp={true}>
            {children}
        </Authenticator>
    )
}