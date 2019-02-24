import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { AllNewsQuery_allNews } from '../../../../schemaTypes';
// import {} from '../../../../schemaTypes'

interface Props {
    recents: AllNewsQuery_allNews[]
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

export const RecentNewsList: React.FC<Props> = ({recents}) => {
    return (
        <View style={styles.recentNewsListView}>
            <Text style={styles.recentHeader}>recientes</Text>
            <FlatList
                data={recents}
                keyExtractor={(item) => item.id}
                renderItem={({item, separators}) => (
                    <TouchableHighlight style={{height:132}} onPress={() => console.log('You pressed on: ',item.title)} onShowUnderlay={separators.highlight} onHideUnderlay={separators.unhighlight}>
                        <View style={styles.recentNewsItem}>
                            <Image style={styles.recentNewsItemImage} source={{uri: item.imageURL || 'default.jpg' }} />
                            <View style={styles.recentNewsItemDataView} >
                                <Text style={styles.recentNewsItemTitle}>{item.title}</Text>
                                <Text style={styles.recentNewsItemTime}>{item.expiration}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                )}
            />
        </View>
    )
}
