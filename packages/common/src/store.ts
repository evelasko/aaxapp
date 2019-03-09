import { action, observable } from 'mobx';

export class AppStore {
  @observable per:string|null = null

  @action setUser(newProperty: string) {
    this.per = newProperty
  }
  @action unsetUser() {
      this.per = null
  }
}

const appStore = new AppStore()
export default appStore