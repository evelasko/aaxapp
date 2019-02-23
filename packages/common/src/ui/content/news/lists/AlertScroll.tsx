import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStoreContext } from '../../../../stores/RootStore';
import { AlertCard } from '../cards/AlertCard';

interface Props {}

const styles = StyleSheet.create({
    alertView: {
        backgroundColor: "#C77139"
    },
    alertScroll: {
        height: 132,
        marginBottom: 20
    },
    alertHeader: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20,
        textTransform: 'uppercase'
    },
})

export const AlertScroll: React.FC<Props> = observer(() => {
    const rootStore = React.useContext(RootStoreContext)
    return (
        <View style={styles.alertView}>
            <Text style={styles.alertHeader}>alertas</Text>
            <ScrollView horizontal={true} style={styles.alertScroll}>
            {
                rootStore.newsStore.alerts.map(a => <AlertCard key={a.id} title={a.title} time={a.text} />)
            }
            </ScrollView>
        </View>
    )
})
