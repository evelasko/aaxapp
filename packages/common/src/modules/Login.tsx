import { Field, FormikErrors, FormikProps, withFormik } from 'formik';
import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../ui/Logo';
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

class L extends React.PureComponent<FormikProps<FormValues> & Props> {
    render() {
        const {handleSubmit, handleForgot, handleRegister} = this.props
        return (
            <LinearGradient style={styles.loginView} colors={['rgb(35,35,35)','rgb(46,46,46)','rgb(33,33,33)']} locations={[0.06, 0.80, 1]}>
                <View style={styles.loginWrapper}>
                    <View style={styles.logo}>
                        <Logo width={200} height={200} />
                    </View>
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
            </LinearGradient>
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