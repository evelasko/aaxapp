import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo';
import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { AppState, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../../store';
import { headerHeight } from '../../../ui/shared/SharedConstants/index';
import EventsComponent from './Events';

interface Props {}

@inject('appStore')
@observer
class Events extends React.Component<Props & NavigationScreenProps & {appStore: AppStore}> {
    static navigationOptions = ({navigation}:any) => ({ 
        title: 'Eventos' ,
        headerTransparent: true,
        animationEnabled: true,
        headerLeft: <Ionicons 
                        name="ios-menu"
                        color="gray"
                        size={32}
                        onPress={() => navigation.openDrawer()}
                        style={{marginLeft: 15}}
                    />,
        headerBackground: (
            <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
        headerTitleStyle: { fontWeight: 'bold' }
    })
    pushDetails = (id:string, title:string) => {
        this.props.navigation.push('EventDetails', {id, title})
    }
    render() {
        const { per } = this.props.appStore
        return ( 
            <EventsComponent 
                pushDetails={this.pushDetails} 
                per={per} 
                headerHeight={headerHeight}
                appState={AppState}
            />
        )
    }
}

export default Events