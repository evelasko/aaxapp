import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<{ news: string }> {}

const styles = StyleSheet.create({
    detailsView: {width:'100%', marginTop: 10, marginHorizontal:20, paddingHorizontal: 20},
    detailsImage: {width: '100%', height: 254},
    detailsHeader: {width: '100%', marginTop: 10},
    detailsTitle: { fontSize: 22, fontWeight:'800' },
    detailsSubtitle: {fontSize: 12, fontWeight: '800', color: '#555555'},
    detailsBody: {fontSize: 16, fontWeight: 'normal', textAlign: 'justify'},
})

const NewsDetail: React.FC<Props & NavigationScreenProps> = ({match, navigation}) => {
    
    const id = match ? match.params.news : navigation.getParam('id')
    if (!id) return <View><Text>Los sentimos pero no encontramos la noticia que querías...</Text></View>
    const newsDetails = gql` 
        query NewsDetails { oneNews (id: ${id} ) { id title subtitle body imageURL } }`

    return (<ScrollView style={StyleSheet.absoluteFill}>
        <Query query={newsDetails}>
            {({loading, data}) => {
                if (loading) return <Text>Loading</Text>
                if (!loading && data === undefined) return <Text>Error en la petición</Text>
                const { oneNews } = data
                return (
                    <View style={{alignItems: 'center'}}>
                        <Image style={styles.detailsImage} source={{uri: oneNews.imageURL}} />
                        <View style={styles.detailsView}>
                            <View style={styles.detailsHeader}>
                                <Text style={styles.detailsTitle} >{oneNews.title}</Text>
                                {
                                    oneNews.subtitle ? 
                                        (   <View style={{marginTop:10}}>
                                                <Text style={styles.detailsSubtitle}>{oneNews.subtitle.toUpperCase()}</Text>
                                            </View>
                                        )
                                        :   <View />
                                    }
                            </View>
                            <View style={{marginTop: 35, marginBottom:50}}>
                                <Text style={styles.detailsBody}>{oneNews.body}</Text>
                            </View>
                        </View>
                    </View>
            )}}
        </Query>
        </ScrollView> 
    )
}

export default NewsDetail
