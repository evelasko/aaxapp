import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import EventDetails from '../content/events/EventDetails';
import NewsDetails from '../content/news/NewsDetails';
import { LoginConnector } from '../login';
import Profile from '../profile/index';
import Events from "./events/index";
import News from "./news/index";

// ----------------------------------------- MAIN NAVIGATOR
const MainNavigator = createSwitchNavigator({
    Login: { screen: LoginConnector},
})
 const AppContainer = createAppContainer(MainNavigator)


 // ----------------------------------------- MAIN APP
 class App extends React.Component { render() { return <AppContainer /> } }


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
// ----------------------------------------- TABS STACK
const Content = createBottomTabNavigator({
    Noticias: {screen: NewsNavigator},
    Eventos: {screen: EventNavigator},
    Perfil: {screen: Profile}
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
      animationEnabled: true
    }),
    tabBarOptions: {
      activeTintColor: '#C77139',
      inactiveTintColor: 'gray',
    },
  }
)

export default createAppContainer(Content);