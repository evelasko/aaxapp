import moment from 'moment';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AllNewsQuery_allNews } from '../../../schemaTypes';

interface Props {
    recents: AllNewsQuery_allNews[]
    pushDetails: (id:string, title:string) => void
}

const styles = StyleSheet.create({
    recentNewsListView: {
        backgroundColor: "white",
        padding: 20
    },
    recentNewsItem: {
        height: 132, flexDirection: 'row'
    },
    recentNewsItemTitle: {
        fontSize: 20, fontWeight: 'bold',
        color: '#363636',
        height: 75,
        overflow: 'hidden'
    },
    recentNewsItemDataView: {
        flexDirection: 'column', flex: 1, marginLeft: 10
    },
    recentNewsItemImage: {
        width:118, height: 96
    },
    recentNewsItemTime: {
        color: '#999999', fontSize: 10, textAlign: 'right'
    },
    recentHeader: {
        color: "#C77139",
        fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        marginBottom: 20
    },
})

export const RecentNewsList: React.FC<Props> = ({recents, pushDetails}) => {
    if (!recents.length) { return <View style={{display: 'none'}} />}
    return (
        <View style={styles.recentNewsListView}>
            <Text style={styles.recentHeader}>recientes</Text>
            <FlatList
                data={recents}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity style={{height:132}} onPress={() => { pushDetails(item.id,item.title) }}>
                        <View style={styles.recentNewsItem}>
                            <Image style={styles.recentNewsItemImage} source={{uri: item.imageURL || 'default.jpg' }} />
                            <View style={styles.recentNewsItemDataView} >
                                <Text style={styles.recentNewsItemTitle}>{item.title}</Text>
                                <Text style={styles.recentNewsItemTime}>{moment(item.createdAt).fromNow()}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

