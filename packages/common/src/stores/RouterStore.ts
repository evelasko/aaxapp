import { observable } from 'mobx';
import { RootStore } from './RootStore';

type Routes = 'Main' | 'NewsDetails' | 'Login'

export class RouterStore {
    rootStore:RootStore

    constructor(rootStore:RootStore) {
        this.rootStore = rootStore
    }
    @observable screen:Routes = "Login"
}

