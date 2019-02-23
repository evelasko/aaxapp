export interface LoginUserMutation_loginUser {
    __typename: "AuthPayload";
    token: string | null;
    error: string | null;
}
export interface LoginUserMutation {
    loginUser: LoginUserMutation_loginUser;
}
export interface LoginUserMutationVariables {
    email: string;
    password: string;
}
