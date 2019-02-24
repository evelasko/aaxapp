export interface MeQuery_me_user {
    __typename: "User";
    id: string;
    name: string | null;
    lastname: string | null;
    email: string | null;
    group: UserGroup;
    isAdmin: boolean | null;
}
export interface MeQuery_me {
    __typename: "UserPayload";
    user: MeQuery_me_user | null;
    error: string | null;
}
export interface MeQuery {
    me: MeQuery_me | null;
}
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
export interface AllNewsQuery_allNews {
    __typename: "News";
    id: string;
    title: string;
    subtitle: string | null;
    body: string;
    imageURL: string | null;
    expiration: any;
    category: NewsCategory | null;
    featured: boolean | null;
}
export interface AllNewsQuery {
    allNews: (AllNewsQuery_allNews | null)[];
}
export declare enum NewsCategory {
    ALERT = "ALERT",
    CALL = "CALL",
    NEWS = "NEWS"
}
export declare enum UserGroup {
    PUBLIC = "PUBLIC",
    STAFF = "STAFF",
    STUDENT = "STUDENT"
}
