import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { headerHeight } from '../../../ui/shared/SharedConstants/index';

const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    listHeaderContainer: {
        margin: 5, marginTop: 25
      },
      groupContainer: {},
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

interface Props {
    logOutUser: () => {}
    userQRID: string | null
}

const ProfileView:React.FC<Props> = ({logOutUser, userQRID}) => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, marginTop: headerHeight }}>
            <View style={styles.qrContainer}>
                <QRCode color={userQRID ? 'black' : 'red'} size={WIDTH*0.85} value={userQRID || 'notfound'} />
            </View>
            <View style={styles.profileContainer} >
                <View style={styles.avatarContainer}>
                    <FontAwesome name='user-circle' size={32} />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>Nombre Apellidos Apellidos</Text>
                </View>
                <View style={styles.groupContainer}>
                    <Text>GRUPO</Text>
                </View>
                <View>
                    <Button title='Cerrar Sesión' color='red' onPress={ async() => {
                        try { await logOutUser() }
                        catch(err) { console.log('ERROR WHILE LOGGING USER OUT: ', err) }
                    }} />
                </View>
            </View>
        </View>
    )
}

export default ProfileView