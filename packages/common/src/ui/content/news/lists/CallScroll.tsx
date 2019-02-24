import moment from 'moment';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AllNewsQuery_allNews } from '../../../../schemaTypes';
import { CallCard } from '../cards/CallCard';

interface Props {calls: AllNewsQuery_allNews[] | null}

const styles = StyleSheet.create({
    callView: { backgroundColor: "#363636" },
    callScroll: { height: 132, marginBottom: 5 },
    shadowH: { height: 15 },
    callHeader: {
        color: "white", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        marginBottom: 20, marginLeft: 20,
    }
})

export const CallScroll: React.FC<Props> = ({calls}) => {
    if (!calls) { return <View style={{display:'none'}} /> }
    return (
        <View style={styles.callView}>
            <LinearGradient style={styles.shadowH} colors={['rgba(15,15,15,0.3)','rgba(15,15,15,0)']} />
                <Text style={styles.callHeader}>convocatorias</Text>
                <ScrollView horizontal={true} style={styles.callScroll}>
                {
                    calls.map(a => <CallCard key={a.id} title={a.title} due={moment().locale('es').to(a.expiration)} />)
                }
                </ScrollView>
            <LinearGradient style={styles.shadowH} colors={['rgba(15,15,15,0)','rgba(15,15,15,0.3)']} />
        </View>
    )
}