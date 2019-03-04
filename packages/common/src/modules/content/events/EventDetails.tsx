import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';
import DateIcon from '../../../ui/icons/date/index';
import PinIcon from '../../../ui/icons/pin/index';
import moment = require('moment');

interface Props extends RouteComponentProps<{ event: string }> {}

const styles = StyleSheet.create({
    detailsView: {margin: 15},
    detailsImage: {width: '100%', height: 254},
    detailsHeader: {},
    detailsInfo: {flexDirection: 'column', marginTop: 40, marginBottom: 30},
    detailsInfoRow: {flexDirection: 'row', marginBottom: 15},
    detailsInfoData: {flexDirection: 'column', marginLeft: 15},
    detailsInfoText: {fontSize: 12, fontWeight: '500', color: '#555555'},
    detailsInfoSubtext: {fontSize: 12, fontWeight: '100', color: '#555555'},
    detailsTitle: { fontSize: 18, fontWeight:'500', marginTop: 10 },
    detailsSubtitle: {fontSize: 14, fontWeight: '100', color: '#555555'},
    detailsBody: {fontSize: 12, fontWeight: 'normal', textAlign: 'justify'},
    detailsLocation: {width: '100%', height: 260, marginBottom: 50},
    divider: {
        width: '60%', height: 1, marginTop: 40, marginBottom:40, alignSelf: 'center',
        backgroundColor:'silver'
    }
})

const EventDetails: React.FC<Props & NavigationScreenProps> = ({history, match, navigation}) => {
    
    const id = match && match.params.event ? match.params.event : navigation.getParam('id')
    if (!id) return <View><Text>Lo sentimos pero no encontramos el evento que querías...</Text></View>
    console.log('ID: ', id)
    const eventDetails = gql` 
        query EventDetails { oneEvent (id: ${id}) 
            { id title subtitle body imageURL date venue { name address placeID} } }
    `
    return (
        <ScrollView>
            <Query query={eventDetails}>
                {({loading, data, error}) => {
                    if (loading) return <Text>Loading</Text>
                    console.log(`data: ${data}, ERROR: ${error}`)
                    if (!loading && data === undefined || error ) { 
                        console.log('Error: ', error)
                        return <Text>{`Error en la petición: ${error && error.message}` }</Text>
                    }
                    const { oneEvent } = data
                    const latlng = {latitude: 40.2927789, longitude: -3.7913771}
                    return (
                        <View style={{alignItems: 'center'}}>
                            <Image style={styles.detailsImage} source={{uri:oneEvent.imageURL}} />
                            <View style={styles.detailsView}>  
                                <View style={styles.detailsHeader}>
                                    <Text style={styles.detailsTitle} >{oneEvent.title}</Text>
                                    <Text style={styles.detailsSubtitle}>{oneEvent.subtitle}</Text>
                                </View>
                                <View style={styles.detailsInfo}>
                                    <View style={styles.detailsInfoRow}>
                                        <DateIcon color="#555555"/>
                                        <View style={styles.detailsInfoData}>
                                            <Text style={styles.detailsInfoText}>{moment(oneEvent.date).format('dddd D de MMMM')}</Text>
                                            <Text style={styles.detailsInfoSubtext}>{`${moment(oneEvent.date).format('HH:mm')} H`}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.detailsInfoRow}>
                                        <PinIcon color="#555555" />
                                        <View style={styles.detailsInfoData}>
                                            <Text style={styles.detailsInfoText}>{oneEvent.venue.name}</Text>
                                            <Text style={styles.detailsInfoSubtext}>{oneEvent.venue.address}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width: '100%'}}>
                                    <Text style={styles.detailsBody}>{oneEvent.body}</Text>
                                </View>
                                <View style={styles.divider} />
                            </View>
                            <View style={styles.detailsLocation}>
                                <MapView region={{ ...latlng, latitudeDelta: 0.0922, longitudeDelta: 0.0421,}} />
                            </View>
                        </View> 
                    )
                }}
            </Query>   
        </ScrollView>
    )
}

export default EventDetails
