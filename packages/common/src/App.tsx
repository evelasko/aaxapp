import { Provider } from 'mobx-react/native';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { StyleSheet, View } from 'react-native';
import { client } from './apollo';
import Routes from './routes/index';
import appStore from './store';

interface Props {
  notifications?: any
}

export default class AppContainer extends React.Component<Props> {

  componentDidMount() {
    if (this.props.notifications) {
      this.props.notifications.addListener(this._handleNotification) 
    }
  }
  _handleNotification = (notification:any) => {
    console.log(`NOTIFICATION DATA: 
    ORIGIN: ${notification.origin}
    DATA: ${notification.data}`)
  }
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
