import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AllNewsQuery_allNews } from '../../../schemaTypes';
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

export const NewsScroll: React.FC<Props> = () => {
    const rootStore = useContext(RootStoreContext)
    const featuredNews:AllNewsQuery_allNews = rootStore.newsStore.featured.filter((n:any) => n.category === 'NEWS')[0]
    const newsLength = rootStore.newsStore.newses.length
    const recentsCount = newsLength > 3 ? 3 : newsLength
    const sortedNews: AllNewsQuery_allNews[] = rootStore.newsStore.newses.slice().sort((a,b) => {
        const dA:any = new Date(a.expiration)
        const dB:any = new Date(b.expiration)
        return dA - dB
    })
    const recents = sortedNews.slice(0, recentsCount )
    const newses = sortedNews.slice(recentsCount, newsLength)
    return (
        <ScrollView style={styles.contentScroll}>
            <FeaturedNewsCard featuredNews={featuredNews} />
            <AlertScroll />
            <RecentNewsList recents={recents} />
            <CallScroll />
            <NewsList newses={newses} />
        </ScrollView>
    )
}