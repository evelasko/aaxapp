import { Feather } from '@expo/vector-icons';
import React, { Component } from 'react';

interface Props {
    width?: number | null
    height?: number | null
    color?: string | null
}

export default class PinIcon extends Component<Props> {
    render() {
        const { width, height, color } = this.props
        return (
            <Feather name="map-pin" size={width||24} color={color || "grey"}/>
        )
    }
}
