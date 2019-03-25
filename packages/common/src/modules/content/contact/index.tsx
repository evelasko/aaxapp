import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import ContactContent from './Contact';

interface Props {}

const Contact: React.FC<Props & NavigationScreenProps> = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, paddingTop: 50}}>
            <ContactContent />
        </View>
    )
}

export default Contact