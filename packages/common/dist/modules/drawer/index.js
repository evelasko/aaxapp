"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_navigation_1 = require("react-navigation");
var About_1 = __importDefault(require("../content/about/About"));
var Policy_1 = __importDefault(require("../content/policy/Policy"));
var Support_1 = __importDefault(require("../content/support/Support"));
// ----------------------------------------- DRAWER STACK
var WIDTH = react_native_1.Dimensions.get('window').width;
var Drawer = react_navigation_1.createDrawerNavigator({
    Nosotros: { screen: About_1.default },
    Soporte: { screen: Support_1.default },
    Privacidad: { screen: Policy_1.default }
}, {
    drawerPosition: 'left',
    drawerWidth: WIDTH * 0.83,
    // contentComponent: ({navigation}:DrawerItemsProps) => <DrawerMenu navigation={navigation}/> , 
    initialRouteName: 'About'
});
exports.MenuNavigator = react_navigation_1.createAppContainer(Drawer);
