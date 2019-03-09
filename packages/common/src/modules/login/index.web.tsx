import React from 'react';
import { RouteComponentProps } from 'react-router';
import { LoginConnector } from './components/LoginConnector';

interface Props extends RouteComponentProps {}

const Login: React.FC<Props> = ({history}) =>  {    
    return (
        <LoginConnector
            loginSuccess={ () => {history.push('/content')} }
            handleForgot={ () => {history.push('/forgot')} }
            handleSignUp={ () => {history.push('Register')} }
            handleGuest={ () => {history.push('Content')} }
        />
    )
}

export default Login