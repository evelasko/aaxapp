"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SignUpController_1 = __importDefault(require("./components/SignUpController"));
var SignUpView_1 = __importDefault(require("./components/SignUpView"));
var Register = function (_a) {
    var history = _a.history;
    return (react_1.default.createElement(SignUpController_1.default, null, function (_a) {
        var submit = _a.submit;
        return react_1.default.createElement(SignUpView_1.default, { onFinish: function () { history.push('/SignUpMessage'); }, submit: submit });
    }));
};
exports.default = Register;
