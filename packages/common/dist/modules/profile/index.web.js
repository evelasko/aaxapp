"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var ProfileView_1 = __importDefault(require("./components/ProfileView"));
var Profile = function () {
    return (react_1.default.createElement(react_native_1.View, { style: react_native_1.StyleSheet.absoluteFill },
        react_1.default.createElement(ProfileView_1.default, { logOutUser: function () { return {}; }, userQRID: '34edhwelfhwoechwjlb' })));
};
exports.default = Profile;
