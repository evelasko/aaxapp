import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AllEventsQuery_eventsMobile } from '../../../schemaTypes';


interface Props {
    upcomingEvent: AllEventsQuery_eventsMobile
    pushDetails: (id:string, title:string) => void
}

const styles = StyleSheet.create({
    upcomingEventCard: {
        flexDirection: 'column', marginBottom: 20,
    },
    upcomingEventCardHeader: {
        color: "#EB894A", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        margin: 20
    },
    upcomingEventCardImage: {
        width: '100%', height: 206
    },
    upcomingEventCardInfo: {
        flexDirection: 'row', padding: 20, width: '100%',
        backgroundColor: '#2E2E2E'
    },
    upcomingEventCardTimeView: {
        flexDirection: 'column'
    },
    upcomingEventCardDataView: {
        flexDirection: 'column',
        marginLeft: 20, flexWrap: 'wrap', alignItems: 'flex-start', flex: 1
    },
    upcomingEventMonth:{
        fontWeight: 'bold', fontSize: 16,
        color: "#EB894A", textTransform: 'uppercase', marginBottom: 5
    },
    upcomingEventDay:{
        color: 'white', fontWeight: '100', fontSize: 28, marginBottom: 5
    },
    upcomingEventTime:{
        color: 'white', fontWeight: '100', fontSize: 12
    },
    upcomingEventCardTitle: {
        fontWeight: 'bold', fontSize: 20, color: 'white',
        marginBottom: 20
    },
    upcomingEventCardSubtitle: {
        fontWeight: 'bold', fontSize: 12, fontVariant: ['small-caps'], color: 'silver',
        marginBottom: 5, overflow: 'hidden'
    },
    upcomingEventCardText: {
        fontWeight: 'normal', fontSize: 12, color: 'white',
        maxHeight: 60, overflow: 'hidden'
    }
})

export const UpcomingEventCard: React.FC<Props> = ({pushDetails, upcomingEvent}) => {
    const { id, imageURL, title, subtitle, body, date } = upcomingEvent
    return (
        <TouchableOpacity style={styles.upcomingEventCard} onPress={() => { pushDetails(id,title) }} >
            <Image
                style={styles.upcomingEventCardImage}
                source={{uri: imageURL || 'default.png'}}
            />
            <View style={styles.upcomingEventCardInfo}>
                <View style={styles.upcomingEventCardTimeView}>
                    <Text style={styles.upcomingEventMonth}>{moment(date).format('MMM')}</Text>
                    <Text style={styles.upcomingEventDay}>{moment(date).format('DD')}</Text>
                    <Text style={styles.upcomingEventTime}>{moment(date).format('HH:mm')}</Text>
                </View>
                <View style={styles.upcomingEventCardDataView}>
                    <Text style={styles.upcomingEventCardTitle}>{title}</Text>
                    {subtitle ? <Text style={styles.upcomingEventCardSubtitle}>{subtitle}</Text>: <View />}
                    <Text style={styles.upcomingEventCardText}>{body}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
