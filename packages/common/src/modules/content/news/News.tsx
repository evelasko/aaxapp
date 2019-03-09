import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AlertScroll } from './AlertScroll';
import { CallScroll } from './CallScroll';
import { FeaturedNewsCard } from './FeaturedNewsCard';
import NewsList from './NewsList';
import { RecentNewsList } from './RecentNewsList';
interface Props {
    pushDetails: (id:string, title:string) => void
    per?: string | null
}

const newsQuery = gql`query AllNewsQuery ( $per: String, $query: String ) 
{ allNews ( per:$per, query:$query )
    { id title subtitle body imageURL expiration category featured createdAt } 
}`

const styles = StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1},
    activity: {flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center'}
})


class NewsComponent extends React.Component<Props> {
    render () {
        const { pushDetails, per = null } = this.props
        console.log('FROM NEWS: ', per)
        return (
            <Query query={newsQuery} variables={{ per, query:''}}>
                {({loading, data, error}) => {
                    if (loading) { return (
                        <View style={styles.activity}>
                            <ActivityIndicator size="small" color="#C77139" />
                        </View>
                    )}
                    if (error) { 
                        console.log('ERROR: ', error)
                        return <Text>Ha ocurrido un error</Text>
                    }
                    if (!data.allNews.length) return <Text>No hay noticias que mostrar...</Text>
                    const { allNews } = data
                    const alerts = allNews.filter((n:any) => n.category === 'ALERT')
                    const calls = allNews.filter((n:any) => n.category === 'CALL')
                    const featuredNews = allNews.filter((n:any) => n.featured && n.category === 'NEWS')[0]
                    const allNewses = allNews.filter((n:any) => featuredNews ? 
                        n.category === 'NEWS' && n.id != featuredNews.id : n.category === 'NEWS' )
                    const recentsCount = allNewses.length > 3 ? 3 : allNewses.length
                    const recents = allNewses.slice(0, recentsCount )
                    const newses = allNewses.slice(recentsCount, allNewses.length)
                    return (
                        <ScrollView style={styles.contentScroll}>
                            <FeaturedNewsCard featuredNews={featuredNews}  pushDetails={pushDetails}/>
                            <AlertScroll alerts={alerts} pushDetails={pushDetails}/>
                            <RecentNewsList recents={recents} pushDetails={pushDetails}/>
                            <CallScroll calls={calls} pushDetails={pushDetails}/>
                            <NewsList newses={newses} pushDetails={pushDetails}/>
                        </ScrollView>
                    )
                }}
            </Query>        
        )
    }
}

export default NewsComponent
