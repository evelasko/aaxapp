import * as React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface Props {}

const styles = StyleSheet.create({
    callCard: {
        flexDirection: 'column',
        height: 132,
        width: 132,
        borderLeftColor: 'rgba(255,255,255,0.3)',
        borderLeftWidth: 1,
        overflow: 'hidden'
    },
    callCardTitle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 14,
        margin: 20
    },
    callCardExpiration: {
        color: "white",
        fontWeight: 'normal',
        textAlign: 'right',
        fontSize: 12,
        padding: 8
    },
})

export const CallCard: React.FC<Props> = () => {
    return (
        <TouchableHighlight onPress={() => console.log('You pressed a call')}>
            <View style={styles.callCard}>
                <Text style={styles.callCardTitle}>Título de la Convocatoria</Text>
                <Text style={styles.callCardExpiration}>vence en 4 días</Text>
            </View>
        </TouchableHighlight>
    )
}