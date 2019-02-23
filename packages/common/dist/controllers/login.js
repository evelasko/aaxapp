"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
// import { LoginUserMutation, LoginUserMutationVariables } from '../../schemaTypes'
// import { normalizeResponse } from '../../utils/normalizeResponse'
var loginUserMutation = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation LoginUserMutation ( $email: String!, $password: String! ) \n    { loginUser( data: { email: $email, password: $password } ) { token error } }   \n"], ["\n    mutation LoginUserMutation ( $email: String!, $password: String! ) \n    { loginUser( data: { email: $email, password: $password } ) { token error } }   \n"
    // interface Props {
    //     onSessionId?: (sessionId: string) => void
    //     children: ( 
    //         data: {
    //             submit: (values: LoginUserMutationVariables) => 
    //                 Promise<{ [key: string]: string } | null > 
    //         }
    //     ) => JSX.Element | null
    // }
    // export class L extends React.PureComponent<
    //                             ChildMutateProps<
    //                                 WithApolloClient<Props>, 
    //                                 LoginUserMutation, 
    //                                 LoginUserMutationVariables
    //                             >
    //                         > {
    //     submit = async (values: LoginUserMutationVariables) => {
    //         const response = normalizeResponse(await this.props.mutate({ variables: values }))
    //         if (response.data.loginUser.error) {
    //             console.log(response.data.loginUser.error)
    //             return {error: response.data.loginUser.error}
    //         }
    //         if (this.props.onSessionId && response.data.loginUser.token) {
    //             this.props.onSessionId(response.data.loginUser.token)
    //         }
    //         await this.props.client.resetStore()
    //         return {error: null}
    //     }
    //     render() { return this.props.children({ submit: this.submit }) }
    // }
    // export const LoginController = graphql<
    //     Props, LoginUserMutation, LoginUserMutationVariables
    //     >(loginUserMutation)(withApollo<Props>(L as any))])));
var templateObject_1;
// interface Props {
//     onSessionId?: (sessionId: string) => void
//     children: ( 
//         data: {
//             submit: (values: LoginUserMutationVariables) => 
//                 Promise<{ [key: string]: string } | null > 
//         }
//     ) => JSX.Element | null
// }
// export class L extends React.PureComponent<
//                             ChildMutateProps<
//                                 WithApolloClient<Props>, 
//                                 LoginUserMutation, 
//                                 LoginUserMutationVariables
//                             >
//                         > {
//     submit = async (values: LoginUserMutationVariables) => {
//         const response = normalizeResponse(await this.props.mutate({ variables: values }))
//         if (response.data.loginUser.error) {
//             console.log(response.data.loginUser.error)
//             return {error: response.data.loginUser.error}
//         }
//         if (this.props.onSessionId && response.data.loginUser.token) {
//             this.props.onSessionId(response.data.loginUser.token)
//         }
//         await this.props.client.resetStore()
//         return {error: null}
//     }
//     render() { return this.props.children({ submit: this.submit }) }
// }
// export const LoginController = graphql<
//     Props, LoginUserMutation, LoginUserMutationVariables
//     >(loginUserMutation)(withApollo<Props>(L as any))
