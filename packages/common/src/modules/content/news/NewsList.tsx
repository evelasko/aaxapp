import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AllNewsQuery_allNews } from '../../../schemaTypes';

interface Props  {
    newses: AllNewsQuery_allNews[]
    pushDetails: (id:string, title:string) => void
}

const styles = StyleSheet.create({
    newsListView: {
        backgroundColor: "white",
        padding: 20
    },
    newsItem: {
        height: 132, flexDirection: 'row'
    },
    newsItemTitle: {
        fontSize: 20, fontWeight: 'bold', color: '#363636',
        height: 45, overflow: 'hidden', marginBottom: 7
    },
    newsItemDataView: {
        flexDirection: 'column', flex: 1, marginLeft: 10
    },
    newsItemImage: {
        width:118, height: 96
    },
    newsItemText: {
        color: '#999999', fontSize: 12,
        height: 43, overflow: 'hidden'
    },
    newsHeader: {
        color: "#C77139", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        marginBottom: 20
    },
})

const NewsList: React.FC<Props> = ({newses, pushDetails}) => {
    if (!newses.length) { return <View style={{display: 'none'}} />}
    return (
        <View style={styles.newsListView}>
            <Text style={styles.newsHeader}>noticias</Text>
            <FlatList
                data={newses}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity style={{height:132}} onPress={() => { pushDetails(item.id,item.title) }}>
                        <View style={styles.newsItem}>
                            <Image style={styles.newsItemImage} source={{uri: item.imageURL || 'default.png'}} />
                            <View style={styles.newsItemDataView} >
                                <Text style={styles.newsItemTitle}>{item.title}</Text>
                                <Text style={styles.newsItemText}>{item.body}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NewsList
