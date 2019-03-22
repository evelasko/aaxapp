import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

interface Props {
latlng: { latitude:number, longitude: number }
}

export default class EventMap extends React.Component<Props> {
    render() {
        const { latlng } = this.props
        return (
            <View>
                <MapView region={{...latlng, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} />
            </View>
        )
    }
}