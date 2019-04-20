"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var expo_1 = require("expo");
var native_1 = require("mobx-react/native");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Styles_1 = require("../../ui/shared/Styles");
var styles = react_native_1.StyleSheet.create({
    listHeaderContainer: {
        margin: 5, marginTop: 25
    },
    listItemContainer: {
        margin: 5
    },
    headerTitleContainer: { borderBottomWidth: react_native_1.StyleSheet.hairlineWidth, borderBottomColor: Styles_1.Colors.primary, marginTop: 25, marginBottom: 5, paddingBottom: 5 },
    headerTitleText: { fontSize: 10, fontWeight: '800', letterSpacing: 2 },
    itemTitleText: { fontSize: 18 },
    itemContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 },
    switchStyle: {}
});
var SettingsHeader = function (_a) {
    var title = _a.title;
    return (react_1.default.createElement(react_native_1.View, { style: styles.headerTitleContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.headerTitleText }, title || '')));
};
var SettingsItem = function (_a) {
    var title = _a.title, icon = _a.icon, whenSwitch = _a.whenSwitch;
    return (react_1.default.createElement(react_native_1.View, { style: styles.itemContainer },
        icon,
        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.Text, { style: styles.itemTitleText }, title || '')),
        react_1.default.createElement(react_native_1.Switch, { style: styles.switchStyle, value: true, onValueChange: function (e) { if (whenSwitch)
                whenSwitch(e); } })));
};
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            nod_News: false, noe_News: false,
            nod_Alert: false, noe_Alert: false,
            nod_Call: false, noe_Call: false,
            nod_Event: false, noe_Event: false
        };
        return _this;
    }
    Settings.prototype.render = function () {
        var _a = this.props, navigation = _a.navigation, appStore = _a.appStore;
        return (react_1.default.createElement(react_native_1.View, { style: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { padding: 10, marginTop: expo_1.Constants.statusBarHeight }) },
            react_1.default.createElement(react_native_1.ScrollView, { style: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { paddingHorizontal: 20 }) },
                react_1.default.createElement(SettingsHeader, { title: "NOTICIAS" }),
                react_1.default.createElement(SettingsItem, { title: "Notificar en dispositivo", whenSwitch: function (e) { console.log(JSON.stringify(e)); } }),
                react_1.default.createElement(SettingsItem, { title: "Notificar via email", whenSwitch: function (e) { console.log(JSON.stringify(e)); } }),
                react_1.default.createElement(SettingsHeader, { title: "ALERTAS" }),
                react_1.default.createElement(SettingsItem, { title: "Notificar en dispositivo", whenSwitch: function (e) { console.log(JSON.stringify(e)); } }),
                react_1.default.createElement(SettingsItem, { title: "Notificar via email", whenSwitch: function (e) { console.log(JSON.stringify(e)); } }),
                react_1.default.createElement(SettingsHeader, { title: "CONVOCATORIAS" }),
                react_1.default.createElement(SettingsItem, { title: "Notificar en dispositivo", whenSwitch: function (e) { console.log(JSON.stringify(e)); } }),
                react_1.default.createElement(SettingsItem, { title: "Notificar via email", whenSwitch: function (e) { console.log(JSON.stringify(e)); } }),
                react_1.default.createElement(SettingsHeader, { title: "EVENTOS" }),
                react_1.default.createElement(SettingsItem, { title: "Notificar en dispositivo", whenSwitch: function (e) { console.log(JSON.stringify(e)); } }),
                react_1.default.createElement(SettingsItem, { title: "Notificar via email", whenSwitch: function (e) { console.log(JSON.stringify(e)); } }))));
    };
    Settings = __decorate([
        native_1.inject('appStore')
    ], Settings);
    return Settings;
}(react_1.default.Component));
exports.default = Settings;
