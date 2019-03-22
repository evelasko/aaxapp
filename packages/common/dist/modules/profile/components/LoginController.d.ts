import React from 'react';
import { ChildMutateProps, WithApolloClient } from 'react-apollo';
import { LoginUserMutation, LoginUserMutationVariables } from '../../../schemaTypes';
interface Props {
    onSessionId?: (sessionId: string) => void;
    children: (data: {
        submit: (values: LoginUserMutationVariables) => Promise<{
            error: string | null;
            token: string | null;
        }>;
    }) => JSX.Element | null;
}
export declare class L extends React.PureComponent<ChildMutateProps<WithApolloClient<Props>, LoginUserMutation, LoginUserMutationVariables>> {
    submit: (values: LoginUserMutationVariables) => Promise<{
        error: any;
        token: null;
    } | {
        error: null;
        token: any;
    }>;
    render(): JSX.Element | null;
}
export declare const LoginController: React.ComponentClass<Props, any>;
export {};
