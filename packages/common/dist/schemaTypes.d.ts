export interface ChangePasswordMutation_changePassword {
    __typename: "AuthPayload";
    token: string | null;
    error: string | null;
}
export interface ChangePasswordMutation {
    changePassword: ChangePasswordMutation_changePassword;
}
export interface ChangePasswordMutationVariables {
    key?: string | null;
    newPassword: string;
}
export interface AllEventsQuery_events_venue {
    __typename: "Venue";
    name: string;
    address: string | null;
    placeID: string | null;
}
export interface AllEventsQuery_events {
    __typename: "Event";
    id: string;
    title: string;
    subtitle: string | null;
    body: string;
    imageURL: string | null;
    date: any;
    venue: AllEventsQuery_events_venue;
}
export interface AllEventsQuery {
    events: (AllEventsQuery_events | null)[];
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
    createdAt: any;
}
export interface AllNewsQuery {
    allNews: (AllNewsQuery_allNews | null)[];
}
export interface ForgotPasswordMutation_sendForgotPasswordEmail {
    __typename: "AuthPayload";
    token: string | null;
    error: string | null;
}
export interface ForgotPasswordMutation {
    sendForgotPasswordEmail: ForgotPasswordMutation_sendForgotPasswordEmail;
}
export interface ForgotPasswordMutationVariables {
    email: string;
}
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
export interface SignUpUserMutation_signUpUser {
    __typename: "AuthPayload";
    token: string | null;
    error: string | null;
}
export interface SignUpUserMutation {
    signUpUser: SignUpUserMutation_signUpUser;
}
export interface SignUpUserMutationVariables {
    email: string;
    password: string;
    name: string;
    lastname: string;
    groupRequest?: UserGroup | null;
    nID?: string | null;
    nIDType?: nIdType | null;
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
export declare enum nIdType {
    NATIONALID = "NATIONALID",
    OTHER = "OTHER",
    PASSPORT = "PASSPORT",
    SOCIALSECURITY = "SOCIALSECURITY"
}
