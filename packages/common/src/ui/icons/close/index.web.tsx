import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    size: number
    color: string
}

const CloseIcon:React.FC<Props> = ({size, color}) => {
    return (
        <Svg viewBox="0 0 48 48" width={size||48} height={size||48}>
            <Path d="M 8.791 40.829 L 7.172 39.208 L 22.38 24 L 7.172 8.792 L 8.791 7.17 L 24 22.379 L 39.209 7.17 L 40.828 8.792 L 25.62 24 L 40.828 39.208 L 39.209 40.829 L 24 25.62 Z" fill={color||"grey"}/>
        </Svg>
    )
}

export default CloseIcon