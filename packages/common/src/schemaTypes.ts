/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllEventsQuery
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllNewsQuery
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmEmailMutation
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUserMutation
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogOutMutation
// ====================================================

export interface LogOutMutation_logoutUser {
  __typename: "AuthPayload";
  token: string | null;
  error: string | null;
}

export interface LogOutMutation {
  logoutUser: LogOutMutation_logoutUser;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignUpUserMutation
// ====================================================

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

export enum nIdType {
  NATIONALID = "NATIONALID",
  OTHER = "OTHER",
  PASSPORT = "PASSPORT",
  SOCIALSECURITY = "SOCIALSECURITY",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
