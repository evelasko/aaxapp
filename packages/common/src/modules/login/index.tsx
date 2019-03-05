import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { LoginController } from './components/LoginController';
import { LoginView } from './components/LoginView/index';

interface Props extends NavigationScreenProps {}

export const LoginConnector: React.FC<Props> = ({navigation}) =>  {    
    return (
        <LoginController>
            {({ submit }) => 
                <LoginView 
                    submit={async (values:any) => {
                        const res = await submit(values)
                        if (res && !res.error) { 
                            navigation.navigate('Content')
                            // check here for agreement acceptance from mutation results
                            // if not accepted then navigate to the agreement screen
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
                    handleGuest={ () => navigation.navigate('Content') }
                />
            }
        </LoginController>
    )
}
