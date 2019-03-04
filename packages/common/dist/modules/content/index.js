"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = __importDefault(require("react"));
var react_navigation_1 = require("react-navigation");
var EventDetails_1 = __importDefault(require("../content/events/EventDetails"));
var NewsDetails_1 = __importDefault(require("../content/news/NewsDetails"));
var Events_1 = __importDefault(require("./events/Events"));
var News_1 = __importDefault(require("./news/News"));
var NewsNavigator = react_navigation_1.createStackNavigator({
    News: News_1.default,
    NewsDetails: {
        screen: NewsDetails_1.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({
                title: navigation.getParam('title').substring(0, 20) + "..."
            });
        }
    }
});
NewsNavigator.navigationOptions = function (_a) {
    var navigation = _a.navigation;
    var tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return { tabBarVisible: tabBarVisible };
};
var EventNavigator = react_navigation_1.createStackNavigator({
    Events: Events_1.default,
    EventDetails: {
        screen: EventDetails_1.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({
                title: navigation.getParam('title').substring(0, 20) + "..."
            });
        }
    }
});
EventNavigator.navigationOptions = function (_a) {
    var navigation = _a.navigation;
    var tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return { tabBarVisible: tabBarVisible };
};
var Content = react_navigation_1.createBottomTabNavigator({
    Noticias: { screen: NewsNavigator },
    Eventos: { screen: EventNavigator },
}, {
    defaultNavigationOptions: function (_a) {
        var navigation = _a.navigation;
        return ({
            tabBarIcon: function (_a) {
                var focused = _a.focused, horizontal = _a.horizontal, tintColor = _a.tintColor;
                var routeName = navigation.state.routeName;
                var IconComponent = vector_icons_1.MaterialCommunityIcons;
                var iconName = 'apps';
                if (routeName === 'Noticias') {
                    iconName = "newspaper";
                    // Sometimes we want to add badges to some icons. 
                    // You can check the implementation below.
                    // IconComponent = HomeIconWithBadge; 
                }
                else if (routeName === 'Eventos') {
                    iconName = "calendar-star";
                }
                // You can return any component that you like here!
                return react_1.default.createElement(vector_icons_1.MaterialCommunityIcons, { name: iconName, size: 25, color: tintColor || '#C77139' });
            },
        });
    },
    tabBarOptions: {
        activeTintColor: '#C77139',
        inactiveTintColor: 'gray',
    },
});
exports.default = react_navigation_1.createAppContainer(Content);
