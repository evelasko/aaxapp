import { EvilIcons } from '@expo/vector-icons';
import React from 'react';

interface Props { 
    size: number 
    color: string
}

const CloseIcon:React.FC<Props> = ({size, color}) => {
    return <EvilIcons name="close" size={size||24} color={color||"grey"} />
}

export default CloseIcon