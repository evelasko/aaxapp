import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    width?: number | null
    height?: number | null
    active?: boolean | null
}

export default class EventsIcon extends Component<Props> {
    render() {
        const activeColor = "#EB894A"
        const inactiveColor = "#BDBDBD"
        const { width, height, active = false } = this.props
        return (
            <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" >
                <Path d="M5 7c0-1.105.895-2 2-2h3v2c0 .552.448 1 1 1h1c.552 0 1-.448 1-1V5h6v2c0 .552.448 1 1 1h1c.552 0 1-.448 1-1V5h3c1.105 0 2 .895 2 2v3H5zm22 20c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V11h22zm-17-7c0 3.314 2.686 6 6 6s6-2.686 6-6-2.686-6-6-6-6 2.686-6 6zm6-4l.917 2.738 2.887.026-2.32 1.718.867 2.754L16 21.56l-2.351 1.676.867-2.754-2.32-1.718 2.887-.026zm4-12.5c0-.276.224-.5.5-.5s.5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5zm-9 0c0-.276.224-.5.5-.5s.5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5z" 
                fill={ active ? activeColor : inactiveColor }/>
            </Svg>
        )
    }
}
