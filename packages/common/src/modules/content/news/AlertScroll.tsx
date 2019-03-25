import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AllNewsQuery_allNewsMobile } from '../../../schemaTypes';
import LinearGradient from '../../../ui/shared/LGradient/index';

interface Props {
    alerts: AllNewsQuery_allNewsMobile[],
    pushDetails: (id:string, title:string) => void
}

const styles = StyleSheet.create({
    alertView: { backgroundColor: "#C77139" },
    alertScroll: { height: 132, marginBottom: 5 },
    shadowH: { height: 15 },
    alertHeader: {
        color: "white", fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1,
        marginBottom: 10, marginLeft: 20
    },
    alertCard: {
        flexDirection: 'column',
        height: 131,
        width: 140,
        borderLeftColor: 'rgba(255,255,255,0.3)',
        borderLeftWidth: 1,
        overflow: 'hidden'
    },
    alertCardTitle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 14,
        margin: 10
    },
    alertCardText: {
        color: "white",
        fontWeight: 'normal',
        fontSize: 12,
        padding: 10
    }
})

export const AlertScroll: React.FC<Props> = ({alerts, pushDetails}) => {
    if (!alerts.length) { return <View style={{display:'none'}} /> }
    return (
        <View style={styles.alertView}>
            <LinearGradient style={styles.shadowH} colors={['rgba(35,35,35,0.2)','rgba(35,35,35,0)']} />
                <Text style={styles.alertHeader}>ALERTAS</Text>
                <ScrollView horizontal={true} style={styles.alertScroll}>
                {
                    alerts.map(a => (
                        <TouchableOpacity key={a.id} onPress={() => { pushDetails(a.id,a.title) }}>
                            <View style={styles.alertCard} >
                                <Text style={styles.alertCardTitle}>{a.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                </ScrollView>
            <LinearGradient style={styles.shadowH} colors={['rgba(35,35,35,0)','rgba(35,35,35,0.2)']} />
        </View>
    )
}

