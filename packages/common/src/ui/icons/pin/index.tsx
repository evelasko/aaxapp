import { Feather } from '@expo/vector-icons';
import React, { Component } from 'react';

interface Props {
    size?: number | null
    color?: string | null
}

export default class PinIcon extends Component<Props> {
    render() {
        const { size, color } = this.props
        return (
            <Feather name="map-pin" size={size||24} color={color || "grey"}/>
        )
    }
}
