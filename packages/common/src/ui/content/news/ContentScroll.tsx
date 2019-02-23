import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
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

export const ContentScroll: React.FC<Props> = () => {
    return (
        <ScrollView style={styles.contentScroll}>
            <FeaturedNewsCard />
            <AlertScroll />
            <RecentNewsList />
            <CallScroll />
            <NewsList />
        </ScrollView>
    )
}