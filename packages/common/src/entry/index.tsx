import { AppLoading } from 'expo';
import { observer } from 'mobx-react';
import React from 'react';
import { AsyncStorage } from 'react-native';
import AppContainer from '../App';
import appStore from '../store';

@observer
export default class App extends React.Component {
  state = { isReady: false}

  async _setStore() {
    try {
      const per = await AsyncStorage.getItem('per')
      if (per) { appStore.setUser(per) }
    } catch(err) { console.log('ERROR WHILE LOADING: ', err) }
  }
  render() {
    if (!this.state.isReady) {
      return  <AppLoading 
                startAsync={this._setStore}
                onFinish={() => { this.setState({ isReady: true }) }}
                onError={() => { console.warn(); this.setState({ isReady: true}) }}
              />
    }
    return <AppContainer />
  }
}

