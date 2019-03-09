import React from 'react';
import { AsyncStorage } from 'react-native';
import { LoginController } from './LoginController';
import { LoginView } from './LoginView';

interface Props {
    loginSuccess: () => void
    handleForgot: () => void
    handleSignUp: () => void
    handleGuest: () => void
}

export const LoginConnector: React.FC<Props> = ({loginSuccess, handleForgot, handleSignUp, handleGuest}) =>  {    
    return (
        <LoginController>
            {({ submit }) => 
                <LoginView 
                    submit={async (values:any) => {
                        const res = await submit(values)
                        if (res.token && !res.error) { 
                            try { await AsyncStorage.setItem('per', res.token) } 
                            catch(err) { console.log('ERROR: ', err) }
                            loginSuccess() // even if there were an error in writing to the storage the user will access if succesfully logged in
                        }
                        return null
                    }} 
                    handleForgot={handleForgot}
                    handleSignUp={handleSignUp}
                    handleGuest={handleGuest}
                />
            }
        </LoginController>
    )
}
