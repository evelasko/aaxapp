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
var RootStore_1 = require("../../store/RootStore");
var AlertCard_1 = require("../content/AlertCard");
var styles = react_native_1.StyleSheet.create({
    alertView: {
        backgroundColor: "#C77139"
    },
    alertScroll: {
        height: 132,
        marginBottom: 20
    },
    alertHeader: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20,
        textTransform: 'uppercase'
    },
});
exports.AlertScroll = mobx_react_lite_1.observer(function () {
    var rootStore = React.useContext(RootStore_1.RootStoreContext);
    return (React.createElement(react_native_1.View, { style: styles.alertView },
        React.createElement(react_native_1.Text, { style: styles.alertHeader }, "alertas"),
        React.createElement(react_native_1.ScrollView, { horizontal: true, style: styles.alertScroll }, rootStore.newsStore.alerts.map(function (a) { return React.createElement(AlertCard_1.AlertCard, { key: a.id, title: a.title, time: a.text }); }))));
});
