import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AllNewsQuery_allNews } from '../../../../schemaTypes';

interface Props {
    featuredNews: AllNewsQuery_allNews
}

const styles = StyleSheet.create({
    featuredNewsCard: {
        flexDirection: 'column',
        marginBottom: 20,
    },
    featuredNewsCardHeader: {
        color: "#EB894A",
        fontWeight: 'bold', fontSize: 24,
        margin: 20,
        textTransform: 'uppercase'
    },
    featuredNewsCardImage: {
        width: '100%', height: 206
    },
    featuredNewsCardTitle: {
        color: "black",
        fontWeight: 'bold', fontSize: 20,
        margin: 20
    },
    featuredNewsCardSubtitle: {
        color: "black",
        fontWeight: 'bold', fontSize: 12,
        marginLeft: 20, marginRight: 20,
        maxHeight: 60,
        overflow: 'hidden',
        fontVariant: ['small-caps'],
        marginBottom: 5
    },
    featuredNewsCardText: {
        color: "black",
        fontWeight: 'normal', fontSize: 12,
        marginLeft: 20, marginRight: 20,
        maxHeight: 60,
        overflow: 'hidden'
    }
})

export const FeaturedNewsCard: React.FC<Props> = ({featuredNews}) => {
    if (!featuredNews) { return <View style={{display:'none'}} /> }
    const { imageURL, title, subtitle, body } = featuredNews
    return (
        <View style={styles.featuredNewsCard}>
            <Text style={styles.featuredNewsCardHeader}>destacado</Text>
            <Image
                style={styles.featuredNewsCardImage}
                source={{uri: imageURL || 'default.png'}}
            />
            <Text style={styles.featuredNewsCardTitle}>{title}</Text>
            {subtitle && <Text style={styles.featuredNewsCardSubtitle}>{subtitle}</Text>}
            <Text style={styles.featuredNewsCardText}>{body}</Text>
        </View>
    )
}