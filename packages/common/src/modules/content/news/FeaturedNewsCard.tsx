import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AllNewsQuery_allNews } from '../../../schemaTypes';

interface Props {
    featuredNews: AllNewsQuery_allNews
    pushDetails: (id:string, title:string) => void
}

const styles = StyleSheet.create({
    featuredNewsCard: {
        flexDirection: 'column', marginBottom: 20,
    },
    featuredNewsCardHeader: {
        color: "#EB894A", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        margin: 20
    },
    featuredNewsCardImage: {
        width: '100%', height: 206
    },
    featuredNewsCardTitle: {
        color: "black", fontWeight: 'bold', fontSize: 20,
        margin: 20
    },
    featuredNewsCardSubtitle: {
        color: "black", fontWeight: 'bold', fontSize: 12, fontVariant: ['small-caps'],
        marginLeft: 20, marginRight: 20, marginBottom: 5, maxHeight: 60, overflow: 'hidden'
    },
    featuredNewsCardText: {
        color: "black", fontWeight: 'normal', fontSize: 12,
        marginLeft: 20, marginRight: 20, maxHeight: 60, overflow: 'hidden'
    }
})

export const FeaturedNewsCard: React.FC<Props> = ({featuredNews, pushDetails}) => {
    if (!featuredNews) { return <View style={{display:'none'}} /> }
    const { id, imageURL, title, subtitle, body } = featuredNews
    return (
        <TouchableOpacity style={styles.featuredNewsCard} onPress={() => { pushDetails(id, title) }}>
            <Text style={styles.featuredNewsCardHeader}>destacado</Text>
            <Image
                style={styles.featuredNewsCardImage}
                source={{uri: imageURL || 'default.png'}}
            />
            <Text style={styles.featuredNewsCardTitle}>{title}</Text>
            {subtitle && <Text style={styles.featuredNewsCardSubtitle}>{subtitle}</Text>}
            <Text style={styles.featuredNewsCardText}>{body}</Text>
        </TouchableOpacity>
    )
}
