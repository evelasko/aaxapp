"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ForgotPwdConnector_1 = __importDefault(require("./components/ForgotPwdConnector"));
var Forgot = function (_a) {
    var history = _a.history;
    return (react_1.default.createElement(ForgotPwdConnector_1.default, { onFinish: function () { history.push('/content'); } }));
};
exports.default = Forgot;
