import { action, observable } from "mobx";
import { AllNewsQuery_allNews } from '../schemaTypes';
import { RootStore } from "./RootStore";

export class NewsStore {
    rootStore:RootStore
    
    constructor(rootStore:RootStore) {
        this.rootStore = rootStore
    }
    @observable newses: AllNewsQuery_allNews[] = []
    @observable alerts: AllNewsQuery_allNews[] = []
    @observable calls: AllNewsQuery_allNews[] = []
    @observable featured: AllNewsQuery_allNews[] = []

    @action initNewsStore(newses:AllNewsQuery_allNews[]) {
        this.newses = newses.filter((n:any) => n.category === 'NEWS' && !n.featured)
        this.alerts = newses.filter((n:any) => n.category === 'ALERT')
        this.calls = newses.filter((n:any) => n.category === 'CALL')
        this.featured = newses.filter((n:any) => n.featured)
    }

    @action addAlert(newAlert:AllNewsQuery_allNews) {
        this.alerts.unshift(newAlert)
    }
    @action updateAlert(id: string, newTitle: string) {
        this.alerts.filter(a => a.id === id)[0].title = newTitle
    }
}

