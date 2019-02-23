"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    alertCard: {
        flexDirection: 'column',
        height: 131,
        width: 132,
        borderLeftColor: 'rgba(255,255,255,0.3)',
        borderLeftWidth: 1,
        overflow: 'hidden'
    },
    alertCardTitle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 14,
        margin: 10
    },
    alertCardText: {
        color: "white",
        fontWeight: 'normal',
        fontSize: 12,
        padding: 10
    },
});
exports.AlertCard = mobx_react_lite_1.observer(function (_a) {
    var title = _a.title, time = _a.time;
    return (React.createElement(react_native_1.TouchableHighlight, { onPress: function () { return console.log('You pressed an alert '); } },
        React.createElement(react_native_1.View, { style: styles.alertCard },
            React.createElement(react_native_1.Text, { style: styles.alertCardTitle }, title),
            React.createElement(react_native_1.Text, { style: styles.alertCardText }, time))));
});
