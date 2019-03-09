"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    recentNewsListView: {
        backgroundColor: "white",
        padding: 20
    },
    recentNewsItem: {
        height: 132, flexDirection: 'row'
    },
    recentNewsItemTitle: {
        fontSize: 20, fontWeight: 'bold',
        color: '#363636',
        height: 75,
        overflow: 'hidden'
    },
    recentNewsItemDataView: {
        flexDirection: 'column', flex: 1, marginLeft: 10
    },
    recentNewsItemImage: {
        width: 118, height: 96
    },
    recentNewsItemTime: {
        color: '#999999', fontSize: 10, textAlign: 'right'
    },
    recentHeader: {
        color: "#C77139",
        fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1,
        marginBottom: 20
    },
});
exports.RecentNewsList = function (_a) {
    var recents = _a.recents, pushDetails = _a.pushDetails;
    if (!recents.length) {
        return react_1.default.createElement(react_native_1.View, { style: { display: 'none' } });
    }
    return (react_1.default.createElement(react_native_1.View, { style: styles.recentNewsListView },
        react_1.default.createElement(react_native_1.Text, { style: styles.recentHeader }, "recientes"),
        react_1.default.createElement(react_native_1.FlatList, { data: recents, keyExtractor: function (item) { return item.id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: { height: 132 }, onPress: function () { pushDetails(item.id, item.title); } },
                    react_1.default.createElement(react_native_1.View, { style: styles.recentNewsItem },
                        react_1.default.createElement(react_native_1.Image, { style: styles.recentNewsItemImage, source: { uri: item.imageURL || 'default.jpg' } }),
                        react_1.default.createElement(react_native_1.View, { style: styles.recentNewsItemDataView },
                            react_1.default.createElement(react_native_1.Text, { style: styles.recentNewsItemTitle }, item.title),
                            react_1.default.createElement(react_native_1.Text, { style: styles.recentNewsItemTime }, moment_1.default(item.createdAt).fromNow())))));
            } })));
};
