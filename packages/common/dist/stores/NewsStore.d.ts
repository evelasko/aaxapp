import { AllNewsQuery_allNews } from '../schemaTypes';
import { RootStore } from "./RootStore";
export declare class NewsStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    newses: AllNewsQuery_allNews[];
    alerts: AllNewsQuery_allNews[];
    calls: AllNewsQuery_allNews[];
    featured: AllNewsQuery_allNews[];
    initNewsStore(newses: AllNewsQuery_allNews[]): void;
    addAlert(newAlert: AllNewsQuery_allNews): void;
    updateAlert(id: string, newTitle: string): void;
}
