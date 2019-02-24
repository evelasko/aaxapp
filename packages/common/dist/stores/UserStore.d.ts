import { MeQuery_me_user } from "../schemaTypes";
import { RootStore } from "./RootStore";
export declare class UserStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    CurrentUser: MeQuery_me_user | null;
}
