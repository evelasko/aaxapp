import { Feather } from '@expo/vector-icons';
import React from 'react';

interface Props { 
    size: number 
    color: string
}

const PhoneCall:React.FC<Props> = ({size, color, ...props}) => {
    return <Feather name="phone-call" size={size||24} color={color||"grey"}/>
}

export default PhoneCall