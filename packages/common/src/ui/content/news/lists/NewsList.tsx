import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface Props {}

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

export const NewsList: React.FC<Props> = () => {
    return (
        <View style={styles.newsListView}>
            <Text style={styles.newsHeader}>noticias</Text>
            <FlatList
                data={[
                    {title: 'Ut vitae augue vehicula, semper dui eget, tincidunt metus', key: 'item1', text: 'Ut vitae augue vehicula, semper dui eget, tincidunt metus. Fusce non nunc eget nunc viverra aliquam. Donec convallis semper nisl in suscipit. Sed quis erat vitae magna vestibulum lobortis ac ut libero. Aenean non sem vel nulla eleifend porta. Aliquam vel posuere nisl. Fusce malesuada ante sit amet nunc lacinia pharetra ac sed libero.'}, 
                    {title: 'Fusce non nunc eget nunc sit amet nunc lacinia pharetra viverra aliquam', key: 'item2', text: 'Nunc vel eros quis tortor facilisis posuere. Phasellus luctus finibus felis, ac elementum neque dapibus quis. Vivamus consequat dictum neque, sed consequat est facilisis faucibus. Ut finibus varius diam, vitae hendrerit urna suscipit vitae. Etiam ultrices, dolor eu condimentum cursus, velit metus placerat mi, non aliquam velit ante id ante.'}, 
                    {title: 'Fusce malesuada ante sit amet nunc lacinia pharetra ac sed libero', key: 'item3', text: 'Aliquam maximus, dolor sit amet ultrices sagittis, arcu odio suscipit libero, id venenatis urna magna eu mauris. Donec at molestie dolor, consequat porta eros. Etiam ac est accumsan, sagittis purus quis, scelerisque nulla. Proin vel tellus in purus aliquam dapibus at sit amet erat. Donec sit amet euismod nibh.'}
                ]}
                renderItem={({item, separators}) => (
                    <TouchableHighlight style={{height:132}} onPress={() => console.log('You pressed on: ',item.title)} onShowUnderlay={separators.highlight} onHideUnderlay={separators.unhighlight}>
                        <View style={styles.newsItem}>
                            <Image style={styles.newsItemImage} source={{uri: 'https://res.cloudinary.com/huh9ixig7/image/upload/v1550834159/aaxapi_images/e3darvw9yh3m8t51wq95.jpg'}} />
                            <View style={styles.newsItemDataView} >
                                <Text style={styles.newsItemTitle}>{item.title}</Text>
                                <Text style={styles.newsItemText}>{item.text}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                )}
            />
        </View>
    )
}
