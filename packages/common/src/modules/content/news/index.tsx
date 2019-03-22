import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo';
import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../../store';
import { headerHeight } from '../../../ui/shared/SharedConstants';
import NewsComponent from './News';

interface Props {
}
@inject('appStore')
@observer
class News extends React.Component<Props & NavigationScreenProps & {appStore: AppStore}> {
    static navigationOptions = ({navigation}:any) => ({ 
        title: 'Noticias' ,
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
        this.props.navigation.push('NewsDetails', {id, title})
    }
    render () {
        const { per } = this.props.appStore
        return (
            <View style={StyleSheet.absoluteFill}>
                <NewsComponent 
                    pushDetails={this.pushDetails} 
                    per={per} 
                    headerHeight={headerHeight} 
                    appState={AppState}
                />
            </View>
        )
    }
}

export default News
