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
var newsQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["query AllNewsQuery { allNews \n{ id title subtitle body imageURL expiration category featured createdAt } }"], ["query AllNewsQuery { allNews \n{ id title subtitle body imageURL expiration category featured createdAt } }"])));
var styles = react_native_1.StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1 },
    activity: { flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center' }
});
var NewsComponent = /** @class */ (function (_super) {
    __extends(NewsComponent, _super);
    function NewsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewsComponent.prototype.render = function () {
        var pushDetails = this.props.pushDetails;
        return (react_1.default.createElement(react_apollo_1.Query, { query: newsQuery }, function (_a) {
            var loading = _a.loading, data = _a.data, error = _a.error;
            if (loading) {
                return (react_1.default.createElement(react_native_1.View, { style: styles.activity },
                    react_1.default.createElement(react_native_1.ActivityIndicator, { size: "small", color: "#C77139" })));
            }
            if (error) {
                console.log('ERROR: ', error);
                return react_1.default.createElement(react_native_1.Text, null, "Ha ocurrido un error");
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
                react_1.default.createElement(FeaturedNewsCard_1.FeaturedNewsCard, { featuredNews: featuredNews, pushDetails: pushDetails }),
                react_1.default.createElement(AlertScroll_1.AlertScroll, { alerts: alerts, pushDetails: pushDetails }),
                react_1.default.createElement(RecentNewsList_1.RecentNewsList, { recents: recents, pushDetails: pushDetails }),
                react_1.default.createElement(CallScroll_1.CallScroll, { calls: calls, pushDetails: pushDetails }),
                react_1.default.createElement(NewsList_1.default, { newses: newses, pushDetails: pushDetails })));
        }));
    };
    return NewsComponent;
}(react_1.default.Component));
exports.default = NewsComponent;
var templateObject_1;
