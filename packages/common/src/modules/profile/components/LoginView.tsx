import { Field, FormikErrors, FormikProps, withFormik } from 'formik';
import React from 'react';
import { ActivityIndicator, Button, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import LogoColor from '../../../ui/icons/logoColor/index';
import { InputField } from '../../../ui/shared/InputField';
import { loginSchema } from '../../../yupSchemas/user';
import { registerForPushNotificationsAsync } from '../../notifications';

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

interface FormValues {
    email: string
    password: string
    device: string | null
    permission: boolean
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
    handleForgot: () => void
    handleSignUp: () => void
}

class L extends React.Component<FormikProps<FormValues> & Props> {
    render() {
        const {handleSubmit, handleForgot, handleSignUp, isSubmitting} = this.props
        if (isSubmitting) {
            return (
                <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <ScrollView style={StyleSheet.absoluteFill}>
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
                            style={styles.inputFields}
                            component={InputField}
                        />
                    </View>
                </View>
                <View style={{marginBottom:150}}>
                    <View style={styles.submitButton}>
                        <Button title="Iniciar Sesión" color="#EB894A" onPress={handleSubmit as any} />
                    </View>
                    <View style={styles.linkTextView}>
                        <Text style={styles.linkTextButtons} onPress={handleForgot}>recuerda tu contraseña</Text>
                        <Text style={styles.linkTextButtons} onPress={handleSignUp}>regístrate aquí</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const LoginView = withFormik<Props, FormValues>({
    validationSchema: loginSchema,
    mapPropsToValues: () => ({ email: "", password: "", device: "", permission: false }),
    handleSubmit: async (values, { props, setErrors }) => {
        try {
            const pushToken = await registerForPushNotificationsAsync()
            if (pushToken) {
                values.permission = true
                values.device = pushToken
            } else { 
                values.permission = false
                values.device = null
            }
        } catch(err) { console.log('ERROR WHILE SETING UP PUSH NOTIFICATIONS @LOGIN: ', err)}
        const errors = await props.submit(values)
        if (errors) { return setErrors(errors) }
    },
  })(L);

  export default LoginView