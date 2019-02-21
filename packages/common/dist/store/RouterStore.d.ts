/// <reference types="react" />
declare type Routes = 'Main' | 'NewsDetails';
declare class RouterStore {
    screen: Routes;
}
export declare const RouterStoreContext: import("react").Context<RouterStore>;
export {};
