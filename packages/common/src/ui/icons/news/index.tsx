import { Svg } from 'expo';
import React, { Component } from 'react';

interface Props {
    width?: number | null
    height?: number | null
    active?: boolean | null
}

export default class NewsIcon extends Component<Props> {
    render() {
        const activeColor = "#EB894A"
        const inactiveColor = "#BDBDBD"
        const { width, height, active = false } = this.props
        return(
            <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" >
                <Svg.Path d="M8 6c0-.552.448-1 1-1h17c.552 0 1 .448 1 1v21c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V11h3zM6 27c0 .552.448 1 1 1s1-.448 1-1V12H6zm5-14h5V8h-5zm7-4.5c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5zm0 2c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5zm0 2c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5zm-7 3c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5zm0 2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5zm0 2c0 .276.224.5.5.5h6c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-6c-.276 0-.5.224-.5.5zm0 3c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5zm0 4c0 .276.224.5.5.5h6c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-6c-.276 0-.5.224-.5.5zm0-2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5z" 
                fill={ active ? activeColor : inactiveColor }/>
            </Svg>
        )
    }
}