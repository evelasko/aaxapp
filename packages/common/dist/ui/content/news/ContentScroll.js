"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var FeaturedNewsCard_1 = require("./cards/FeaturedNewsCard");
var AlertScroll_1 = require("./lists/AlertScroll");
var CallScroll_1 = require("./lists/CallScroll");
var NewsList_1 = require("./lists/NewsList");
var RecentNewsList_1 = require("./lists/RecentNewsList");
var styles = react_native_1.StyleSheet.create({
    contentScroll: {
        flexDirection: 'column',
        height: '100%',
        flex: 1
    }
});
exports.ContentScroll = function () {
    return (React.createElement(react_native_1.ScrollView, { style: styles.contentScroll },
        React.createElement(FeaturedNewsCard_1.FeaturedNewsCard, null),
        React.createElement(AlertScroll_1.AlertScroll, null),
        React.createElement(RecentNewsList_1.RecentNewsList, null),
        React.createElement(CallScroll_1.CallScroll, null),
        React.createElement(NewsList_1.NewsList, null)));
};
