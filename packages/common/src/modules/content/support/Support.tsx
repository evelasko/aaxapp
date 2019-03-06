import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const SupportContent: React.FC<Props> = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, paddingTop: 50}}>
            <Text>SupportContent...</Text>
        </View>
    )
}

export default SupportContent