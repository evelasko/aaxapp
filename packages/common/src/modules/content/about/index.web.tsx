import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import AboutContent from './About';

interface Props {}

const About: React.FC<Props & RouteComponentProps> = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, paddingTop: 50}}>
            <AboutContent />
        </View>
    )
}

export default About