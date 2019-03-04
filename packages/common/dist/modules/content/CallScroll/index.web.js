"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
var styles = react_native_1.StyleSheet.create({
    callView: { backgroundColor: "#363636" },
    callScroll: { height: 132, marginBottom: 5 },
    shadowH: { height: 15 },
    callHeader: {
        color: "white", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        marginBottom: 20, marginLeft: 20,
    },
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
    }
});
exports.CallScroll = function (_a) {
    var calls = _a.calls, history = _a.history;
    if (!calls.length) {
        return react_1.default.createElement(react_native_1.View, { style: { display: 'none' } });
    }
    return (react_1.default.createElement(react_native_1.View, { style: styles.callView },
        react_1.default.createElement(react_native_linear_gradient_1.default, { style: styles.shadowH, colors: ['rgba(15,15,15,0.3)', 'rgba(15,15,15,0)'] }),
        react_1.default.createElement(react_native_1.Text, { style: styles.callHeader }, "convocatorias"),
        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true, style: styles.callScroll }, calls.map(function (a) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: a.id, onPress: function () { history.push("/news/" + a.id); } },
            react_1.default.createElement(react_native_1.View, { style: styles.callCard },
                react_1.default.createElement(react_native_1.Text, { style: styles.callCardTitle }, a.title),
                react_1.default.createElement(react_native_1.Text, { style: styles.callCardExpiration }, moment_1.default().locale('es').to(a.expiration))))); })),
        react_1.default.createElement(react_native_linear_gradient_1.default, { style: styles.shadowH, colors: ['rgba(15,15,15,0)', 'rgba(15,15,15,0.3)'] })));
};
