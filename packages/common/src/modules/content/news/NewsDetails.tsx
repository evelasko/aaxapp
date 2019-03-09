import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<{ news: string }> {}

const styles = StyleSheet.create({
    detailsView: {margin: 15},
    detailsImage: {width: '100%', height: 254},
    detailsHeader: {},
    detailsTitle: { fontSize: 18, fontWeight:'500', marginTop: 10 },
    detailsSubtitle: {fontSize: 14, fontWeight: '100', color: '#555555'},
    detailsBody: {fontSize: 12, fontWeight: 'normal', textAlign: 'justify'},
})

const NewsDetail: React.FC<Props & NavigationScreenProps> = ({match, navigation}) => {
    
    const id = match ? match.params.news : navigation.getParam('id')
    if (!id) return <View><Text>Los sentimos pero no encontramos la noticia que querías...</Text></View>
    const newsDetails = gql` 
        query NewsDetails { oneNews (id: ${id} ) { id title subtitle body imageURL } }`

    return (
        <Query query={newsDetails}>
            {({loading, data}) => {
                if (loading) return <Text>Loading</Text>
                if (!loading && data === undefined) return <Text>Error en la petición</Text>
                const { oneNews } = data
                return (
                    <View style={styles.detailsView}>
                        <Image style={styles.detailsImage} source={{uri: oneNews.imageURL}} />
                        <View style={styles.detailsHeader}>
                            <Text style={styles.detailsTitle} >{oneNews.title}</Text>
                            <Text style={styles.detailsSubtitle}>{oneNews.subtitle}</Text>
                        </View>
                            <Text style={styles.detailsBody}>{oneNews.body}</Text>
                    </View>     
            )}}
        </Query>
    )
}

export default NewsDetail
