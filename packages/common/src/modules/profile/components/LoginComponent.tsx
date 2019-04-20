import { Field, Formik } from 'formik';
import gql from 'graphql-tag';
import React from 'react';
import { Mutation } from 'react-apollo';
import { ActivityIndicator, Alert, AsyncStorage, Button, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { client } from '../../../apollo';
import LogoColor from '../../../ui/icons/logoColor/index';
import { InputField } from '../../../ui/shared/InputField';
import { loginSchema } from '../../../yupSchemas/user';
import { registerForPushNotificationsAsync } from '../../notifications';

const loginUserMutation = gql`
    mutation LoginUserMutation ( $email: String!, $password: String!, $device: String, $permission: Boolean ) 
    { loginUserMobile( data: { 
            email: $email, password: $password, deviceToken: $device, devicePermission: $permission
        } ) { token error } }   
`

const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    logoContainer: {
        width: '100%', marginBottom: 30, alignItems: 'center', marginTop: 30
    },
    inputFieldsView: {
        marginBottom: 25, width: '100%'
    },
    inputFields: {
        color: 'black', width: '50%', alignSelf: 'center', 
        borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'grey'
    },
    submitButton: {
        marginTop: 15, marginBottom: 20
    },
    linkTextView: {
        width: '100%',
        alignItems: 'center'
    },
    linkTextButtons: {
        color: "#EB894A",
        marginTop: 10, marginBottom: 15
    },
})

interface Props {
    loginSuccess: (per:string) => void
    handleForgot: () => void
    handleSignUp: () => void
    loginFailed: () => void
}

export default class LoginComponent extends React.Component<Props> {
    setUser = async (per:string) => {
        try { 
            await AsyncStorage.setItem('per', per) 
            await client.resetStore()
            this.props.loginSuccess(per)
        } catch(err) { console.log('ERROR: ', err) }
    }
    remountComponent = () => { this.forceUpdate() }
    render() {
        const {handleForgot, handleSignUp, loginFailed } = this.props
        return (
            <Mutation mutation={loginUserMutation}>
                {(loginUser) => {
                    return (
                        <ScrollView style={StyleSheet.absoluteFill}>
                            <Formik
                                initialValues={{email: '', password: '', permission: false, device: ''}}
                                validationSchema={loginSchema}
                                onSubmit={async (values, {resetForm}) => {
                                    try {
                                        const pushToken = await registerForPushNotificationsAsync()
                                        if (pushToken) {
                                            values.permission = true
                                            values.device = pushToken
                                        } else { 
                                            values.permission = false
                                            values.device = ''
                                        }
                                    } catch(err) { console.log('ERROR WHILE SETING UP PUSH NOTIFICATIONS @LOGIN: ', err)}
                                    try {
                                        const res:any = await loginUser({variables: values})
                                        if (res.data.loginUserMobile.token) {
                                            await this.setUser(res.data.loginUserMobile.token)
                                        }
                                    } catch(err) {
                                        Alert.alert(
                                            'Iniciar Sesión',
                                            'Las credenciales introducidas no coinciden con ningún usuario, por favor inténtelo de nuevo...',
                                            [{text: 'OK', onPress: () => {resetForm()}}],
                                            { cancelable: false }
                                        )
                                    }
                                }}
                            >
                                {({handleSubmit, isSubmitting, handleBlur, errors}) => {
                                    if (isSubmitting) {
                                        return (<View style={{...StyleSheet.absoluteFillObject, padding:25}}><ActivityIndicator /></View>)
                                    }
                                    return (
                                    <View>
                                        <View style={styles.logoContainer}>
                                            <LogoColor width={216} height={216} color="silver" />
                                        </View>
                                        <View>
                                            <View style={styles.inputFieldsView}>
                                                <Field 
                                                    name="email"
                                                    type="email"
                                                    textContentType="username"
                                                    autoCapitalize="none"
                                                    placeholder="email"
                                                    placeholderTextColor='grey'
                                                    spellCheck={false}
                                                    error={errors.email}
                                                    style={styles.inputFields}
                                                    component={InputField}
                                                />
                                            </View>
                                            <View style={styles.inputFieldsView}>
                                                <Field 
                                                    name="password"
                                                    type="password"
                                                    textContentType="password"
                                                    placeholder="contraseña"
                                                    placeholderTextColor='grey'
                                                    secureTextEntry
                                                    spellCheck={false}
                                                    error={errors.password}
                                                    style={styles.inputFields}
                                                    component={InputField}
                                                />
                                            </View>
                                        </View>
                                        <View style={{marginBottom:150}}>
                                            <View style={styles.submitButton}>
                                                <Button title="Iniciar Sesión" color="#EB894A" onPress={(e:any) => handleSubmit()} />
                                            </View>
                                            <View style={styles.linkTextView}>
                                                <Text style={styles.linkTextButtons} onPress={handleForgot}>recuerda tu contraseña</Text>
                                                <Text style={styles.linkTextButtons} onPress={handleSignUp}>regístrate aquí</Text>
                                            </View>
                                        </View>
                                    </View>
                                )}}
                            </Formik>
                        </ScrollView>
                    )
                }}
            </Mutation>
        )
    }
}
