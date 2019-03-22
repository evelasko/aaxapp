"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    featuredNewsCard: {
        flexDirection: 'column', marginBottom: 20,
    },
    featuredNewsCardHeader: {
        color: "#EB894A", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        margin: 20
    },
    featuredNewsCardImage: {
        width: '100%', height: 206
    },
    featuredNewsCardTitle: {
        color: "black", fontWeight: 'bold', fontSize: 20,
        margin: 20
    },
    featuredNewsCardSubtitle: {
        color: "black", fontWeight: 'bold', fontSize: 12, fontVariant: ['small-caps'],
        marginLeft: 20, marginRight: 20, marginBottom: 5, maxHeight: 60, overflow: 'hidden'
    },
    featuredNewsCardText: {
        color: "black", fontWeight: 'normal', fontSize: 12,
        marginLeft: 20, marginRight: 20, maxHeight: 60, overflow: 'hidden'
    }
});
exports.FeaturedNewsCard = function (_a) {
    var featuredNews = _a.featuredNews, pushDetails = _a.pushDetails;
    if (!featuredNews) {
        return react_1.default.createElement(react_native_1.View, { style: { display: 'none' } });
    }
    var id = featuredNews.id, imageURL = featuredNews.imageURL, title = featuredNews.title, subtitle = featuredNews.subtitle, body = featuredNews.body;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.featuredNewsCard, onPress: function () { pushDetails(id, title); } },
        react_1.default.createElement(react_native_1.Image, { style: styles.featuredNewsCardImage, source: { uri: imageURL || 'default.png' } }),
        react_1.default.createElement(react_native_1.Text, { style: styles.featuredNewsCardTitle }, title),
        subtitle ? react_1.default.createElement(react_native_1.Text, { style: styles.featuredNewsCardSubtitle }, subtitle) : react_1.default.createElement(react_native_1.View, null),
        react_1.default.createElement(react_native_1.Text, { style: styles.featuredNewsCardText }, body)));
};
