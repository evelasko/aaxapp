"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    detailsView: { margin: 15 },
    detailsImage: { width: '100%', height: 254 },
    detailsHeader: {},
    detailsTitle: { fontSize: 18, fontWeight: '500', marginTop: 10 },
    detailsSubtitle: { fontSize: 14, fontWeight: '100', color: '#555555' },
    detailsBody: { fontSize: 12, fontWeight: 'normal', textAlign: 'justify' },
});
var NewsDetail = function (_a) {
    var newsItem = _a.newsItem;
    return (react_1.default.createElement(react_native_1.View, { style: styles.detailsView },
        react_1.default.createElement(react_native_1.Image, { style: styles.detailsImage, source: { uri: newsItem.imageURL || 'default.png' } }),
        react_1.default.createElement(react_native_1.View, { style: styles.detailsHeader },
            react_1.default.createElement(react_native_1.Text, { style: styles.detailsTitle }, newsItem.title),
            react_1.default.createElement(react_native_1.Text, { style: styles.detailsSubtitle }, newsItem.subtitle)),
        react_1.default.createElement(react_native_1.Text, { style: styles.detailsBody }, newsItem.body)));
};
exports.default = NewsDetail;
