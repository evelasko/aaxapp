"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
var AlertCard_1 = require("../cards/AlertCard");
var styles = react_native_1.StyleSheet.create({
    alertView: {
        backgroundColor: "#C77139"
    },
    alertScroll: {
        height: 132, marginBottom: 5
    },
    alertHeader: {
        color: "white", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        marginBottom: 10, marginLeft: 20
    },
    shadowH: { height: 15 }
});
exports.AlertScroll = function (_a) {
    var alerts = _a.alerts;
    if (!alerts) {
        return react_1.default.createElement(react_native_1.View, { style: { display: 'none' } });
    }
    return (react_1.default.createElement(react_native_1.View, { style: styles.alertView },
        react_1.default.createElement(react_native_linear_gradient_1.default, { style: styles.shadowH, colors: ['rgba(35,35,35,0.2)', 'rgba(35,35,35,0)'] }),
        react_1.default.createElement(react_native_1.Text, { style: styles.alertHeader }, "alertas"),
        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true, style: styles.alertScroll }, alerts.map(function (a) { return react_1.default.createElement(AlertCard_1.AlertCard, { key: a.id, title: a.title, body: a.body }); })),
        react_1.default.createElement(react_native_linear_gradient_1.default, { style: styles.shadowH, colors: ['rgba(35,35,35,0)', 'rgba(35,35,35,0.2)'] })));
};
