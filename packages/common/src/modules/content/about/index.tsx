import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import AboutContent from './About';

interface Props {}

const About: React.FC<Props & NavigationScreenProps> = ({navigation}) => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, paddingTop: 50}}>
            <AboutContent />
        </View>
    )
}

export default About