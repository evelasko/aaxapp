import { inject } from 'mobx-react/native';
import React from 'react';
import { Animated, AsyncStorage, Button, Dimensions, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../store';
import ProfileHeader from './Header';

const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    listHeaderContainer: {
        margin: 5, marginTop: 25
      },
      listItemContainer: {
        margin: 5
      }
})
@inject('appStore')
class Profile extends React.Component<NavigationScreenProps&{appStore: AppStore}> {
    render() {
        const { navigation, appStore } = this.props
        return (
            <View style={{...StyleSheet.absoluteFillObject, padding:10}}>
                <Animated.View>
                    <View>
                        <ProfileHeader />
                    </View>
                </Animated.View>
                <ScrollView scrollEventThrottle={16} >
                    <SectionList 
                        renderItem={({item, index, section}) => <View style={styles.listItemContainer}><Text key={index}>{item}</Text></View> }
                        renderSectionHeader={({section: {title}}) => <View style={styles.listHeaderContainer} ><Text style={{fontWeight: 'bold'}}>{title}</Text></View> }
                        sections={[
                        {title: 'Title1', data: ['item1', 'item2', 'item A', 'item B', 'item C', 'item D', 'item1', 'item2', 'item A', 'item B', 'item C', 'item D']},
                        {title: 'Title2', data: ['item3', 'item4', 'item A', 'item B', 'item C', 'item D']},
                        {title: 'Title3', data: ['item5', 'item6', 'item A', 'item B', 'item C', 'item D']},
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />
                    <Button title='Cerrar Sesión' onPress={async() => {
                        try {
                            appStore.unsetUser()
                            await AsyncStorage.removeItem('per')
                            // Logout Mutation should happen here along with Apollo ResetStore...
                            navigation.navigate('Login')
                        } catch(err) { console.log('LOGGIN OFF ERROR: ', err)}
                    }} />
                </ScrollView>
            </View>
        )
    }
}

export default Profile
// <QRCode value="http://awesome.link.qr" size={WIDTH-25} />