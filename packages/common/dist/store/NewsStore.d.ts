import { RootStore } from "./RootStore";
interface News {
    id: string;
    title: string;
    text: string;
}
export declare class NewsStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    newses: News[];
    alerts: News[];
    calls: News[];
    featured: News[];
}
export {};
