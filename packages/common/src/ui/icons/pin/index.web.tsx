import React, { Component } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

interface Props {
    size?: number | null
    color?: string | null
}

export default class PinIcon extends Component<Props> {
    render() {
        const { size, color } = this.props
        return (
            <Svg  width={size || 24} height={size || 24} viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    stroke={color ||"#BDBDBD"} fill="none"
                />
                <Circle cx="12" cy="10" r="3"
                    stroke={color ||"#BDBDBD"} fill="none"
                />
            </Svg>
        )
    }
}
