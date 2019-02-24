import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStoreContext } from '../../../../stores/RootStore';
import { AlertCard } from '../cards/AlertCard';

interface Props {}

const styles = StyleSheet.create({
    alertView: {
        backgroundColor: "#C77139"
    },
    alertScroll: {
        height: 132,
        marginBottom: 5
    },
    alertHeader: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
        marginLeft: 20,
        textTransform: 'uppercase'
    },
    shadowH: { height: 15 }
})

export const AlertScroll: React.FC<Props> = observer(() => {
    const rootStore = useContext(RootStoreContext)
    if (!rootStore.newsStore.alerts.length) { return <View style={{display:'none'}} /> }
    return (
        <View style={styles.alertView}>
            <LinearGradient style={styles.shadowH} colors={['rgba(35,35,35,0.2)','rgba(35,35,35,0)']} />
                <Text style={styles.alertHeader}>alertas</Text>
                <ScrollView horizontal={true} style={styles.alertScroll}>
                {
                    rootStore.newsStore.alerts.map(a => <AlertCard key={a.id} title={a.title} body={a.body} />)
                }
                </ScrollView>
            <LinearGradient style={styles.shadowH} colors={['rgba(35,35,35,0)','rgba(35,35,35,0.2)']} />
        </View>
    )
})
