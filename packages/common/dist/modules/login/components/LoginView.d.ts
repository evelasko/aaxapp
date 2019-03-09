import { FormikErrors } from 'formik';
import React from "react";
interface FormValues {
    email: string;
    password: string;
}
interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
    handleForgot: () => void;
    handleSignUp: () => void;
    handleGuest: () => void;
}
export declare const LoginView: React.ComponentType<Props>;
export {};
