import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import PolicyContent from './Policy';

interface Props {}

const Policy: React.FC<Props & NavigationScreenProps> = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, paddingTop: 50}}>
            <PolicyContent />
        </View>
    )
}

export default Policy