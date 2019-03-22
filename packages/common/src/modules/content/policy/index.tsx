import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { headerHeight } from '../../../ui/shared/SharedConstants/index';
import PolicyContent from './Policy';

interface Props {}

const Policy: React.FC<Props & NavigationScreenProps> = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, marginTop: headerHeight}}>
            <PolicyContent />
        </View>
    )
}

export default Policy