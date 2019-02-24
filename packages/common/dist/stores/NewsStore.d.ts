import { AllNewsQuery_allNews } from '../schemaTypes';
import { RootStore } from "./RootStore";
export declare class NewsStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    alerts: AllNewsQuery_allNews[];
    calls: AllNewsQuery_allNews[];
    allNews: AllNewsQuery_allNews[];
    featuredNews: AllNewsQuery_allNews | null;
    initNewsStore(newses: AllNewsQuery_allNews[]): void;
    readonly recents: AllNewsQuery_allNews[];
    readonly newses: AllNewsQuery_allNews[];
    addAlert(newAlert: AllNewsQuery_allNews): void;
    updateAlert(id: string, newTitle: string): void;
}
