import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CallCard } from '../cards/CallCard';

interface Props {}

const styles = StyleSheet.create({
    callView: {
        height: 206,
        backgroundColor: "#363636"
    },
    callScroll: {
        height: 132,
    },
    callHeader: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20,
        textTransform: 'uppercase'
    },
})

export const CallScroll: React.FC<Props> = () => {
    return (
        <View style={styles.callView}>
            <Text style={styles.callHeader}>convocatorias</Text>
            <ScrollView horizontal={true} style={styles.callScroll}>
                <CallCard />
                <CallCard />
                <CallCard />
                <CallCard />
                <CallCard />
                <CallCard />
            </ScrollView>
        </View>
    )
}