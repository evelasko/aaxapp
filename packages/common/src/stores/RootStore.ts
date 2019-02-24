import { createContext } from "react";
import { NewsStore } from "./NewsStore";
import { RouterStore } from "./RouterStore";
import { UserStore } from "./UserStore";

export class RootStore {
    routerStore = new RouterStore(this)
    newsStore = new NewsStore(this)
    userStore = new UserStore(this)
}

export const RootStoreContext = createContext(new RootStore())