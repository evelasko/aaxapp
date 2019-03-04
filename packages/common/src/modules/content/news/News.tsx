import { BlurView } from 'expo';
import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerActions, NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';
import MenuButton from '../../../ui/shared/MenuButton/index';
import { AlertScroll } from './AlertScroll';
import { CallScroll } from './CallScroll';
import { FeaturedNewsCard } from './FeaturedNewsCard';
import NewsList from './NewsList';
import { RecentNewsList } from './RecentNewsList';
interface Props extends RouteComponentProps {
}

const newsQuery = gql`query AllNewsQuery { allNews 
{ id title subtitle body imageURL expiration category featured createdAt } }`

const styles = StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1},
    activity: {flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center'}
})

class News extends React.Component<Props & NavigationScreenProps> {
    static navigationOptions = {
        title: 'Noticias',
        headerBackground: (<BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />),
        headerTransparent: true,
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: (
        <TouchableOpacity onPress={() => DrawerActions.openDrawer()}>
            <MenuButton />
        </TouchableOpacity>
        )
    }
    pushDetails = (id:string, title:string) => {
        if (this.props.navigation) { this.props.navigation.push('NewsDetails', {id, title}) }
        else if (this.props.history) { this.props.history.push(`/news/${id}`)}
    }
    render () {
        const { history } = this.props
        return (
            <View style={StyleSheet.absoluteFill}>
                <Query query={newsQuery}>
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
                                <FeaturedNewsCard featuredNews={featuredNews}  pushDetails={this.pushDetails}/>
                                <AlertScroll alerts={alerts} pushDetails={this.pushDetails}/>
                                <RecentNewsList recents={recents} pushDetails={this.pushDetails}/>
                                <CallScroll calls={calls} pushDetails={this.pushDetails}/>
                                <NewsList newses={newses} pushDetails={this.pushDetails}/>
                            </ScrollView>
                        )
                    }}
                </Query>
            </View>
        
        )
    }
}

export default News
