import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import PolicyContent from './Policy';

interface Props {}

const Policy: React.FC<Props & RouteComponentProps> = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, paddingTop: 50}}>
            <PolicyContent />
        </View>
    )
}

export default Policy