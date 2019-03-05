import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
    toggler: () => void
}

const styles = StyleSheet.create({
    menuIcon: { marginLeft: 15 }
})

export default class MenuButton extends React.Component<Props> {
    render() {
        const { toggler } = this.props
        return (
                <Ionicons 
                    name="ios-menu"
                    color="gray"
                    size={32}
                    onPress={() => toggler()}
                    style={styles.menuIcon}
                />
        )
    }
}