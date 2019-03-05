import { BlurView } from 'expo';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import MenuButton from '../../../ui/shared/MenuButton';
import EventsComponent from './Events';


interface Props {
}
class Events extends React.Component<Props & NavigationScreenProps> {
    static navigationOptions = ({navigation}:any) => ({ 
        title: 'Eventos' ,
        headerTransparent: true,
        animationEnabled: true,
        headerLeft: <MenuButton toggler={() => navigation.openDrawer()} />,
        headerBackground: (
            <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
        headerTitleStyle: { fontWeight: 'bold' }
    })

    pushDetails = (id:string, title:string) => {
        this.props.navigation.push('EventDetails', {id, title})
    }
    render() {
        return ( <EventsComponent pushDetails={this.pushDetails} /> )
    }
}

export default Events