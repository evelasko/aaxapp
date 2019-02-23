import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { LoginController } from '../controllers/LoginController';
import { LoginView } from '../modules/Login';
import { RootStoreContext } from '../stores/RootStore';


export const LoginConnector: React.FC = observer(() =>  {    
    const rootStore = useContext(RootStoreContext)
    return (
        <LoginController>
            {({ submit }) => 
                <LoginView 
                    submit={async (values:any) => {
                        const res = await submit(values)
                        if (res && !res.error) { rootStore.routerStore.screen = 'Main' }
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
})
