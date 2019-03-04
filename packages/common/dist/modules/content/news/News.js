"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var AlertScroll_1 = require("./AlertScroll");
var CallScroll_1 = require("./CallScroll");
var FeaturedNewsCard_1 = require("./FeaturedNewsCard");
var NewsList_1 = __importDefault(require("./NewsList"));
var RecentNewsList_1 = require("./RecentNewsList");
var newsQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["query AllNewsQuery { allNews { id title subtitle body imageURL expiration category featured }}"], ["query AllNewsQuery { allNews { id title subtitle body imageURL expiration category featured }}"])));
var styles = react_native_1.StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1 }
});
var News = /** @class */ (function (_super) {
    __extends(News, _super);
    function News() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pushDetails = function (id, title) {
            if (_this.props.navigation) {
                _this.props.navigation.push('NewsDetails', { id: id, title: title });
            }
            else if (_this.props.history) {
                _this.props.history.push("/news/" + id);
            }
        };
        return _this;
    }
    News.prototype.render = function () {
        var _this = this;
        var history = this.props.history;
        return (react_1.default.createElement(react_apollo_1.Query, { query: newsQuery }, function (_a) {
            var loading = _a.loading, data = _a.data;
            if (loading) {
                return react_1.default.createElement(react_native_1.Text, null, "Loading");
            }
            if (!data.allNews.length)
                return react_1.default.createElement(react_native_1.Text, null, "No hay noticias que mostrar...");
            var allNews = data.allNews;
            var alerts = allNews.filter(function (n) { return n.category === 'ALERT'; });
            var calls = allNews.filter(function (n) { return n.category === 'CALL'; });
            var featuredNews = allNews.filter(function (n) { return n.featured && n.category === 'NEWS'; })[0];
            var allNewses = allNews.filter(function (n) { return featuredNews ?
                n.category === 'NEWS' && n.id != featuredNews.id : n.category === 'NEWS'; });
            var recentsCount = allNewses.length > 3 ? 3 : allNewses.length;
            var recents = allNewses.slice(0, recentsCount);
            var newses = allNewses.slice(recentsCount, allNewses.length);
            return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.contentScroll },
                react_1.default.createElement(FeaturedNewsCard_1.FeaturedNewsCard, { featuredNews: featuredNews, pushDetails: _this.pushDetails }),
                react_1.default.createElement(AlertScroll_1.AlertScroll, { alerts: alerts, pushDetails: _this.pushDetails }),
                react_1.default.createElement(RecentNewsList_1.RecentNewsList, { recents: recents, pushDetails: _this.pushDetails }),
                react_1.default.createElement(CallScroll_1.CallScroll, { calls: calls, pushDetails: _this.pushDetails }),
                react_1.default.createElement(NewsList_1.default, { newses: newses, pushDetails: _this.pushDetails })));
        }));
    };
    News.navigationOptions = {
        title: 'Noticias',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    return News;
}(react_1.default.Component));
exports.default = News;
var templateObject_1;
