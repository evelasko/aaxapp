"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
var RootStore_1 = require("../../../../stores/RootStore");
var AlertCard_1 = require("../cards/AlertCard");
var styles = react_native_1.StyleSheet.create({
    alertView: {
        backgroundColor: "#C77139"
    },
    alertScroll: {
        height: 132,
        marginBottom: 5
    },
    alertHeader: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
        marginLeft: 20,
        textTransform: 'uppercase'
    },
    shadowH: { height: 15 }
});
exports.AlertScroll = mobx_react_lite_1.observer(function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    if (!rootStore.newsStore.alerts.length) {
        return react_1.default.createElement(react_native_1.View, { style: { display: 'none' } });
    }
    return (react_1.default.createElement(react_native_1.View, { style: styles.alertView },
        react_1.default.createElement(react_native_linear_gradient_1.default, { style: styles.shadowH, colors: ['rgba(35,35,35,0.2)', 'rgba(35,35,35,0)'] }),
        react_1.default.createElement(react_native_1.Text, { style: styles.alertHeader }, "alertas"),
        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true, style: styles.alertScroll }, rootStore.newsStore.alerts.map(function (a) { return react_1.default.createElement(AlertCard_1.AlertCard, { key: a.id, title: a.title, body: a.body }); })),
        react_1.default.createElement(react_native_linear_gradient_1.default, { style: styles.shadowH, colors: ['rgba(35,35,35,0)', 'rgba(35,35,35,0.2)'] })));
});
