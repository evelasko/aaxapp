import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import ContactContent from './Contact';

interface Props {}

const Contact: React.FC<Props & RouteComponentProps> = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, paddingTop: 50}}>
            <ContactContent />
        </View>
    )
}

export default Contact