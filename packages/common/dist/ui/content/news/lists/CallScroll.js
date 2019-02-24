"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var moment_1 = __importDefault(require("moment"));
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
var RootStore_1 = require("../../../../stores/RootStore");
var CallCard_1 = require("../cards/CallCard");
moment_1.default.locale('fr');
var styles = react_native_1.StyleSheet.create({
    callView: {
        // height: 206,
        backgroundColor: "#363636"
    },
    callScroll: {
        height: 132, marginBottom: 5
    },
    callHeader: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20, marginLeft: 20,
        textTransform: 'uppercase'
    },
    shadowH: { height: 15 }
});
exports.CallScroll = mobx_react_lite_1.observer(function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.callView },
        react_1.default.createElement(react_native_linear_gradient_1.default, { style: styles.shadowH, colors: ['rgba(15,15,15,0.3)', 'rgba(15,15,15,0)'] }),
        react_1.default.createElement(react_native_1.Text, { style: styles.callHeader }, "convocatorias"),
        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true, style: styles.callScroll }, rootStore.newsStore.calls.map(function (a) { return react_1.default.createElement(CallCard_1.CallCard, { key: a.id, title: a.title, due: moment_1.default().locale('es').to(a.expiration) }); })),
        react_1.default.createElement(react_native_linear_gradient_1.default, { style: styles.shadowH, colors: ['rgba(15,15,15,0)', 'rgba(15,15,15,0.3)'] })));
});
