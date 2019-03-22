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
var styles = react_native_1.StyleSheet.create({
    listHeaderContainer: {
        margin: 5, marginTop: 25
    },
    listItemContainer: {
        margin: 5
    },
    qrContainer: {
        alignSelf: 'center'
    },
    profileContainer: {
        justifyContent: 'space-around', flex: 1
    },
    nameContainer: { marginBottom: 30, marginTop: 5 },
    nameText: {
        fontSize: 20, fontWeight: '900', letterSpacing: 1, color: 'darkgrey', alignSelf: 'center'
    },
    avatarContainer: {
        flexDirection: 'row', justifyContent: 'space-around', marginTop: 30
    },
    avatarLines: {
        height: 16, borderBottomWidth: react_native_1.StyleSheet.hairlineWidth, borderBottomColor: 'grey'
    },
    buttonsContainer: {
        marginBottom: 10
    }
});
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Settings.prototype.render = function () {
        var _a = this.props, navigation = _a.navigation, appStore = _a.appStore;
        return (react_1.default.createElement(react_native_1.View, { style: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { padding: 10, marginTop: expo_1.Constants.statusBarHeight }) },
            react_1.default.createElement(react_native_1.Text, null, "Settings View")));
    };
    Settings = __decorate([
        native_1.inject('appStore')
    ], Settings);
    return Settings;
}(react_1.default.Component));
exports.default = Settings;
