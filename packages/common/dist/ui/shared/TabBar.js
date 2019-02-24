"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var EventsIcon_1 = __importDefault(require("./icons/EventsIcon"));
var NewsIcon_1 = __importDefault(require("./icons/NewsIcon"));
var styles = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0, left: 0,
        height: 83, width: '100%',
        backgroundColor: "#2E2E2E",
        padding: 13,
        flexDirection: 'row', justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    iconContainer: {
        width: 40,
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 20, marginRight: 20
    },
    iconText: {
        fontSize: 10,
        color: "#BDBDBD",
        marginTop: 5
    }
});
exports.TabBar = function (_a) {
    var onEventsPress = _a.onEventsPress, onNewsPress = _a.onNewsPress;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.iconContainer, onPress: onNewsPress },
            react_1.default.createElement(NewsIcon_1.default, null),
            react_1.default.createElement(react_native_1.Text, { style: styles.iconText }, "Noticias")),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.iconContainer, onPress: onEventsPress },
            react_1.default.createElement(EventsIcon_1.default, null),
            react_1.default.createElement(react_native_1.Text, { style: styles.iconText }, "Eventos"))));
};
