"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    topBar: {
        height: 91,
        backgroundColor: "#2E2E2E",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 13
    },
    topBarTitle: {
        color: "#FFFFFF"
    },
    topBarBtn: {
        backgroundColor: "#EB894A"
    }
});
exports.TopBar = function () {
    return (React.createElement(react_native_1.View, { style: styles.topBar },
        React.createElement(react_native_1.Button, { title: "Menu", onPress: function () { console.log('Menu pressed'); } }),
        React.createElement(react_native_1.Text, { style: styles.topBarTitle }, "Hi there!"),
        React.createElement(react_native_1.Button, { title: "User", onPress: function () { console.log('Menu pressed'); } })));
};
