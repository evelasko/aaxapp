import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {}

const styles = StyleSheet.create({
    featuredNewsCard: {
        flexDirection: 'column',
        marginBottom: 20,
//      height: 345
    },
    featuredNewsCardHeader: {
        color: "#EB894A",
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20,
        textTransform: 'uppercase'
    },
    featuredNewsCardImage: {
        width: '100%',
        height: 206
    },
    featuredNewsCardTitle: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20
    },
    featuredNewsCardSubtitle: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 20,
        marginRight: 20,
        maxHeight: 60,
        overflow: 'hidden',
        fontVariant: ['small-caps'],
        marginBottom: 5
    },
    featuredNewsCardText: {
        color: "black",
        fontWeight: 'normal',
        fontSize: 12,
        marginLeft: 20,
        marginRight: 20,
        maxHeight: 60,
        overflow: 'hidden'
    }
})

export const FeaturedNewsCard: React.FC<Props> = () => {
    return (
        <View style={styles.featuredNewsCard}>
            <Text style={styles.featuredNewsCardHeader}>destacado</Text>
            <Image
                style={styles.featuredNewsCardImage}
                source={{uri: 'https://res.cloudinary.com/huh9ixig7/image/upload/v1550788418/aaxapi_images/c2w25yqpsjigg63z6act.jpg'}}
            />
            <Text style={styles.featuredNewsCardTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
            <Text style={styles.featuredNewsCardSubtitle}>
                Sed ut erat scelerisque, mattis urna sagittis, placerat eros. Aenean ipsum lectus, egestas vel libero non, viverra consequat ligula.
            </Text>
            <Text style={styles.featuredNewsCardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nibh at quam eleifend efficitur. Praesent lacinia elit eget rhoncus consequat. Donec finibus arcu erat, ut egestas felis lacinia non. Donec ut sapien vel magna ornare dictum. Nulla vulputate ligula sem, eget iaculis ipsum tincidunt eu. Praesent sit amet nisi mi. Proin eget scelerisque justo. Sed eu risus commodo, facilisis velit vitae, sollicitudin urna. Nam viverra leo vel est luctus tempus. Nullam maximus mattis ligula et pharetra. Proin in dolor in justo maximus rutrum sit amet ut odio. Nulla porta tortor sed arcu tincidunt, id aliquet est ornare. Integer at rutrum tortor, vitae fermentum lectus. Ut vel commodo lectus, eu maximus purus. Sed ut erat scelerisque, mattis urna sagittis, placerat eros. Aenean ipsum lectus, egestas vel libero non, viverra consequat ligula.
            </Text>
        </View>
    )
}