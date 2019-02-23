/// <reference types="react" />
import { NewsStore } from "./NewsStore";
import { RouterStore } from "./RouterStore";
export declare class RootStore {
    routerStore: RouterStore;
    newsStore: NewsStore;
}
export declare const RootStoreContext: import("react").Context<RootStore>;
