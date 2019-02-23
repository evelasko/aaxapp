import { createContext } from "react";
import { NewsStore } from "./NewsStore";
import { RouterStore } from "./RouterStore";

export class RootStore {
    routerStore = new RouterStore(this)
    newsStore = new NewsStore(this)
}

export const RootStoreContext = createContext(new RootStore())