import { AppLoading, Notifications } from 'expo';
import { observer } from 'mobx-react';
import React from 'react';
import { AsyncStorage } from 'react-native';
import AppContainer from '../App';
import { handleNotifications, registerForPushNotificationsAsync } from '../modules/notifications';
import appStore from '../store';

@observer
export default class App extends React.Component {
  state = { isReady: false}

  async _setStore() {
    try {
      const token = await registerForPushNotificationsAsync()
      if (token) { Notifications.addListener(handleNotifications) }
    } catch(err) { console.log('ERROR WHILE REGISTERING FOR PUSH NOTIFICATIONS: ', err)}
    
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

