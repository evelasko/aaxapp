import gql from 'graphql-tag';
import { observer } from 'mobx-react-lite';
import React, { useContext } from "react";
import { graphql } from 'react-apollo';
import { StyleSheet, Text, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { NewsScroll } from '../ui/content/news/NewsScroll';
import { TabBar } from '../ui/shared/TabBar';
import { TopBar } from '../ui/shared/TopBar';

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        flex: 1
    }
})

const Base: React.FC = observer(({data}:any) => {
    const rootStore = useContext(RootStoreContext)
    if (data.loading) return (<View><Text>Loading</Text></View>)
    else {
        const { allNews } = data
        rootStore.newsStore.initNewsStore(allNews)
    }
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

export default graphql(
    gql` query AllNewsQuery { allNews { id title subtitle body imageURL expiration category featured } } `
)(Base)