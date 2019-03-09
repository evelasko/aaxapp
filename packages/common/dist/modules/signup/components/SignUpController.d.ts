import * as React from 'react';
import { SignUpUserMutationVariables } from '../../../schemaTypes';
interface Props {
    children: (data: {
        submit: (values: SignUpUserMutationVariables) => Promise<{
            [key: string]: string;
        } | null>;
    }) => JSX.Element | null;
}
declare const SignUpController: React.ComponentClass<Props, any>;
export default SignUpController;
