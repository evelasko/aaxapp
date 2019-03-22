import { Feather } from '@expo/vector-icons';
import React, { Component } from 'react';

interface Props {
    width?: number | null
    height?: number | null
    color?: string | null
}

export default class DateIcon extends Component<Props> {
    render() {
        const { width, height, color } = this.props
        return (
            <Feather name="calendar" size={width || 24} color={color || "grey"} />
        )
    }
}
