import { BlurView } from 'expo';
import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../../store';
import MenuButton from '../../../ui/shared/MenuButton';
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
        headerLeft: <MenuButton toggler={() => navigation.openDrawer()} />,
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
                <NewsComponent pushDetails={this.pushDetails} per={per} />
            </View>
        )
    }
}

export default News
