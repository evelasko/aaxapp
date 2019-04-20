import { Constants } from 'expo';
import { inject } from 'mobx-react/native';
import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../store';
import { Colors } from '../../ui/shared/Styles';

const styles = StyleSheet.create({
    listHeaderContainer: {
        margin: 5, marginTop: 25
      },
      listItemContainer: {
        margin: 5
      },
      headerTitleContainer: { borderBottomWidth: StyleSheet.hairlineWidth ,borderBottomColor: Colors.primary, marginTop: 25, marginBottom: 5, paddingBottom: 5 },
      headerTitleText: {fontSize: 10, fontWeight: '800', letterSpacing: 2},
      itemTitleText: {fontSize:18},
      itemContainer: { flexDirection: 'row', justifyContent:'space-around', marginVertical:5},
      switchStyle: {}

})

interface settingsProps {
    title?: string
    icon?: JSX.Element
    whenSwitch?: (e:any) => void
}

const SettingsHeader: React.FC<settingsProps> = ({title}) => {
    return ( <View style={styles.headerTitleContainer}><Text style={styles.headerTitleText}>{title||''}</Text></View> )
}
const SettingsItem: React.FC<settingsProps> = ({title, icon, whenSwitch}) => {
    return (
        <View style={styles.itemContainer}>
            {icon}
            <View style={{flex:1}}><Text style={styles.itemTitleText}>{title||''}</Text></View>
            <Switch style={styles.switchStyle} value={true} onValueChange={(e) => { if (whenSwitch) whenSwitch(e) }} />
        </View>
    )
}

@inject('appStore')
class Settings extends React.Component<NavigationScreenProps&{appStore: AppStore}> {
    state = { 
        nod_News: false, noe_News: false,
        nod_Alert: false, noe_Alert: false,
        nod_Call: false, noe_Call: false,
        nod_Event: false, noe_Event: false
    }
    render() {
        const { navigation, appStore } = this.props
        return (
            <View style={{...StyleSheet.absoluteFillObject, padding:10, marginTop: Constants.statusBarHeight}}>
                <ScrollView style={{...StyleSheet.absoluteFillObject, paddingHorizontal:20}}>
                    <SettingsHeader title="NOTICIAS" />
                        <SettingsItem title="Notificar en dispositivo"  whenSwitch={(e) => {console.log(JSON.stringify(e))}} />
                        <SettingsItem title="Notificar via email" whenSwitch={(e) => {console.log(JSON.stringify(e))}} />
                    <SettingsHeader title="ALERTAS" />
                        <SettingsItem title="Notificar en dispositivo"  whenSwitch={(e) => {console.log(JSON.stringify(e))}} />
                        <SettingsItem title="Notificar via email" whenSwitch={(e) => {console.log(JSON.stringify(e))}} />
                    <SettingsHeader title="CONVOCATORIAS" />
                        <SettingsItem title="Notificar en dispositivo"  whenSwitch={(e) => {console.log(JSON.stringify(e))}} />
                        <SettingsItem title="Notificar via email" whenSwitch={(e) => {console.log(JSON.stringify(e))}} />
                    <SettingsHeader title="EVENTOS" />
                        <SettingsItem title="Notificar en dispositivo"  whenSwitch={(e) => {console.log(JSON.stringify(e))}} />
                        <SettingsItem title="Notificar via email" whenSwitch={(e) => {console.log(JSON.stringify(e))}} />
                </ScrollView> 
            </View>
        )
    }
}

export default Settings
