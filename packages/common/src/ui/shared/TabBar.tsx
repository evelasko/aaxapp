import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EventsIcon from '../icons/events/index';
import NewsIcon from '../icons/news/index';


interface Props {
    onNewsPress: () => void
    onEventsPress: () => void
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0, left: 0,
        height: 83, width: '100%',
        backgroundColor: "#2E2E2E",
        padding: 13,
        flexDirection: 'row', justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    iconContainer: {
        width: 40,
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 20, marginRight: 20
    },
    iconText: {
        fontSize: 10,
        color: "#BDBDBD",
        marginTop: 5
    }
})

export const TabBar: React.FC<Props> = ({onEventsPress, onNewsPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={onNewsPress}>
                <NewsIcon />
                <Text style={styles.iconText}>Noticias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={onEventsPress}>
                <EventsIcon />
                <Text style={styles.iconText}>Eventos</Text>
            </TouchableOpacity>
        </View>
    )
}