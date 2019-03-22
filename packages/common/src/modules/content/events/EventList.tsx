import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AllEventsQuery_eventsMobile } from '../../../schemaTypes';
import moment = require('moment');

interface Props {
    events: AllEventsQuery_eventsMobile[],
    pushDetails: (id:string, title:string) => void
}

const styles = StyleSheet.create({
    eventListView: {
        backgroundColor: "white",
        padding: 20,
        marginBottom: 55
    },
    eventItem: {
        height: 96, flexDirection: 'row'
    },
    eventItemTitle: {
        fontSize: 14, fontWeight: 'bold', color: '#363636',
        height: 45, overflow: 'hidden'
    },
    eventItemDataView: {
        flexDirection: 'column', flex: 1, marginLeft: 10, justifyContent: 'space-around'
    },
    eventItemImage: {
        width:118, height: 96
    },
    eventItemLocation: {
        color: '#999999', fontSize: 12,
        overflow: 'hidden'
    },
    eventItemDate: {

    },
    eventHeader: {
        color: "#EB894A", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        marginBottom: 20
    },
})

export const EventsList: React.FC<Props> = ({events, pushDetails}) => {
    return (
        <View style={styles.eventListView}>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({item, separators}) => (
                    <TouchableOpacity style={{height:132}} onPress={() => { pushDetails(item.id,item.title) }}>
                        <View style={styles.eventItem}>
                            <Image style={styles.eventItemImage} source={{uri: item.imageURL || 'default.png'}} />
                            <View style={styles.eventItemDataView} >
                                <Text style={styles.eventItemTitle}>{item.title}</Text>
                                <View style={styles.eventItemDate}>
                                    <Text style={styles.eventItemDate}>{moment(item.date).format('D MMMM, HH:mm')}</Text>
                                    <Text style={styles.eventItemLocation}>{`@${item.venue.name}`}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

