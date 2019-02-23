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
        margin: 20
    },
    callCardExpiration: {
        color: "white",
        fontWeight: 'normal',
        textAlign: 'right',
        fontSize: 12,
        padding: 8
    },
});
exports.CallCard = function () {
    return (React.createElement(react_native_1.TouchableHighlight, { onPress: function () { return console.log('You pressed a call'); } },
        React.createElement(react_native_1.View, { style: styles.callCard },
            React.createElement(react_native_1.Text, { style: styles.callCardTitle }, "T\u00EDtulo de la Convocatoria"),
            React.createElement(react_native_1.Text, { style: styles.callCardExpiration }, "vence en 4 d\u00EDas"))));
};
