import { Feather, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo';
import gql from 'graphql-tag';
import { inject } from 'mobx-react/native';
import React from 'react';
import { AsyncStorage, Linking, StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { client } from '../../apollo';
import appStore, { AppStore } from '../../store';
import { headerHeight } from '../../ui/shared/SharedConstants/index';
import { LoginConnector } from './components/LoginConnector';
import ProfileView from './components/ProfileView';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject, 
        padding:10, paddingTop: 50, marginTop: headerHeight
    }
})

@inject('appStore')
class Profile extends React.Component<NavigationScreenProps&{appStore: AppStore}> {
    
    state = { guest: !this.props.appStore.per }
    
    static navigationOptions = ({navigation}:any) => ({ 
        title: 'Perfil' ,
        headerTransparent: true,
        animationEnabled: true,
        headerLeft: <Ionicons 
                        name="ios-menu"
                        color="gray"
                        size={32}
                        onPress={() => navigation.openDrawer()}
                        style={{marginLeft: 15}}
                    />,
        headerRight: appStore.per && <Feather name='sliders'
                        color="gray"
                        size={24}
                        onPress={() => navigation.navigate('Settings')}
                        style={{marginRight: 15}}
                    />,
        headerBackground: (
            <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
        headerTitleStyle: { fontWeight: 'bold' }
    })

    shiftUser = () => {
        this.setState({ guest: !this.props.appStore.per})
    }
    render() {
        
        const { navigation, appStore } = this.props
        console.log('AT PROFILE RENDER: ', appStore.per)
        if (!this.state.guest) return (
            <View style={styles.container}>
                <ProfileView
                    userQRID={appStore.per}
                    logOutUser={async() => {
                        try {
                            const logOutMutation = gql`
                            mutation LogOutMutation { logoutUser { token error } }
                            `
                            await client.mutate({
                                mutation: logOutMutation,
                                refetchQueries: ['AllNewsQuery', 'AllEventsQuery']
                            })
                            await AsyncStorage.removeItem('per')
                            appStore.unsetUser()
                            this.shiftUser()
                        } catch(err) { console.log('LOGGIN OFF ERROR: ', err)}
                    }}
                />
            </View>
        )
        return  (
            <View style={styles.container}>
                <LoginConnector
                    loginSuccess={ (per:string) => {
                        if (per) { appStore.setUser(per) }
                        this.shiftUser() 
                    }}
                    handleForgot={ () => { Linking.openURL('https://admin.alicialonso.org/forgot/')} }
                    handleSignUp={ () => { navigation.navigate('SignUp') } }
                />
            </View>
        )
    }
}

export default Profile
