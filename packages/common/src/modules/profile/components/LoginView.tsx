import { Notifications, Permissions } from 'expo';
import { Field, FormikErrors, FormikProps, withFormik } from 'formik';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import LogoColor from '../../../ui/icons/logoColor/index';
import { InputField } from '../../../ui/shared/InputField';
import { loginSchema } from '../../../yupSchemas/user';


const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    logoContainer: {
        width: '100%', marginBottom: 35, alignItems: 'center'
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
    }
})

interface FormValues {
    email: string
    password: string
    device: string
    permission: boolean
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
    handleForgot: () => void
    handleSignUp: () => void
}

class L extends React.Component<FormikProps<FormValues> & Props> {
    render() {
        const {handleSubmit, handleForgot, handleSignUp} = this.props
        return (
            <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                <View style={styles.logoContainer}>
                    <LogoColor width={236} height={236} color="silver" />
                </View>
                <View style={styles.inputFieldsView}>
                    <Field 
                        name="email"
                        placeholder="email"
                        textContentType="username"
                        placeholderTextColor='grey'
                        spellCheck={false}
                        autocapitalize="none"
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
                <View style={styles.submitButton}>
                    <Button title="Iniciar Sesión" color="#EB894A" onPress={handleSubmit as any} />
                </View>
                <View style={styles.linkTextView}>
                    <Text style={styles.linkTextButtons} onPress={handleForgot}>recuerda tu contraseña</Text>
                    <Text style={styles.linkTextButtons} onPress={handleSignUp}>regístrate aquí</Text>
                </View>
            </View>
        )
    }
}

const LoginView = withFormik<Props, FormValues>({
    validationSchema: loginSchema,
    mapPropsToValues: () => ({ email: "", password: "", device: "", permission: false }),
    handleSubmit: async (values, { props, setErrors }) => {
        try {
            const { status: existingStatus } = await Permissions.getAsync( Permissions.NOTIFICATIONS)
            if (existingStatus !== 'granted') { values.permission = false }
            else { values.permission = true }
            values.device = await Notifications.getExpoPushTokenAsync()
        } catch(err) { console.log('ERROR WHILE SETING UP PUSH NOTIFICATIONS @LOGIN: ', err)}
        
        const errors = await props.submit(values)
        if (errors) { return setErrors(errors) }
    },
  })(L);

  export default LoginView