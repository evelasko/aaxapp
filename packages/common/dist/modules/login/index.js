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
var native_1 = require("mobx-react/native");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var store_1 = __importDefault(require("../../store"));
var LoginConnector_1 = require("./components/LoginConnector");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.componentDidMount = function () {
        if (store_1.default.per) {
            this.props.navigation.navigate('Content');
        }
    };
    Login.prototype.render = function () {
        var navigation = this.props.navigation;
        return (react_1.default.createElement(LoginConnector_1.LoginConnector, { loginSuccess: function () { navigation.navigate('Content'); }, handleForgot: function () { react_native_1.Linking.openURL('https://admin.alicialonso.org/forgot'); }, handleSignUp: function () { react_native_1.Linking.openURL('https://admin.alicialonso.org/register'); }, handleGuest: function () { navigation.navigate('Content'); } }));
    };
    Login = __decorate([
        native_1.inject('appStore')
    ], Login);
    return Login;
}(react_1.default.Component));
exports.default = Login;
