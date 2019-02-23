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
var CallCard_1 = require("../content/CallCard");
var styles = react_native_1.StyleSheet.create({
    callView: {
        height: 206,
        backgroundColor: "#363636"
    },
    callScroll: {
        height: 132,
    },
    callHeader: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20,
        textTransform: 'uppercase'
    },
});
exports.CallScroll = function () {
    return (React.createElement(react_native_1.View, { style: styles.callView },
        React.createElement(react_native_1.Text, { style: styles.callHeader }, "convocatorias"),
        React.createElement(react_native_1.ScrollView, { horizontal: true, style: styles.callScroll },
            React.createElement(CallCard_1.CallCard, null),
            React.createElement(CallCard_1.CallCard, null),
            React.createElement(CallCard_1.CallCard, null),
            React.createElement(CallCard_1.CallCard, null),
            React.createElement(CallCard_1.CallCard, null),
            React.createElement(CallCard_1.CallCard, null))));
};
