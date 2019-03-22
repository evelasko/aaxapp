"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var expo_1 = require("expo");
var react_1 = __importDefault(require("react"));
var SignUp_1 = __importDefault(require("./SignUp"));
var SignUp = function (_a) {
    var navigation = _a.navigation;
    return react_1.default.createElement(SignUp_1.default, { navToProfile: function () { navigation.navigate('Profile'); }, headerClear: expo_1.Constants.statusBarHeight + 10 });
};
exports.default = SignUp;
