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
    headerHeight?: number | null
    appState?: any
}

const newsQuery = gql`query AllNewsQuery ( $per: String ) 
    { allNewsMobile ( per:$per ) 
        { id title subtitle body imageURL expiration category featured createdAt } 
    }
`

const styles = StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1},
    activity: {flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center'}
})


class NewsComponent extends React.Component<Props> {
    render () {
        const { pushDetails, per = null, headerHeight = 0 } = this.props
        console.log('FROM NEWS: ', per)
        return (
            <Query query={newsQuery} variables={{ per }} errorPolicy="all">
                {({loading, data, error, startPolling, stopPolling, refetch}) => {
                    if (loading) { 
                        console.log('Loading News...')
                        return (
                        <View style={styles.activity}>
                            <ActivityIndicator size="small" color="#C77139" />
                        </View>
                    )}
                    if (error) { 
                        console.log('ERROR WHILE FETCHING NEWS: ', JSON.stringify(error))
                        console.log('STRING: ', JSON.stringify(error.message))
                        console.log('MORE INFO: ', JSON.stringify(error.extraInfo))
                        return (
                        <View style={{marginTop: 150}}>
                            <Text>Ha ocurrido un error:</Text>
                            <View>
                               { 
                                   error.graphQLErrors.map((rr, i) => (
                                       <View key={i}><Text >{JSON.stringify(rr)}</Text></View>
                                    ))
                                }
                            </View>
                        </View>
                        )
                    }
                    if (!data.allNewsMobile.length) return <Text>No hay noticias que mostrar...</Text>
                    if (this.props.appState) {
                        this.props.appState.addEventListener('change', (nextState:any) => {
                            if (nextState === 'active') { refetch() }
                        })
                    }
                    const { allNewsMobile } = data
                    const alerts = allNewsMobile.filter((n:any) => n.category === 'ALERT')
                    const calls = allNewsMobile.filter((n:any) => n.category === 'CALL')
                    const featuredNews = allNewsMobile.filter((n:any) => n.featured && n.category === 'NEWS')[0]
                    const allNewses = allNewsMobile.filter((n:any) => featuredNews ? 
                        n.category === 'NEWS' && n.id != featuredNews.id : n.category === 'NEWS' )
                    const recentsCount = allNewses.length > 3 ? 3 : allNewses.length
                    const recents = allNewses.slice(0, recentsCount )
                    const newses = allNewses.slice(recentsCount, allNewses.length)
                    return (
                        <ScrollView style={{...styles.contentScroll, marginTop: headerHeight || 0}}>
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
