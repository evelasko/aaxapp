import { Provider } from 'mobx-react/native';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { StyleSheet, View } from 'react-native';
import { client } from './apollo';
import Routes from './routes/index';
import appStore from './store';


export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
            <View style={styles.wrapper}>
             <Provider appStore={appStore}> 
              <Routes />
            </Provider>
          </View>
        </View>
      </ApolloProvider>
    )
  }
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
  }
});
