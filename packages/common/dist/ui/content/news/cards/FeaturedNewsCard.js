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
var styles = react_native_1.StyleSheet.create({
    featuredNewsCard: {
        flexDirection: 'column',
        marginBottom: 20,
    },
    featuredNewsCardHeader: {
        color: "#EB894A",
        fontWeight: 'bold', fontSize: 24,
        margin: 20,
        textTransform: 'uppercase'
    },
    featuredNewsCardImage: {
        width: '100%', height: 206
    },
    featuredNewsCardTitle: {
        color: "black",
        fontWeight: 'bold', fontSize: 20,
        margin: 20
    },
    featuredNewsCardSubtitle: {
        color: "black",
        fontWeight: 'bold', fontSize: 12,
        marginLeft: 20, marginRight: 20,
        maxHeight: 60,
        overflow: 'hidden',
        fontVariant: ['small-caps'],
        marginBottom: 5
    },
    featuredNewsCardText: {
        color: "black",
        fontWeight: 'normal', fontSize: 12,
        marginLeft: 20, marginRight: 20,
        maxHeight: 60,
        overflow: 'hidden'
    }
});
exports.FeaturedNewsCard = function (_a) {
    var featuredNews = _a.featuredNews;
    if (!featuredNews) {
        return React.createElement(react_native_1.View, { style: { display: 'none' } });
    }
    var imageURL = featuredNews.imageURL, title = featuredNews.title, subtitle = featuredNews.subtitle, body = featuredNews.body;
    return (React.createElement(react_native_1.View, { style: styles.featuredNewsCard },
        React.createElement(react_native_1.Text, { style: styles.featuredNewsCardHeader }, "destacado"),
        React.createElement(react_native_1.Image, { style: styles.featuredNewsCardImage, source: { uri: imageURL || 'default.png' } }),
        React.createElement(react_native_1.Text, { style: styles.featuredNewsCardTitle }, title),
        subtitle && React.createElement(react_native_1.Text, { style: styles.featuredNewsCardSubtitle }, subtitle),
        React.createElement(react_native_1.Text, { style: styles.featuredNewsCardText }, body)));
};
