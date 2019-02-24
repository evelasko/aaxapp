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
var RootStore_1 = require("../stores/RootStore");
var NewsScroll_1 = require("../ui/content/news/NewsScroll");
var TabBar_1 = require("../ui/shared/TabBar");
var TopBar_1 = require("../ui/shared/TopBar");
var styles = react_native_1.StyleSheet.create({
    main: {
        flexDirection: 'column',
        flex: 1
    }
});
var Base = mobx_react_lite_1.observer(function (_a) {
    var data = _a.data;
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    if (data.loading)
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, null, "Loading")));
    else {
        var allNews = data.allNews;
        rootStore.newsStore.initNewsStore(allNews);
    }
    return (react_1.default.createElement(react_native_1.View, { style: styles.main },
        react_1.default.createElement(TopBar_1.TopBar, null),
        react_1.default.createElement(NewsScroll_1.NewsScroll, null),
        react_1.default.createElement(TabBar_1.TabBar, { onEventsPress: function () { }, onNewsPress: function () { } })));
});
exports.default = react_apollo_1.graphql(graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject([" query AllNewsQuery { allNews { id title subtitle body imageURL expiration category featured } } "], [" query AllNewsQuery { allNews { id title subtitle body imageURL expiration category featured } } "]))))(Base);
var templateObject_1;
