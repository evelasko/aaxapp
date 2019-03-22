import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { client } from '../../../apollo';
import { LoginController } from './LoginController';
import LoginView from './LoginView';

interface Props {
    loginSuccess: (per:string) => void
    handleForgot: () => void
    handleSignUp: () => void
}

export const LoginConnector: React.FC<Props> = ({loginSuccess, handleForgot, handleSignUp}) =>  {    
    return (
        <LoginController>
            {({ submit }) => 
                <LoginView 
                    submit={ async (values:any) => {
                        const res = await submit(values)
                        if (res.error) {
                            Alert.alert(
                                'Iniciar Sesión',
                                'Las credenciales introducidas son inválidas, por favor inténtelo de nuevo...',
                                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                                { cancelable: false }
                              )
                        }
                        if (res.token && !res.error) { 
                            try { 
                                await AsyncStorage.setItem('per', res.token) 
                                await client.resetStore()
                            } 
                            catch(err) { console.log('ERROR: ', err) }
                            loginSuccess(res.token)
                        }
                        return null
                    }} 
                    handleForgot={handleForgot}
                    handleSignUp={handleSignUp}
                />
            }
        </LoginController>
    )
}