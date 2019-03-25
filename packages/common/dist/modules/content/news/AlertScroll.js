"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var index_1 = __importDefault(require("../../../ui/shared/LGradient/index"));
var styles = react_native_1.StyleSheet.create({
    alertView: { backgroundColor: "#C77139" },
    alertScroll: { height: 132, marginBottom: 5 },
    shadowH: { height: 15 },
    alertHeader: {
        color: "white", fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1,
        marginBottom: 10, marginLeft: 20
    },
    alertCard: {
        flexDirection: 'column',
        height: 131,
        width: 140,
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
    }
});
exports.AlertScroll = function (_a) {
    var alerts = _a.alerts, pushDetails = _a.pushDetails;
    if (!alerts.length) {
        return react_1.default.createElement(react_native_1.View, { style: { display: 'none' } });
    }
    return (react_1.default.createElement(react_native_1.View, { style: styles.alertView },
        react_1.default.createElement(index_1.default, { style: styles.shadowH, colors: ['rgba(35,35,35,0.2)', 'rgba(35,35,35,0)'] }),
        react_1.default.createElement(react_native_1.Text, { style: styles.alertHeader }, "ALERTAS"),
        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true, style: styles.alertScroll }, alerts.map(function (a) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: a.id, onPress: function () { pushDetails(a.id, a.title); } },
            react_1.default.createElement(react_native_1.View, { style: styles.alertCard },
                react_1.default.createElement(react_native_1.Text, { style: styles.alertCardTitle }, a.title)))); })),
        react_1.default.createElement(index_1.default, { style: styles.shadowH, colors: ['rgba(35,35,35,0)', 'rgba(35,35,35,0.2)'] })));
};
