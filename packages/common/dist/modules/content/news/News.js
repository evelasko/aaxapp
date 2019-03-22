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
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var AlertScroll_1 = require("./AlertScroll");
var CallScroll_1 = require("./CallScroll");
var FeaturedNewsCard_1 = require("./FeaturedNewsCard");
var NewsList_1 = __importDefault(require("./NewsList"));
var RecentNewsList_1 = require("./RecentNewsList");
var newsQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["query AllNewsQuery ( $per: String ) \n    { allNewsMobile ( per:$per ) \n        { id title subtitle body imageURL expiration category featured createdAt } \n    }\n"], ["query AllNewsQuery ( $per: String ) \n    { allNewsMobile ( per:$per ) \n        { id title subtitle body imageURL expiration category featured createdAt } \n    }\n"])));
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
        var _this = this;
        var _a = this.props, pushDetails = _a.pushDetails, _b = _a.per, per = _b === void 0 ? null : _b, _c = _a.headerHeight, headerHeight = _c === void 0 ? 0 : _c;
        console.log('FROM NEWS: ', per);
        return (react_1.default.createElement(react_apollo_1.Query, { query: newsQuery, variables: { per: per }, errorPolicy: "all" }, function (_a) {
            var loading = _a.loading, data = _a.data, error = _a.error, startPolling = _a.startPolling, stopPolling = _a.stopPolling, refetch = _a.refetch;
            if (loading) {
                console.log('Loading News...');
                return (react_1.default.createElement(react_native_1.View, { style: styles.activity },
                    react_1.default.createElement(react_native_1.ActivityIndicator, { size: "small", color: "#C77139" })));
            }
            if (error) {
                console.log('ERROR WHILE FETCHING NEWS: ', JSON.stringify(error));
                console.log('STRING: ', JSON.stringify(error.message));
                console.log('MORE INFO: ', JSON.stringify(error.extraInfo));
                return (react_1.default.createElement(react_native_1.View, { style: { marginTop: 150 } },
                    react_1.default.createElement(react_native_1.Text, null, "Ha ocurrido un error:"),
                    react_1.default.createElement(react_native_1.View, null, error.graphQLErrors.map(function (rr, i) { return (react_1.default.createElement(react_native_1.View, { key: i },
                        react_1.default.createElement(react_native_1.Text, null, JSON.stringify(rr)))); }))));
            }
            if (!data.allNewsMobile.length)
                return react_1.default.createElement(react_native_1.Text, null, "No hay noticias que mostrar...");
            if (_this.props.appState) {
                _this.props.appState.addEventListener('change', function (nextState) {
                    if (nextState === 'active') {
                        refetch();
                    }
                });
            }
            var allNewsMobile = data.allNewsMobile;
            var alerts = allNewsMobile.filter(function (n) { return n.category === 'ALERT'; });
            var calls = allNewsMobile.filter(function (n) { return n.category === 'CALL'; });
            var featuredNews = allNewsMobile.filter(function (n) { return n.featured && n.category === 'NEWS'; })[0];
            var allNewses = allNewsMobile.filter(function (n) { return featuredNews ?
                n.category === 'NEWS' && n.id != featuredNews.id : n.category === 'NEWS'; });
            var recentsCount = allNewses.length > 3 ? 3 : allNewses.length;
            var recents = allNewses.slice(0, recentsCount);
            var newses = allNewses.slice(recentsCount, allNewses.length);
            return (react_1.default.createElement(react_native_1.ScrollView, { style: __assign({}, styles.contentScroll, { marginTop: headerHeight || 0 }) },
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
