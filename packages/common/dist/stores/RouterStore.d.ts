import { RootStore } from './RootStore';
declare type Routes = 'Main' | 'NewsDetails' | 'Login';
export declare class RouterStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    screen: Routes;
}
export {};
