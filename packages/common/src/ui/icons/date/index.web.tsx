import React, { Component } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface Props {
    width?: number | null
    height?: number | null
    color?: string | null
}

export default class DateIcon extends Component<Props> {
    render() {
        const { width, height, color } = this.props
        return (
            <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <Rect width="18" height="18" x="3" y="4" rx="2" ry="2"
                    stroke={color ||"#BDBDBD"} fill="none"
                />
                <Path d="M16 2v4M8 2v4M3 10h18"
                    stroke={color ||"#BDBDBD"} fill="none"
                />
            </Svg>
        )
    }
}
