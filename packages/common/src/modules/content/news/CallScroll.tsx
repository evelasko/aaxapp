import moment from 'moment';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AllNewsQuery_allNewsMobile } from '../../../schemaTypes';
import LinearGradient from '../../../ui/shared/LGradient/index';

interface Props {
    calls: AllNewsQuery_allNewsMobile[],
    pushDetails: (id:string, title:string) => void
}
const styles = StyleSheet.create({
    callView: { backgroundColor: "#363636" },
    callScroll: { height: 132, marginBottom: 5 },
    shadowH: { height: 15 },
    callHeader: {
        color: "white", fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1,
        marginBottom: 20, marginLeft: 20,
    },
    callCard: {
        flexDirection: 'column',
        height: 132,
        width: 132,
        borderLeftColor: 'rgba(255,255,255,0.3)',
        borderLeftWidth: 1,
        overflow: 'hidden'
    },
    callCardTitle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 14,
        margin: 20,
        height: 100,
        overflow: 'hidden'
    },
    callCardExpiration: {
        color: "white",
        fontWeight: 'normal',
        textAlign: 'right',
        fontSize: 12,
        padding: 8
    }
})

export const CallScroll: React.FC<Props> = ({calls, pushDetails}) => {
    if (!calls.length) { return <View style={{display:'none'}} /> }
    return (
        <View style={styles.callView}>
            <LinearGradient style={styles.shadowH} colors={['rgba(15,15,15,0.3)','rgba(15,15,15,0)']} />
                <Text style={styles.callHeader}>CONVOCATORIAS</Text>
                <ScrollView horizontal={true} style={styles.callScroll}>
                {
                    calls.map(a => (
                        <TouchableOpacity key={a.id} onPress={() => { pushDetails(a.id,a.title) }}>
                            <View style={styles.callCard}>
                                <Text style={styles.callCardTitle}>{a.title}</Text>
                                <Text style={styles.callCardExpiration}>{moment().to(a.expiration)}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                </ScrollView>
            <LinearGradient style={styles.shadowH} colors={['rgba(15,15,15,0)','rgba(15,15,15,0.3)']} />
        </View>
    )
}

