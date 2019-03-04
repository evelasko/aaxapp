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
const EventNavigator:NavigationContainer = createStackNavigator({ 
    Events, 
    EventDetails :  {
        screen: EventDetails,
        navigationOptions: ({navigation}:any) => ({
            title: `${navigation.getParam('title').substring(0,20)}...`
        })
    }
})

const Content = createBottomTabNavigator({
    News: NewsNavigator,
    Events: EventNavigator,
  })
  
  export default createAppContainer(Content);