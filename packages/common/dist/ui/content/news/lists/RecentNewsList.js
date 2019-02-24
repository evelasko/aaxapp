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
        fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        marginBottom: 20
    },
});
exports.RecentNewsList = function (_a) {
    var recents = _a.recents;
    return (React.createElement(react_native_1.View, { style: styles.recentNewsListView },
        React.createElement(react_native_1.Text, { style: styles.recentHeader }, "recientes"),
        React.createElement(react_native_1.FlatList, { data: recents, keyExtractor: function (item) { return item.id; }, renderItem: function (_a) {
                var item = _a.item, separators = _a.separators;
                return (React.createElement(react_native_1.TouchableHighlight, { style: { height: 132 }, onPress: function () { return console.log('You pressed on: ', item.title); }, onShowUnderlay: separators.highlight, onHideUnderlay: separators.unhighlight },
                    React.createElement(react_native_1.View, { style: styles.recentNewsItem },
                        React.createElement(react_native_1.Image, { style: styles.recentNewsItemImage, source: { uri: item.imageURL || 'default.jpg' } }),
                        React.createElement(react_native_1.View, { style: styles.recentNewsItemDataView },
                            React.createElement(react_native_1.Text, { style: styles.recentNewsItemTitle }, item.title),
                            React.createElement(react_native_1.Text, { style: styles.recentNewsItemTime }, item.expiration)))));
            } })));
};
