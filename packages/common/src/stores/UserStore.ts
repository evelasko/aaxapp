import { observable } from "mobx";
import { MeQuery_me_user } from "../schemaTypes";
import { RootStore } from "./RootStore";

export class UserStore {
    rootStore:RootStore
    
    constructor(rootStore:RootStore) {
        this.rootStore = rootStore
    }
    
    @observable CurrentUser: MeQuery_me_user | null
}
