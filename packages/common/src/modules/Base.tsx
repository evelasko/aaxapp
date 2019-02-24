import { observer } from 'mobx-react-lite';
import React, { useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { NewsScroll } from '../ui/content/news/NewsScroll';
import { TabBar } from '../ui/shared/TabBar';
import { TopBar } from '../ui/shared/TopBar';

const styles = StyleSheet.create({ main: { flexDirection: 'column', flex: 1 } })

const Base: React.FC = observer(() => {
    const rootStore = useContext(RootStoreContext)
    return (
        <View style={styles.main}>
            <TopBar />
            <NewsScroll />
            <TabBar
                onEventsPress={() => {}}
                onNewsPress={() => {}}
            />
        </View>
    )
})
