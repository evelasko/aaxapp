import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    size?: number
    color?: string
}

const LogInIcon: React.FC<Props> = ({size, color}) => {
    return (<Svg width={size||48} height={size||48} viewBox="0 0 56 56">
    <Path fill={color||'grey'} d="M25.293 39.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l11.999-11.999c.093-.092.166-.203.217-.326.101-.244.101-.519 0-.764-.051-.123-.125-.234-.217-.327L26.707 15.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414L35.586 27H5c-.553 0-1 .447-1 1s.447 1 1 1h30.586L25.293 39.293z"/>
    <Path fill={color||'grey'} d="M51 0H14c-.553 0-1 .447-1 1v21c0 .553.447 1 1 1s1-.447 1-1V2h35v52H15V34c0-.553-.447-1-1-1s-1 .447-1 1v21c0 .553.447 1 1 1h37c.553 0 1-.447 1-1V1c0-.553-.447-1-1-1z"/>
  </Svg>)
}

export default LogInIcon