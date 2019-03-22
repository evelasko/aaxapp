import { Constants } from 'expo';
import { inject } from 'mobx-react/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../store';

const styles = StyleSheet.create({
    listHeaderContainer: {
        margin: 5, marginTop: 25
      },
      listItemContainer: {
        margin: 5
      },
      qrContainer: {
          alignSelf: 'center'
      },
      profileContainer: {
          justifyContent: 'space-around', flex: 1
      },
      nameContainer: { marginBottom: 30, marginTop: 5},
      nameText: {
          fontSize: 20, fontWeight: '900', letterSpacing: 1, color: 'darkgrey', alignSelf: 'center'
      },
      avatarContainer: { 
          flexDirection:'row', justifyContent: 'space-around',  marginTop: 30
        },
      avatarLines: {
          height: 16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'grey'
      },
      buttonsContainer: {
          marginBottom: 10
      }

})
@inject('appStore')
class Settings extends React.Component<NavigationScreenProps&{appStore: AppStore}> {
    render() {
        const { navigation, appStore } = this.props
        return (
            <View style={{...StyleSheet.absoluteFillObject, padding:10, marginTop: Constants.statusBarHeight}}>
                <Text>Settings View</Text>
            </View>
        )
    }
}

export default Settings
