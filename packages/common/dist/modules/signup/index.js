"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SignUpController_1 = __importDefault(require("./components/SignUpController"));
var SignUpView_1 = __importDefault(require("./components/SignUpView"));
var SignUp = function (_a) {
    var navigation = _a.navigation;
    return (react_1.default.createElement(SignUpController_1.default, null, function (_a) {
        var submit = _a.submit;
        return react_1.default.createElement(SignUpView_1.default, { onFinish: function () { navigation.navigate('SignUpMessage'); }, submit: submit });
    }));
};
exports.default = SignUp;
