/// <reference types="react" />
import { MeQuery_me } from '../schemaTypes';
export declare const meQuery: any;
export interface WithUser {
    user: MeQuery_me;
    loading: boolean;
}
export declare const withUser: (WrappedComponent: import("react").ComponentType<any>) => import("react").ComponentClass<any, any>;
