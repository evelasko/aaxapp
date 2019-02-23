import { Field, FormikErrors, FormikProps, withFormik } from 'formik';
import React from "react";
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { InputField } from '../ui/shared/InputFiled';
import { loginSchema } from "../yupSchemas/user";

interface FormValues {
    email: string
    password: string
}
interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
    handleForgot: () => void
    handleRegister: () => void
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#2E2E2E",
    },
    loginWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        width: 200, height: 200, resizeMode: 'cover', marginBottom: 100
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

class L extends React.PureComponent<FormikProps<FormValues> & Props> {
    render() {
        const {handleSubmit, handleForgot, handleRegister} = this.props
        return (
        <View style={styles.loginView}>
            <View style={styles.loginWrapper}>
                <Image style={styles.logo} source={{uri: 'https://res.cloudinary.com/huh9ixig7/image/upload/v1550788418/aaxapi_images/c2w25yqpsjigg63z6act.jpg'}} />
                <View style={styles.inputFieldsView}>
                    <Field 
                        name="email"
                        placeholder="email"
                        textContentType="username"
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
                        placeholder="password"
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
                    <Text style={styles.linkTextButtons} onPress={handleRegister}>regístrate aquí</Text>
                </View>
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
      // props.onFinish()
      return 'ok'
    },
  })(L);