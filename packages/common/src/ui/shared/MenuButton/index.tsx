import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {}

const styles = StyleSheet.create({
    container: {},
    menuIcon: {
        marginLeft: 15
    }
})

export default class NativeMenuButton<Props> extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Ionicons 
                    name="md-menu"
                    color="#EEEEEE"
                    size={32}
                    onPress={() => {}}
                    style={styles.menuIcon}
                />
            </View>
        )
    }
}