import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import { ActivityIndicator, Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { headerHeight } from '../../../ui/shared/SharedConstants/index';
import { Colors } from '../../../ui/shared/Styles';

const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    listHeaderContainer: {
        margin: 5, marginTop: 25
      },
      groupContainer: {
          alignItems:'center', 
          backgroundColor: Colors.primary, 
          paddingHorizontal: 15, paddingVertical: 10,
          borderRadius: 20
        },
      groupText: {color: 'white', fontWeight: '900'},
      listItemContainer: { margin: 5 },
      qrContainer: { alignSelf: 'center' },
      profileContainer: { justifyContent: 'space-around', flex: 1 },
      nameContainer: { marginBottom: 15, marginTop: 15},
      nameText: {
          fontSize: 28, fontWeight: '100', letterSpacing: 1, color: 'black', alignSelf: 'center'
      },
      buttonsContainer: { marginBottom: 10 }

})

interface Props {
    logOutUser: () => {}
    userQRID: string
}

const userQuery = gql`
query UserQuery ($id: String!) { user (id: $id) { name lastname group isAdmin } }`

const ProfileView:React.FC<Props> = ({logOutUser, userQRID}) => {
    return (
        <Query query={userQuery} variables={{id: userQRID}}>
            {({data, loading, error}) => {
                console.log('User ID?:', userQRID)
                if (error) return (
                    <View>
                        <Text>Ha ocurrido un error...</Text>
                        <View style={{marginVertical:25}}><Text>{error.message}</Text></View>
                        <Button title='Restaurar' onPress={ async() => {
                                    try { await logOutUser() }
                                    catch(err) { console.log('ERROR WHILE RESETTING APP: ', err) }
                                }} />
                    </View>
                )
                if (loading) return <ActivityIndicator />
                const { name = '', lastname = '', group = 'PUBLIC', isAdmin = false } = data.user
                let fullName = `${name} ${lastname}`
                var trimmedString = fullName.substr(0, 25);
                trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
                return (
                    <View style={{...StyleSheet.absoluteFillObject, marginTop: headerHeight }}>
                        <View style={styles.qrContainer}>
                            <QRCode color={userQRID ? 'black' : 'red'} size={WIDTH*0.85} value={userQRID || 'notfound'} />
                        </View>
                        <View style={styles.profileContainer} >
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameText}>{trimmedString}</Text>
                            </View>
                            <View style={{width: '100%', alignItems: 'center'}}>
                                <View style={styles.groupContainer}>
                                    <Text style={styles.groupText}>{ group }</Text>
                                </View>
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
            }}
        </Query>
    )
}

export default ProfileView