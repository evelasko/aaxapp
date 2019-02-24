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
    callCard: {
        flexDirection: 'column',
        height: 132,
        width: 132,
        borderLeftColor: 'rgba(255,255,255,0.3)',
        borderLeftWidth: 1,
        overflow: 'hidden'
    },
    callCardTitle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 14,
        margin: 20,
        height: 100,
        overflow: 'hidden'
    },
    callCardExpiration: {
        color: "white",
        fontWeight: 'normal',
        textAlign: 'right',
        fontSize: 12,
        padding: 8
    },
});
exports.CallCard = function (_a) {
    var title = _a.title, due = _a.due;
    return (React.createElement(react_native_1.TouchableHighlight, { onPress: function () { return console.log('You pressed a call'); } },
        React.createElement(react_native_1.View, { style: styles.callCard },
            React.createElement(react_native_1.Text, { style: styles.callCardTitle }, title),
            React.createElement(react_native_1.Text, { style: styles.callCardExpiration }, due))));
};
