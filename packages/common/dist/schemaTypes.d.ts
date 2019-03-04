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
export interface NewsSubscription_newNews {
    __typename: "News";
    id: string;
    title: string;
    body: string;
    expiration: any;
    category: NewsCategory | null;
    featured: boolean | null;
    imageURL: string | null;
}
export interface NewsSubscription {
    newNews: NewsSubscription_newNews;
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
