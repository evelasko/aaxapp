"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var Content = react_navigation_1.createBottomTabNavigator({
    News: NewsNavigator,
    Events: EventNavigator,
});
exports.default = react_navigation_1.createAppContainer(Content);
