import { BlurView } from 'expo';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { DrawerActions, NavigationScreenProps } from 'react-navigation';
import MenuButton from '../../../ui/shared/MenuButton/index';
import NewsComponent from './News';

interface Props {
}

const styles = StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1},
    activity: {flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center'}
})

class News extends React.Component<Props & NavigationScreenProps> {
    static navigationOptions = {
        title: 'Noticias',
        headerBackground: (<BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />),
        headerTransparent: true,
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: (
        <TouchableOpacity onPress={() => DrawerActions.openDrawer()}>
            <MenuButton />
        </TouchableOpacity>
        )
    }
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
