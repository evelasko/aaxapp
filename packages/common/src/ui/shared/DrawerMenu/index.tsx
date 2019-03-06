import { AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Logo from '../../icons/logo/index';
const WIDTH = Dimensions.get('window').width
const HEIGHT =  Dimensions.get('window').height

const styles = StyleSheet.create({
    container: { 
        flex: 1, backgroundColor: '#2E2E2E', justifyContent:'space-between' 
    },
    headerContainer: {
        width: '100%', alignItems: 'center', justifyContent:'center'
    },
    logoContainer: {
        width: '100%', height:300, marginTop: 50, alignItems: 'center', justifyContent:'center'
    },
    linkList: {
        borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#555555', width: '100%'
    },
    linkContainer: { 
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#555555' 
    },
    link: { 
        paddingLeft: 20, marginTop: 15, marginBottom: 15,
        fontSize: 14, fontWeight: '100', textTransform: 'uppercase', color: '#999999', letterSpacing: 1
    },
    linkSocialContainer: {},
    linkSocialList: { flexDirection: 'row', justifyContent: 'space-evenly' },
    linkSocial: {},
    footerContainer: { marginBottom: 35},
    footerText: { 
        fontWeight: '100', fontSize: 10, color: '#999999', 
        alignSelf: 'center', marginTop: 15
    }
})

interface Props {
    navigation:any
}

export default class DrawerMenu extends React.Component<Props> {
    navLink = (nav:string, text:string) => (
        <TouchableOpacity style={styles.linkContainer} onPress={() => this.props.navigation.navigate(nav)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    )
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.logoContainer}>
                        <Logo width={100} height={100} />
                    </View>   
                    <View style={styles.linkList}>
                        { this.navLink('Nosotros', 'Nosotros') }
                        { this.navLink('Soporte', 'Soporte') }
                        { this.navLink('Privacidad', 'Privacidad') }
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.linkSocialList}>
                        <AntDesign name='twitter' style={styles.linkSocial} color='#C77139' size={32} />
                        <Entypo name='instagram' style={styles.linkSocial} color='#C77139' size={32} />
                        <Entypo name='facebook' style={styles.linkSocial} color='#C77139' size={32} />
                        <AntDesign name='linkedin-square' style={styles.linkSocial} color='#C77139' size={32} />
                    </View>
                    <Text style={styles.footerText}>@ 2019 Fundación Alicia Alonso</Text>
                </View>
            </View>
        )
    }
}