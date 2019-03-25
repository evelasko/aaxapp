"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_icons_1 = require("@expo/vector-icons");
var expo_1 = require("expo");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_navigation_1 = require("react-navigation");
var index_1 = __importDefault(require("../modules/content/about/index"));
var index_2 = __importDefault(require("../modules/content/contact/index"));
var EventDetails_1 = __importDefault(require("../modules/content/events/EventDetails"));
var index_3 = __importDefault(require("../modules/content/events/index"));
var index_4 = __importDefault(require("../modules/content/news/index"));
var NewsDetails_1 = __importDefault(require("../modules/content/news/NewsDetails"));
var index_5 = __importDefault(require("../modules/content/policy/index"));
var index_6 = __importDefault(require("../modules/profile/index"));
var index_7 = __importDefault(require("../modules/settings/index"));
var index_8 = __importDefault(require("../modules/signup/index"));
var index_9 = __importDefault(require("../ui/shared/DrawerMenu/index"));
// ----------------------------------------- NEWS STACK
var NewsNavigator = react_navigation_1.createStackNavigator({
    News: index_4.default,
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
    Events: index_3.default,
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
EventNavigator.navigationOptions = function (_a) {
    var navigation = _a.navigation;
    var tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return { tabBarVisible: tabBarVisible };
};
// ----------------------------------------- PROFILE STACK
var ProfileNavigator = react_navigation_1.createStackNavigator({
    Profile: index_6.default,
    Settings: { screen: index_7.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({
                title: "Ajustes"
            });
        }
    },
});
// ----------------------------------------- CONTENT TABS
var ContentTabs = react_navigation_1.createBottomTabNavigator({
    Noticias: { screen: NewsNavigator },
    Eventos: { screen: EventNavigator },
    Perfil: { screen: ProfileNavigator }
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
        });
    },
    tabBarOptions: { activeTintColor: '#C77139', inactiveTintColor: 'gray' },
});
// ----------------------------------------- DRAWER STACK
var WIDTH = react_native_1.Dimensions.get('window').width;
var DrawerScreens = react_navigation_1.createStackNavigator({
    Privacidad: { screen: index_5.default },
    Contacto: { screen: index_2.default },
    Nosotros: { screen: index_1.default }
}, {
    defaultNavigationOptions: function (_a) {
        var navigation = _a.navigation;
        var routeName = navigation.state.routeName;
        return {
            title: routeName,
            headerTransparent: true,
            animationEnabled: true,
            headerLeft: react_1.default.createElement(vector_icons_1.EvilIcons, { style: { marginLeft: 15 }, name: 'close', color: "gray", size: 32, onPress: function () { return navigation.navigate('Content'); } }),
            headerBackground: react_1.default.createElement(expo_1.BlurView, { tint: "light", intensity: 100, style: react_native_1.StyleSheet.absoluteFill }),
            headerTitleStyle: { fontWeight: 'bold' }
        };
    }
});
var Drawer = react_navigation_1.createDrawerNavigator({
    Content: { screen: ContentTabs },
    DrawerScreens: DrawerScreens,
}, {
    drawerPosition: 'left',
    drawerWidth: WIDTH * 0.63,
    contentComponent: function (_a) {
        var navigation = _a.navigation;
        return react_1.default.createElement(index_9.default, { navigation: navigation });
    },
    initialRouteName: 'Content'
});
// ----------------------------------------- BASE NAVIGATOR
var Routes = react_navigation_1.createSwitchNavigator({
    Content: { screen: Drawer },
});
// ----------------------------------------- MODALS NAVIGATOR
var RootNavigation = react_navigation_1.createStackNavigator({
    Routes: { screen: Routes },
    SignUp: { screen: index_8.default }
}, { mode: 'modal', headerMode: 'none' });
exports.default = react_navigation_1.createAppContainer(RootNavigation);
