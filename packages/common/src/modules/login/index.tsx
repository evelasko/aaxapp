import { inject } from 'mobx-react/native';
import React from 'react';
import { AsyncStorage, Linking } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import appStore, { AppStore } from '../../store';
import { LoginConnector } from './components/LoginConnector';

interface Props extends NavigationScreenProps {}

@inject('appStore')
export default class Login extends React.Component<Props&{appStore: AppStore}> {
    async componentDidMount() {
        try {
            const per = await AsyncStorage.getItem('per')
            if (per) {
                console.log('FETCHED PER: ', per)
                appStore.setUser(per)
                this.props.navigation.navigate('Content')
            }
        } catch(err) {
            console.log('ERROR WHILE FETCHING FROM ASYNC STORAGE: ', err)
        }
    }
    render() {
        const { navigation } = this.props
        return (
            <LoginConnector
                loginSuccess={ () => {navigation.navigate('Content')} }
                handleForgot={  ()=>{ Linking.openURL('https://admin.alicialonso.org/forgot')} }
                handleSignUp={ () => { Linking.openURL('https://admin.alicialonso.org/register')} }
                handleGuest={ () => {navigation.navigate('Content')} }
            />
        )
    }
}
