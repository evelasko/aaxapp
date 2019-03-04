"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_navigation_1 = require("react-navigation");
var About_1 = __importDefault(require("../content/about/About"));
var WIDTH = react_native_1.Dimensions.get('window').width;
var DrawerConfig = { drawerWidth: WIDTH * 0.83 };
var DrawerNavigator = react_navigation_1.createDrawerNavigator({
    About: { screen: About_1.default }
}, DrawerConfig);
