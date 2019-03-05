import { BlurView } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import EventsComponent from './Events';

interface Props {
}

class Events extends React.Component<Props & NavigationScreenProps> {
    static navigationOptions = {
        title: 'Eventos',
        headerBackground: (BlurView ? <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} /> : <View />),
        headerTransparent: true,
        headerTitleStyle: { fontWeight: 'bold' },
    }
    pushDetails = (id:string, title:string) => {
        this.props.navigation.push('EventDetails', {id, title})
    }
    render() {
        return ( <EventsComponent pushDetails={this.pushDetails} /> )
    }
}

export default Events