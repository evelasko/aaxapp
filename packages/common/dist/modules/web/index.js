"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var index_1 = __importDefault(require("../../ui/icons/logo/index"));
var WebEntry = function () {
    return (react_1.default.createElement(react_native_1.View, { style: [react_native_1.StyleSheet.absoluteFillObject, { justifyContent: "center", alignItems: "center", backgroundColor: "#222222" }] },
        react_1.default.createElement(index_1.default, { width: 400, height: 400 })));
};
exports.default = WebEntry;
