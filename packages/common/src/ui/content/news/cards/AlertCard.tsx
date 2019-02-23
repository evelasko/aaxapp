import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface Props {
    title: string
    time: string
}

const styles = StyleSheet.create({
    alertCard: {
        flexDirection: 'column',
        height: 131,
        width: 132,
        borderLeftColor: 'rgba(255,255,255,0.3)',
        borderLeftWidth: 1,
        overflow: 'hidden'
    },
    alertCardTitle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 14,
        margin: 10
    },
    alertCardText: {
        color: "white",
        fontWeight: 'normal',
        fontSize: 12,
        padding: 10
    },
})

export const AlertCard: React.FC<Props> = observer(({title, time}) => {
    return (
        <TouchableHighlight onPress={() => console.log('You pressed an alert ')}>
            <View style={styles.alertCard} >
                <Text style={styles.alertCardTitle}>{title}</Text>
                <Text style={styles.alertCardText}>{time}</Text>
            </View>
        </TouchableHighlight>
    )
})