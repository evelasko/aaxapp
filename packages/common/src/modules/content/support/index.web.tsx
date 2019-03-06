import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import SupportContent from './Support';

interface Props {}

const Support: React.FC<Props & RouteComponentProps> = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, paddingTop: 50}}>
            <SupportContent />
        </View>
    )
}

export default Support