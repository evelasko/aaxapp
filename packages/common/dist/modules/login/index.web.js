"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LoginConnector_1 = require("./components/LoginConnector");
var Login = function (_a) {
    var history = _a.history;
    return (react_1.default.createElement(LoginConnector_1.LoginConnector, { loginSuccess: function () { history.push('/content'); }, handleForgot: function () { history.push('/forgot'); }, handleSignUp: function () { history.push('/signup'); }, handleGuest: function () { history.push('/news'); } }));
};
exports.default = Login;
