import { FormikProps } from 'formik';
import React from 'react';
interface FormValues {
    email: string;
}
interface Props {
    onFinish: () => void;
    submit: (values: FormValues) => Promise<{
        [key: string]: string;
    } | null>;
}
export declare class F extends React.Component<FormikProps<FormValues> & Props> {
    render(): JSX.Element;
}
export declare const ForgotPasswordView: React.ComponentType<Props>;
export {};
