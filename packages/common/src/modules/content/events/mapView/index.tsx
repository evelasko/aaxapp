import { MapView } from 'expo';
import React from 'react';
import { Dimensions } from 'react-native';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface Props {
    latlng: { latitude: number, longitude: number }
}

export default class EventMap extends React.Component<Props> {
    render() {
        const { latlng } = this.props
        return (
            <MapView
                style={{flex: 1}}
                initialRegion={{
                    ...latlng,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
            />
        )
    }
}

