"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = __importDefault(require("react"));
var react_navigation_1 = require("react-navigation");
var EventDetails_1 = __importDefault(require("../content/events/EventDetails"));
var NewsDetails_1 = __importDefault(require("../content/news/NewsDetails"));
var login_1 = require("../login");
var index_1 = __importDefault(require("../profile/index"));
var index_2 = __importDefault(require("./events/index"));
var index_3 = __importDefault(require("./news/index"));
// ----------------------------------------- MAIN NAVIGATOR
var MainNavigator = react_navigation_1.createSwitchNavigator({
    Login: { screen: login_1.LoginConnector },
});
var AppContainer = react_navigation_1.createAppContainer(MainNavigator);
// ----------------------------------------- MAIN APP
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () { return react_1.default.createElement(AppContainer, null); };
    return App;
}(react_1.default.Component));
// ----------------------------------------- NEWS STACK
var NewsNavigator = react_navigation_1.createStackNavigator({
    News: index_3.default,
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
// ----------------------------------------- EVENTS STACK
var EventNavigator = react_navigation_1.createStackNavigator({
    Events: index_2.default,
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
// ----------------------------------------- TABS STACK
var Content = react_navigation_1.createBottomTabNavigator({
    Noticias: { screen: NewsNavigator },
    Eventos: { screen: EventNavigator },
    Perfil: { screen: index_1.default }
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
                else if (routeName === 'Perfil') {
                    return react_1.default.createElement(vector_icons_1.FontAwesome, { name: "id-card", size: 20, color: tintColor || '#C77139' });
                }
                // You can return any component that you like here!
                return react_1.default.createElement(vector_icons_1.MaterialCommunityIcons, { name: iconName, size: 25, color: tintColor || '#C77139' });
            },
            animationEnabled: true
        });
    },
    tabBarOptions: {
        activeTintColor: '#C77139',
        inactiveTintColor: 'gray',
    },
});
exports.default = react_navigation_1.createAppContainer(Content);
