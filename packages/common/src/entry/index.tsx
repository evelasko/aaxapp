import { AppLoading, Notifications, Permissions } from 'expo';
import { observer } from 'mobx-react';
import React from 'react';
import { AsyncStorage } from 'react-native';
import AppContainer from '../App';
import appStore from '../store';

@observer
export default class App extends React.Component {
  state = { isReady: false}

  async _setStore() {
    // register for push notifications
    try {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
      console.log('PUSH NOTIFICATIONS CURRENT STATUS: ', existingStatus)
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
          finalStatus = status
      }
      console.log('NOTIF STATUS: ', finalStatus )
    } catch(err) { console.log('ERROR WHILE REGISTERING FOR PUSH NOTIFICATIONS: ', err) }
    // setup device's user
    try {
      const per = await AsyncStorage.getItem('per')
      if (per) { appStore.setUser(per) }
      console.log('RESPONSE FROM ASYNCSTORAGE (PER): ', per)
    } catch(err) { console.log('ERROR WHILE FETCHING USER FROM ASYNCSTORAGE: ', err) }
  }
  render() {
    if (!this.state.isReady) {
      return  <AppLoading 
                startAsync={this._setStore}
                onFinish={() => { this.setState({ isReady: true }) }}
                onError={() => { console.warn(); this.setState({ isReady: true}) }}
              />
    }
    return <AppContainer notifications={Notifications} />
  }
}

