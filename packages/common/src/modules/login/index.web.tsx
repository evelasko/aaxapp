import React from 'react';
import { RouteComponentProps } from 'react-router';
import { LoginController } from './components/LoginController';
import { LoginView } from './components/LoginView/index';

interface Props extends RouteComponentProps {}

export const LoginConnector: React.FC<Props> = ({history}) =>  {    
    return (
        <LoginController>
            {({ submit }) => 
                <LoginView 
                    submit={async (values:any) => {
                        const res = await submit(values)
                        if (res && !res.error) { 
                            // history.push('/content')
                            // rootStore.routerStore.screen = 'Main' 
                        }
                        return null
                    }} 
                    handleForgot={ () => {
                        history.push('Content')
                        console.log('Handle Forgot')
                    }}
                    handleRegister={ () => {
                        console.log('Handle Register')
                    }}
                />
            }
        </LoginController>
    )
}
