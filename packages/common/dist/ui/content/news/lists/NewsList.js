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
    newsListView: {
        backgroundColor: "white",
        padding: 20
    },
    newsItem: {
        height: 132,
        flexDirection: 'row'
    },
    newsItemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#363636',
        height: 45,
        overflow: 'hidden',
        marginBottom: 7
    },
    newsItemDataView: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10
    },
    newsItemImage: {
        width: 118,
        height: 96
    },
    newsItemText: {
        color: '#999999',
        fontSize: 12,
        height: 43,
        overflow: 'hidden'
    },
    newsHeader: {
        color: "#C77139",
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        marginBottom: 20
    },
});
exports.NewsList = function (_a) {
    var newses = _a.newses;
    if (!newses.length) {
        return React.createElement(react_native_1.View, { style: { display: 'none' } });
    }
    return (React.createElement(react_native_1.View, { style: styles.newsListView },
        React.createElement(react_native_1.Text, { style: styles.newsHeader }, "noticias"),
        React.createElement(react_native_1.FlatList, { data: newses, keyExtractor: function (item) { return item.id; }, renderItem: function (_a) {
                var item = _a.item, separators = _a.separators;
                return (React.createElement(react_native_1.TouchableHighlight, { style: { height: 132 }, onPress: function () { return console.log('You pressed on: ', item.title); }, onShowUnderlay: separators.highlight, onHideUnderlay: separators.unhighlight },
                    React.createElement(react_native_1.View, { style: styles.newsItem },
                        React.createElement(react_native_1.Image, { style: styles.newsItemImage, source: { uri: item.imageURL } }),
                        React.createElement(react_native_1.View, { style: styles.newsItemDataView },
                            React.createElement(react_native_1.Text, { style: styles.newsItemTitle }, item.title),
                            React.createElement(react_native_1.Text, { style: styles.newsItemText }, item.body)))));
            } })));
};
