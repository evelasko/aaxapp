import gql from 'graphql-tag';
import React from 'react';
import { ChildMutateProps, graphql, withApollo, WithApolloClient } from 'react-apollo';
import { LoginUserMutation, LoginUserMutationVariables } from '../schemaTypes';

const loginUserMutation = gql`
    mutation LoginUserMutation ( $email: String!, $password: String! ) 
    { loginUser( data: { email: $email, password: $password } ) { token error } }   
`

interface Props {
    onSessionId?: (sessionId: string) => void
    children: ( 
        data: {
            submit: (values: LoginUserMutationVariables) => 
                Promise<{ [key: string]: string } | null > 
        }
    ) => JSX.Element | null
}
const normalizeResponse = (payload: any) => {
    return payload
}
export class L extends React.PureComponent<
                            ChildMutateProps<
                                WithApolloClient<Props>, 
                                LoginUserMutation, 
                                LoginUserMutationVariables
                            >
                        > {
    submit = async (values: LoginUserMutationVariables) => {
        const response = normalizeResponse(await this.props.mutate({ variables: values }))
        if (response.data.loginUser.error) {
            console.log(response.data.loginUser.error)
            return {error: response.data.loginUser.error}
        }
        if (this.props.onSessionId && response.data.loginUser.token) {
            this.props.onSessionId(response.data.loginUser.token)
        }
        await this.props.client.resetStore()
        return {error: null}
    }
    render() { return this.props.children({ submit: this.submit }) }
}
export const LoginController = graphql<
    Props, LoginUserMutation, LoginUserMutationVariables
    >(loginUserMutation)(withApollo<Props>(L as any))