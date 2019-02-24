"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var RootStore_1 = require("../../../stores/RootStore");
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
exports.NewsScroll = mobx_react_lite_1.observer(function (_a) {
    var data = _a.data;
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    if (data.loading)
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, null, "Loading")));
    else {
        rootStore.newsStore.initNewsStore(data.allNews);
    }
    return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.contentScroll },
        react_1.default.createElement(FeaturedNewsCard_1.FeaturedNewsCard, { featuredNews: rootStore.newsStore.featuredNews }),
        react_1.default.createElement(AlertScroll_1.AlertScroll, { alerts: rootStore.newsStore.alerts }),
        react_1.default.createElement(RecentNewsList_1.RecentNewsList, { recents: rootStore.newsStore.recents }),
        react_1.default.createElement(CallScroll_1.CallScroll, { calls: rootStore.newsStore.calls }),
        react_1.default.createElement(NewsList_1.NewsList, { newses: rootStore.newsStore.newses })));
});
exports.default = react_apollo_1.graphql(graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject([" query AllNewsQuery { allNews { id title subtitle body imageURL expiration category featured } } "], [" query AllNewsQuery { allNews { id title subtitle body imageURL expiration category featured } } "]))))(exports.NewsScroll);
var templateObject_1;
