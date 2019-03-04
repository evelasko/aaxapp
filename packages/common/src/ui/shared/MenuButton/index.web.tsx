import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {},
    menuIcon: {}
})

export default class NativeMenuButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Menu</Text>
            </View>
        )
    }
}