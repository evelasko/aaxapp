import { FormikErrors } from 'formik';
import React from 'react';
interface FormValues {
    email: string;
    password: string;
    device: string;
    permission: boolean;
}
interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
    handleForgot: () => void;
    handleSignUp: () => void;
}
declare const LoginView: React.ComponentType<Props>;
export default LoginView;
