import { Field, FormikErrors, FormikProps, withFormik } from 'formik';
import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import Logo from '../../../ui/icons/logo/index';
import { InputField } from '../../../ui/shared/InputField';
import { loginSchema } from "../../../yupSchemas/user";

interface FormValues {
    email: string
    password: string
}
interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
    handleForgot: () => void
    handleSignUp: () => void
    handleGuest: () => void
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        justifyContent: 'center',
    },
    loginWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 3
    },
    loginBackground: {
        width: '100%', height: '100%',
        backgroundColor: 'blue',
        zIndex: 1,
    },
    logo: {
        marginBottom: 100
    },
    inputFieldsView: {
        borderBottomColor: "rgba(0,0,0,0.3)",
        borderBottomWidth: 1,
        marginBottom: 25,
        width: '60%',
        paddingBottom: 5
    },
    inputFields: {
        color: "white"
    },
    submitButton: {
        margin: 25, width: '60%'
    },
    linkTextView: {
        width: '100%',
        alignItems: 'center'
    },
    linkTextButtons: {
        color: "#EB894A",
        marginTop: 10, marginBottom: 10
    }
})

class L extends React.Component<FormikProps<FormValues> & Props> {
    render() {
        const {handleSubmit, handleForgot, handleSignUp, handleGuest} = this.props
        return (
                <View style={styles.loginWrapper}>
                    <View style={styles.logo}>
                        <Logo width={200} height={200} />
                    </View>
                    <View style={styles.inputFieldsView}>
                        <Field 
                            name="email"
                            placeholder="email"
                            textContentType="username"
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
                    <View style={styles.submitButton}>
                        <Button title="Login" color="#EB894A" onPress={handleSubmit as any} />
                    </View>
                    <View style={styles.linkTextView}>
                        <Text style={styles.linkTextButtons} onPress={handleForgot}>recuerda tu contraseña</Text>
                        <Text style={styles.linkTextButtons} onPress={handleSignUp}>regístrate aquí</Text>
                        <Text style={styles.linkTextButtons} onPress={handleGuest}>entrar como visitante</Text>
                    </View>
                </View>
    )}
}

export const LoginView = withFormik<Props, FormValues>({
    validationSchema: loginSchema,
    mapPropsToValues: () => ({ email: "", password: "" }),
    handleSubmit: async (values, { props, setErrors }) => {
      const errors = await props.submit(values)
      if (errors) { return setErrors(errors) }
    },
  })(L);
