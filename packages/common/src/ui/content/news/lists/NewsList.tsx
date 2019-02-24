import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface Props {
    newses: any[]
}

const styles = StyleSheet.create({
    newsListView: {
        backgroundColor: "white",
        padding: 20
    },
    newsItem: {
        height: 132,
        flexDirection: 'row'
    },
    newsItemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#363636',
        height: 45,
        overflow: 'hidden',
        marginBottom: 7
    },
    newsItemDataView: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10
    },
    newsItemImage: {
        width:118,
        height: 96
    },
    newsItemText: {
        color: '#999999',
        fontSize: 12,
        height: 43,
        overflow: 'hidden'
    },
    newsHeader: {
        color: "#C77139",
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        marginBottom: 20
    },
})

export const NewsList: React.FC<Props> = ({newses}) => {
    if (!newses.length) { return <View style={{display: 'none'}} />}
    return (
        <View style={styles.newsListView}>
            <Text style={styles.newsHeader}>noticias</Text>
            <FlatList
                data={newses}
                keyExtractor={(item) => item.id}
                renderItem={({item, separators}) => (
                    <TouchableHighlight style={{height:132}} onPress={() => console.log('You pressed on: ',item.title)} onShowUnderlay={separators.highlight} onHideUnderlay={separators.unhighlight}>
                        <View style={styles.newsItem}>
                            <Image style={styles.newsItemImage} source={{uri: item.imageURL}} />
                            <View style={styles.newsItemDataView} >
                                <Text style={styles.newsItemTitle}>{item.title}</Text>
                                <Text style={styles.newsItemText}>{item.body}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                )}
            />
        </View>
    )
}
