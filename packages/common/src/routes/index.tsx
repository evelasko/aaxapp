import { EvilIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createDrawerNavigator, createStackNavigator, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import About from '../modules/content/about/index';
import Contact from '../modules/content/contact/index';
import EventDetails from '../modules/content/events/EventDetails';
import Events from "../modules/content/events/index";
import News from "../modules/content/news/index";
import NewsDetails from '../modules/content/news/NewsDetails';
import Policy from '../modules/content/policy/index';
import Profile from '../modules/profile/index';
import Settings from '../modules/settings/index';
import SignUp from '../modules/signup/index';
import DrawerMenu from '../ui/shared/DrawerMenu/index';


// ----------------------------------------- NEWS STACK
const NewsNavigator:NavigationContainer = createStackNavigator({ 
    News, 
    NewsDetails: {
        screen: NewsDetails,
        navigationOptions: ({navigation}:any) => ({
            title: `${navigation.getParam('title').substring(0,20)}...`
        })
    }
})
NewsNavigator.navigationOptions = ({ navigation }:any) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) { tabBarVisible = false }
    return { tabBarVisible }
}
// ----------------------------------------- EVENTS STACK
const EventNavigator:NavigationContainer = createStackNavigator({ 
    Events, 
    EventDetails :  {
        screen: EventDetails,
        navigationOptions: ({navigation}:any) => ({
            title: `${navigation.getParam('title').substring(0,20)}...`
        })
    }
})
EventNavigator.navigationOptions = ({ navigation }:any) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) { tabBarVisible = false }
    return { tabBarVisible }
}
EventNavigator.navigationOptions = ({ navigation }:any) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) { tabBarVisible = false }
    return { tabBarVisible }
}
// ----------------------------------------- PROFILE STACK
const ProfileNavigator:NavigationContainer = createStackNavigator({ 
    Profile,
    Settings: {screen: Settings,
        navigationOptions: ({navigation}:any) => ({
            title: "Ajustes"
        })
    },
})

// ----------------------------------------- CONTENT TABS
const ContentTabs = createBottomTabNavigator({
    Noticias: {screen: NewsNavigator},
    Eventos: {screen: EventNavigator},
    Perfil: {screen: ProfileNavigator}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state
            let IconComponent = MaterialCommunityIcons
            let iconName = 'apps'
            if (routeName === 'Noticias') {
            iconName = `newspaper`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
            // IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'Eventos') {
            iconName = `calendar-star`;
            } else if (routeName === 'Perfil') {
                return <FontAwesome name="id-card" size={20} color={tintColor||'#C77139'}/>
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={25} color={tintColor||'#C77139'} />;
        },
    }),
    tabBarOptions: { activeTintColor: '#C77139', inactiveTintColor: 'gray' },
  }
)

// ----------------------------------------- DRAWER STACK
const WIDTH = Dimensions.get('window').width

const DrawerScreens = createStackNavigator({
    Privacidad: {screen: Policy},
    Contacto: {screen: Contact},
    Nosotros: {screen: About}
}, 
{
    defaultNavigationOptions: ({navigation}:any) => {
        const { routeName } = navigation.state
        return {
            title: routeName,
            headerTransparent: true,
            animationEnabled: true,
            headerLeft: <EvilIcons style={{marginLeft:15}} name='close' color="gray" size={32} onPress={() => navigation.navigate('Content') }/>,
            headerBackground: <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />,
            headerTitleStyle: { fontWeight: 'bold' }
        }
    }
}
)

const Drawer = createDrawerNavigator(
    { 
        Content: { screen: ContentTabs },
        DrawerScreens,
    }, 
    { 
        drawerPosition: 'left', 
        drawerWidth: WIDTH*0.63,
        contentComponent: ({navigation}:any) => <DrawerMenu navigation={navigation}/> , 
        initialRouteName: 'Content'
    }
)

// ----------------------------------------- BASE NAVIGATOR
const Routes = createSwitchNavigator({
    Content: { screen: Drawer },
})

// ----------------------------------------- MODALS NAVIGATOR
const RootNavigation = createStackNavigator({
    Routes: { screen: Routes },
    SignUp: { screen: SignUp }
    },
    { mode: 'modal', headerMode: 'none' }
)

export default createAppContainer(RootNavigation)
