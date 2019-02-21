import React, { useContext } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Router } from './Router';
import { CounterStoreContext } from './store/CounterStore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export const App = () => {
    const counterStore = useContext(CounterStoreContext)
    return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Router />
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    maxWidth: 900,
    backgroundColor: '#F5FCFF'
  }
});
