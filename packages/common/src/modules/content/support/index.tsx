import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import SupportContent from './Support';

interface Props {}

const Support: React.FC<Props & NavigationScreenProps> = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, paddingTop: 50}}>
            <SupportContent />
        </View>
    )
}

export default Support