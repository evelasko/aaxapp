import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerItemsProps } from 'react-navigation';
const WIDTH = Dimensions.get('window').width
const HEIGHT =  Dimensions.get('window').height

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'lightgray' },
    headerContainer: {},
    linkContainer: { height: 100},
    linkList: {},
    link: { flex: 1, fontSize: 20, padding: 6, paddingLeft: 14 },
    linkSocialContainer: {},
    linkSocialList: {},
    linkSocial: {}
})

export default class DrawerMenu extends React.Component<DrawerItemsProps> {
    navLink = (nav:string, text:string) => (
        <TouchableOpacity style={styles.linkContainer} onPress={() => {}}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    )
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text>Menu Drawer</Text>
                </View>   
                <View style={styles.linkList}>
                    { this.navLink('Nosotros', 'Nosotros') }
                    { this.navLink('Soporte', 'Soporte') }
                </View>
                <View style={styles.linkSocialList}>

                </View>
            </View>
        )
    }
}