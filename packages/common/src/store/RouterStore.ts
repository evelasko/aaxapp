import { observable } from 'mobx';
import { createContext } from 'react';

type Routes = 'Main' | 'NewsDetails'

class RouterStore {
    @observable screen:Routes = "Main"
}

export const RouterStoreContext = createContext(new RouterStore())