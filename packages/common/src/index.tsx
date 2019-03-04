import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { StyleSheet, View } from 'react-native';
import { client } from './apollo';
import Routes from './routes/index';


export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Routes />
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
    backgroundColor: '#F5FCFF'
  }
});
