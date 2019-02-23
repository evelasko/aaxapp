import { observer } from 'mobx-react-lite';
import React, { useContext } from "react";
import { Button, StyleSheet, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { ContentScroll } from '../ui/content/news/ContentScroll';
import { TopBar } from '../ui/shared/TopBar';

interface Props {}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        flex: 1
    }
})

export const Main: React.FC<Props> = observer(() => {
    const rootStore = useContext(RootStoreContext)
    return (
        <View style={styles.main}>
            <TopBar />
            <Button title="view details" onPress={() => { 
                // rootStore.routerStore.screen = 'NewsDetails' 
                rootStore.newsStore.alerts.push(
                    { id: '1', title: 'Title One', text: 'Lorem ipsum' },
                    { id: '2', title: 'Title Two', text: 'Lorem ipsum' },
                    { id: '3', title: 'Title Three', text: 'Lorem ipsum' },
                    { id: '4', title: 'Title Four', text: 'Lorem ipsum' }
                    )
            }} />
            <ContentScroll />
        </View>
    )
})

// 