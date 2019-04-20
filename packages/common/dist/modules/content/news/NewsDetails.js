"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    detailsView: { width: '100%', marginTop: 10, marginHorizontal: 20, paddingHorizontal: 20 },
    detailsImage: { width: '100%', height: 254 },
    detailsHeader: { width: '100%', marginTop: 10 },
    detailsTitle: { fontSize: 22, fontWeight: '800' },
    detailsSubtitle: { fontSize: 12, fontWeight: '800', color: '#555555' },
    detailsBody: { fontSize: 16, fontWeight: 'normal', textAlign: 'justify' },
});
var NewsDetail = function (_a) {
    var match = _a.match, navigation = _a.navigation;
    var id = match ? match.params.news : navigation.getParam('id');
    if (!id)
        return react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, null, "Los sentimos pero no encontramos la noticia que quer\u00EDas..."));
    var newsDetails = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject([" \n        query NewsDetails { oneNews (id: ", " ) { id title subtitle body imageURL } }"], [" \n        query NewsDetails { oneNews (id: ", " ) { id title subtitle body imageURL } }"])), id);
    return (react_1.default.createElement(react_native_1.ScrollView, { style: react_native_1.StyleSheet.absoluteFill },
        react_1.default.createElement(react_apollo_1.Query, { query: newsDetails }, function (_a) {
            var loading = _a.loading, data = _a.data;
            if (loading)
                return react_1.default.createElement(react_native_1.Text, null, "Loading");
            if (!loading && data === undefined)
                return react_1.default.createElement(react_native_1.Text, null, "Error en la petici\u00F3n");
            var oneNews = data.oneNews;
            return (react_1.default.createElement(react_native_1.View, { style: { alignItems: 'center' } },
                react_1.default.createElement(react_native_1.Image, { style: styles.detailsImage, source: { uri: oneNews.imageURL } }),
                react_1.default.createElement(react_native_1.View, { style: styles.detailsView },
                    react_1.default.createElement(react_native_1.View, { style: styles.detailsHeader },
                        react_1.default.createElement(react_native_1.Text, { style: styles.detailsTitle }, oneNews.title),
                        oneNews.subtitle ?
                            (react_1.default.createElement(react_native_1.View, { style: { marginTop: 10 } },
                                react_1.default.createElement(react_native_1.Text, { style: styles.detailsSubtitle }, oneNews.subtitle.toUpperCase())))
                            : react_1.default.createElement(react_native_1.View, null)),
                    react_1.default.createElement(react_native_1.View, { style: { marginTop: 35, marginBottom: 50 } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.detailsBody }, oneNews.body)))));
        })));
};
exports.default = NewsDetail;
var templateObject_1;
