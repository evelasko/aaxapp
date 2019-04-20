import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Email from '../../../ui/icons/email/index';
import PhoneCall from '../../../ui/icons/phone-call/index';
import PinIcon from '../../../ui/icons/pin/index';

interface Props {}

const styles = StyleSheet.create({
    mainWrapper: {...StyleSheet.absoluteFillObject, paddingTop: 100},
    cardWrapper: { flexDirection:'row', margin: 20, paddingBottom: 25, borderBottomWidth: StyleSheet.hairlineWidth },
    headerWrapper: {},
    headerTitle: { fontWeight: '900'},
    cardTextHeader: { fontWeight: 'bold', color:'grey'},
    cardText: {},
})

const ContactContent: React.FC<Props> = () => {
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.cardWrapper}>
                <View style={{marginHorizontal: 15}}><PhoneCall size={32} color="grey"/></View>
                <View>
                    <Text style={styles.cardTextHeader}>Llámanos</Text>
                    <Text style={styles.cardText}>+34 914 888 129</Text>
                </View>
            </View>
            <View style={styles.cardWrapper}>
            <View style={{marginHorizontal: 15}}><Email size={32} color="grey"/></View>
                <View>
                    <Text style={styles.cardTextHeader}>Escríbenos</Text>
                    <Text style={styles.cardText}>fundacion@alicialonso.org</Text>
                </View>
            </View>
            <View style={styles.cardWrapper}>
            <View style={{marginHorizontal: 15}}><PinIcon size={32} color="grey" /></View>
                <View>
                    <View><Text style={styles.cardTextHeader}>Visítanos</Text></View>
                    <View><Text>Campus URJC Fuenlabrada</Text></View>
                    <View><Text>
                        Camino del Molino SN{"\n"}
                        28943, Fuenlabrada{"\n"}
                        Madrid. España
                    </Text></View>
                </View>
            </View>
        </View>
    )
}

export default ContactContent