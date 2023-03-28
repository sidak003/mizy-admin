'use client'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);


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