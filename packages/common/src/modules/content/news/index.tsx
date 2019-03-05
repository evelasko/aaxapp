import { BlurView } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import MenuButton from '../../../ui/shared/MenuButton';
import NewsComponent from './News';

interface Props {
}
class News extends React.Component<Props & NavigationScreenProps> {
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
        return (
            <View style={StyleSheet.absoluteFill}>
                <NewsComponent pushDetails={this.pushDetails} />
            </View>
        )
    }
}

export default News
