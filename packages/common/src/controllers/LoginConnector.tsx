import React from 'react';
import { LoginController } from '../controllers/LoginController';
import { LoginView } from '../modules/login/index';


export const LoginConnector: React.FC = () =>  {    
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
