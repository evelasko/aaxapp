"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_qrcode_svg_1 = __importDefault(require("react-native-qrcode-svg"));
var WIDTH = react_native_1.Dimensions.get('window').width;
var Profile = function () {
    return (react_1.default.createElement(react_native_1.View, { style: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { padding: 10 }) },
        react_1.default.createElement(react_native_1.View, { style: { marginTop: 200, marginBottom: 100 } },
            react_1.default.createElement(react_native_1.Text, null, "Profile...")),
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_qrcode_svg_1.default, { value: "http://awesome.link.qr", size: WIDTH - 25 }))));
};
exports.default = Profile;
