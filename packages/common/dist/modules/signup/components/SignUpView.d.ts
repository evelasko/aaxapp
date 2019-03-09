import { FormikErrors } from 'formik';
import React from 'react';
import { UserGroup } from '../../../schemaTypes';
interface FormValues {
    email: string;
    password: string;
    name: string;
    lastname: string;
    groupRequest: UserGroup;
}
interface Props {
    onFinish: () => void;
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}
declare const SignUpView: React.ComponentType<Props>;
export default SignUpView;
