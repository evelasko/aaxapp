import gql from 'graphql-tag';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { graphql } from 'react-apollo';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStoreContext } from '../../../stores/RootStore';
import { FeaturedNewsCard } from './cards/FeaturedNewsCard';
import { AlertScroll } from './lists/AlertScroll';
import { CallScroll } from './lists/CallScroll';
import { NewsList } from './lists/NewsList';
import { RecentNewsList } from './lists/RecentNewsList';

interface Props {}

const styles = StyleSheet.create({
    contentScroll: {
        flexDirection: 'column',
        height: '100%',
        flex: 1
    }
})

export const NewsScroll: React.FC<Props> = observer(({data}:any) => {
    const rootStore = useContext(RootStoreContext)
    if (data.loading) return (<View><Text>Loading</Text></View>)
    else { rootStore.newsStore.initNewsStore(data.allNews) }
    return (
        <ScrollView style={styles.contentScroll}>
            <FeaturedNewsCard featuredNews={rootStore.newsStore.featuredNews} />
            <AlertScroll alerts={rootStore.newsStore.alerts} />
            <RecentNewsList recents={rootStore.newsStore.recents} />
            <CallScroll calls={rootStore.newsStore.calls} />
            <NewsList newses={rootStore.newsStore.newses} />
        </ScrollView>
    )
})

export default graphql(
    gql` query AllNewsQuery { allNews { id title subtitle body imageURL expiration category featured } } `
)(NewsScroll)