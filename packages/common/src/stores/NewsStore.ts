import { observable } from "mobx";
import { RootStore } from "./RootStore";

interface News {
    id: string
    title: string
    text: string
}

export class NewsStore {
    rootStore:RootStore
    
    constructor(rootStore:RootStore) {
        this.rootStore = rootStore
    }
    
    @observable newses: News[] = []
    @observable alerts: News[] = []
    @observable calls: News[] = []
    @observable featured: News[] = []

}

