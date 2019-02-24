"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
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
exports.NewsScroll = function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    var featuredNews = rootStore.newsStore.featured.filter(function (n) { return n.category === 'NEWS'; })[0];
    var newsLength = rootStore.newsStore.newses.length;
    var recentsCount = newsLength > 3 ? 3 : newsLength;
    var sortedNews = rootStore.newsStore.newses.slice().sort(function (a, b) {
        var dA = new Date(a.expiration);
        var dB = new Date(b.expiration);
        return dA - dB;
    });
    var recents = sortedNews.slice(0, recentsCount);
    var newses = sortedNews.slice(recentsCount, newsLength);
    return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.contentScroll },
        react_1.default.createElement(FeaturedNewsCard_1.FeaturedNewsCard, { featuredNews: featuredNews }),
        react_1.default.createElement(AlertScroll_1.AlertScroll, null),
        react_1.default.createElement(RecentNewsList_1.RecentNewsList, { recents: recents }),
        react_1.default.createElement(CallScroll_1.CallScroll, null),
        react_1.default.createElement(NewsList_1.NewsList, { newses: newses })));
};
