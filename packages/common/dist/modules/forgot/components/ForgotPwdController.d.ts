import * as React from 'react';
import { ChildMutateProps, WithApolloClient } from 'react-apollo';
import { ForgotPasswordMutation, ForgotPasswordMutationVariables } from '../../../schemaTypes';
interface Props {
    children: (data: {
        submit: (values: ForgotPasswordMutationVariables) => Promise<{
            [key: string]: string;
        } | null>;
    }) => JSX.Element | null;
}
export declare class F extends React.PureComponent<ChildMutateProps<WithApolloClient<Props>, ForgotPasswordMutation, ForgotPasswordMutationVariables>> {
    submit: (values: ForgotPasswordMutationVariables) => Promise<{
        email: any;
    } | null>;
    render(): JSX.Element | null;
}
export declare const ForgotPasswordController: React.ComponentClass<Props, any>;
export {};
