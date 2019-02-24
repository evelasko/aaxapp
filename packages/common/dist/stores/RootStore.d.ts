/// <reference types="react" />
import { NewsStore } from "./NewsStore";
import { RouterStore } from "./RouterStore";
import { UserStore } from "./UserStore";
export declare class RootStore {
    routerStore: RouterStore;
    newsStore: NewsStore;
    userStore: UserStore;
}
export declare const RootStoreContext: import("react").Context<RootStore>;
