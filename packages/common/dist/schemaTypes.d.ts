export interface AllEventsQuery_eventsMobile_venue {
    __typename: "Venue";
    name: string;
    address: string | null;
    placeID: string | null;
}
export interface AllEventsQuery_eventsMobile {
    __typename: "Event";
    id: string;
    title: string;
    subtitle: string | null;
    body: string;
    imageURL: string | null;
    date: any;
    venue: AllEventsQuery_eventsMobile_venue;
}
export interface AllEventsQuery {
    eventsMobile: (AllEventsQuery_eventsMobile | null)[];
}
export interface AllEventsQueryVariables {
    per?: string | null;
}
export interface AllNewsQuery_allNewsMobile {
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
    allNewsMobile: (AllNewsQuery_allNewsMobile | null)[];
}
export interface AllNewsQueryVariables {
    per?: string | null;
}
export interface ConfirmEmailMutation_confirmEmail {
    __typename: "AuthPayload";
    token: string | null;
    error: string | null;
}
export interface ConfirmEmailMutation {
    confirmEmail: ConfirmEmailMutation_confirmEmail;
}
export interface ConfirmEmailMutationVariables {
    key: string;
}
export interface LoginUserMutation_loginUserMobile {
    __typename: "AuthPayload";
    token: string | null;
    error: string | null;
}
export interface LoginUserMutation {
    loginUserMobile: LoginUserMutation_loginUserMobile;
}
export interface LoginUserMutationVariables {
    email: string;
    password: string;
    device?: string | null;
    permission?: boolean | null;
}
export interface LogOutMutation_logoutUser {
    __typename: "AuthPayload";
    token: string | null;
    error: string | null;
}
export interface LogOutMutation {
    logoutUser: LogOutMutation_logoutUser;
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
