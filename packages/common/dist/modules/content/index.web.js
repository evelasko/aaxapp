"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var TabBar_1 = require("../../ui/shared/TabBar");
var TopBar_1 = require("../../ui/shared/TopBar");
var styles = react_native_1.StyleSheet.create({ main: { flexDirection: 'column', flex: 1 } });
var Content = function (_a) {
    var history = _a.history, path = _a.match.path;
    return (react_1.default.createElement(react_native_1.View, { style: styles.main },
        react_1.default.createElement(TopBar_1.TopBar, null),
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, null, "Content View")),
        react_1.default.createElement(TabBar_1.TabBar, { onEventsPress: function () { return history.push('/events'); }, onNewsPress: function () { return history.push('/news'); } })));
};
exports.default = Content;
