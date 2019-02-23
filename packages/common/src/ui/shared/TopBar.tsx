import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {}

const styles = StyleSheet.create({
    topBar: {
        height: 91,
        backgroundColor: "#2E2E2E",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 13
    },
    topBarTitle: {
        color: "#FFFFFF"
    },
    topBarBtn:{
        backgroundColor: "#EB894A"
    }
})

export const TopBar: React.FC<Props> = () => {
    return (
        <View style={styles.topBar}>
            <Button title="Menu" onPress={() => {console.log('Menu pressed')}} />
            <Text style={styles.topBarTitle}>Hi there!</Text>
            <Button title="User" onPress={() => {console.log('Menu pressed')}} />
        </View>
    )
}
