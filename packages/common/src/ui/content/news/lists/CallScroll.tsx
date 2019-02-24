import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStoreContext } from '../../../../stores/RootStore';
import { CallCard } from '../cards/CallCard';
moment.locale('fr')

interface Props {}

const styles = StyleSheet.create({
    callView: {
        // height: 206,
        backgroundColor: "#363636"
    },
    callScroll: {
        height: 132, marginBottom: 5
    },
    callHeader: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20, marginLeft: 20,
        textTransform: 'uppercase'
    },
    shadowH: { height: 15 }
})

export const CallScroll: React.FC<Props> = observer(() => {
    const rootStore = useContext(RootStoreContext)
    return (
        <View style={styles.callView}>
            <LinearGradient style={styles.shadowH} colors={['rgba(15,15,15,0.3)','rgba(15,15,15,0)']} />
                <Text style={styles.callHeader}>convocatorias</Text>
                <ScrollView horizontal={true} style={styles.callScroll}>
                {
                    rootStore.newsStore.calls.map(a => <CallCard key={a.id} title={a.title} due={moment().locale('es').to(a.expiration)} />)
                }
                </ScrollView>
            <LinearGradient style={styles.shadowH} colors={['rgba(15,15,15,0)','rgba(15,15,15,0.3)']} />
        </View>
    )
})