import * as React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    pushBack?: () => void
}

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
        width: 32, height: 32, backgroundColor: "#EB894A"
    },

})

export const TopBar: React.FC<Props> = ({pushBack}) => {
    return (
        <View style={styles.topBar}>
            {   pushBack &&
                    <TouchableOpacity style={styles.topBarBtn}><Text>Go back</Text></TouchableOpacity>
            }
            <Text style={styles.topBarTitle}>Hi there!</Text>
            <Button title="User" onPress={() => {console.log('Menu pressed')}} />
        </View>
    )
}
