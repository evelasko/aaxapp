import gql from 'graphql-tag';
import React from 'react';
import { ChildMutateProps, graphql, withApollo, WithApolloClient } from 'react-apollo';
import { LoginUserMutation, LoginUserMutationVariables } from '../../../schemaTypes';

const loginUserMutation = gql`
    mutation LoginUserMutation ( 
        $email: String!, 
        $password: String!,
        $device: String,
        $permission: Boolean
        ) 
    { loginUserMobile( data: { 
            email: $email, 
            password: $password, 
            deviceToken: $device,
            devicePermission: $permission
        } ) { token error } }   
`

interface Props {
    onSessionId?: (sessionId: string) => void
    children: ( 
        data: {
            submit: (values: LoginUserMutationVariables) => 
                Promise< {
                    error: string | null
                    token: string | null
                } > 
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
        if (response.data.loginUserMobile.error) {
            console.log(response.data.loginUserMobile.error)
            return {error: response.data.loginUserMobile.error || 'error', token: null}
        }
        if (this.props.onSessionId && response.data.loginUserMobile.token) {
            this.props.onSessionId(response.data.loginUserMobile.token)
        }
        await this.props.client.resetStore()
        return { error: null, token: response.data.loginUserMobile.token || null}
    }
    render() { return this.props.children({ submit: this.submit }) }
}
export const LoginController = graphql<Props, LoginUserMutation, LoginUserMutationVariables>
            (loginUserMutation)(withApollo<Props>(L as any))