import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, NavigationContainer } from 'react-navigation';
import EventDetails from '../content/events/EventDetails';
import NewsDetails from '../content/news/NewsDetails';
import Events from "./events/Events";
import News from "./news/News";

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
const Content = createBottomTabNavigator({
    Noticias: {screen: NewsNavigator},
    Eventos: {screen: EventNavigator},
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
        }

        // You can return any component that you like here!
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor||'#C77139'} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#C77139',
      inactiveTintColor: 'gray',
    },
  }
)
  
export default createAppContainer(Content);