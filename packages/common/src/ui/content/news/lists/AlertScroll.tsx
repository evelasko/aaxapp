import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AllNewsQuery_allNews } from '../../../../schemaTypes';
import { AlertCard } from '../cards/AlertCard';

interface Props { alerts: AllNewsQuery_allNews[] | null }

const styles = StyleSheet.create({
    alertView: {
        backgroundColor: "#C77139"
    },
    alertScroll: {
        height: 132, marginBottom: 5
    },
    alertHeader: {
        color: "white", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        marginBottom: 10, marginLeft: 20
    },
    shadowH: { height: 15 }
})

export const AlertScroll: React.FC<Props> = ({alerts}) => {
    if (!alerts) { return <View style={{display:'none'}} /> }
    return (
        <View style={styles.alertView}>
            <LinearGradient style={styles.shadowH} colors={['rgba(35,35,35,0.2)','rgba(35,35,35,0)']} />
                <Text style={styles.alertHeader}>alertas</Text>
                <ScrollView horizontal={true} style={styles.alertScroll}>
                {
                    alerts.map(a => <AlertCard key={a.id} title={a.title} body={a.body} />)
                }
                </ScrollView>
            <LinearGradient style={styles.shadowH} colors={['rgba(35,35,35,0)','rgba(35,35,35,0.2)']} />
        </View>
    )
}
