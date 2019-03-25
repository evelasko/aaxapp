import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    size?: number
    color?: string
}

const GoBackIcon: React.FC<Props> = ({size, color}) => {
    return (<Svg width={size||48} height={size||48} viewBox="0 0 500 500">
    <Path fill={color||'grey'} d="M317.32703027 407.61330673L159.71373354 250.00001 317.32703027 92.38671327l22.95922546 22.95922546L205.63218446 250.00001l134.65407127 134.65407127-22.95922546 22.95922546"/>
  </Svg>)
}

export default GoBackIcon