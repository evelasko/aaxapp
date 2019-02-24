import { action, computed, observable } from "mobx";
import { AllNewsQuery_allNews } from '../schemaTypes';
import { RootStore } from "./RootStore";

export class NewsStore {
    rootStore:RootStore
    
    constructor(rootStore:RootStore) {
        this.rootStore = rootStore
    }
    @observable alerts: AllNewsQuery_allNews[] = []
    @observable calls: AllNewsQuery_allNews[] = []
    @observable allNews: AllNewsQuery_allNews[] = []
    @observable featuredNews: AllNewsQuery_allNews | null = null

    @action initNewsStore(newses:AllNewsQuery_allNews[]) {
        this.alerts = newses.filter((n:any) => n.category === 'ALERT')
        this.calls = newses.filter((n:any) => n.category === 'CALL')
        this.featuredNews = newses.filter((n:any) => n.featured && n.category === 'NEWS')[0]
        this.allNews = newses.filter((n:any) => { 
            this.featuredNews ? n.category === 'NEWS' && n.id != this.featuredNews.id : n.category === 'NEWS'
        }).slice().sort((a,b) => {
            const dA:any = new Date(a.expiration)
            const dB:any = new Date(b.expiration)
            return dA - dB
        })
    }
    @computed get recents () {
        const recentsCount = this.allNews.length > 3 ? 3 : this.allNews.length
        return this.allNews.slice(0, recentsCount )
    }
    @computed get newses () {
        const recentsCount = this.allNews.length > 3 ? 3 : this.allNews.length
        return this.allNews.slice(recentsCount, this.allNews.length)
    }

    @action addAlert(newAlert:AllNewsQuery_allNews) {
        this.alerts.unshift(newAlert)
    }
    @action updateAlert(id: string, newTitle: string) {
        this.alerts.filter(a => a.id === id)[0].title = newTitle
    }
}
