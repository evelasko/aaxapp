/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUserMutation
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllEventsQuery
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllNewsQuery
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum NewsCategory {
  ALERT = "ALERT",
  CALL = "CALL",
  NEWS = "NEWS",
}

export enum UserGroup {
  PUBLIC = "PUBLIC",
  STAFF = "STAFF",
  STUDENT = "STUDENT",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
