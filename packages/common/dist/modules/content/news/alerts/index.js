"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    newsListView: {
        backgroundColor: "white",
        padding: 20
    },
    newsItem: {
        height: 132, flexDirection: 'row'
    },
    newsItemTitle: {
        fontSize: 20, fontWeight: 'bold', color: '#363636',
        height: 45, overflow: 'hidden', marginBottom: 7
    },
    newsItemDataView: {
        flexDirection: 'column', flex: 1, marginLeft: 10
    },
    newsItemImage: {
        width: 118, height: 96
    },
    newsItemText: {
        color: '#999999', fontSize: 12,
        height: 43, overflow: 'hidden'
    },
    newsHeader: {
        color: "#C77139", fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1,
        marginBottom: 20
    },
});
var AlertList = function (_a) {
    var alerts = _a.alerts, pushDetails = _a.pushDetails;
    if (!alerts.length) {
        return react_1.default.createElement(react_native_1.View, { style: { display: 'none' } });
    }
    return (react_1.default.createElement(react_native_1.View, { style: styles.newsListView },
        react_1.default.createElement(react_native_1.Text, { style: styles.newsHeader }, "noticias"),
        react_1.default.createElement(react_native_1.FlatList, { data: alerts, keyExtractor: function (item) { return item.id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: { height: 132 }, onPress: function () { pushDetails(item.id, item.title); } },
                    react_1.default.createElement(react_native_1.View, { style: styles.newsItem },
                        react_1.default.createElement(react_native_1.Image, { style: styles.newsItemImage, source: { uri: item.imageURL || 'default.png' } }),
                        react_1.default.createElement(react_native_1.View, { style: styles.newsItemDataView },
                            react_1.default.createElement(react_native_1.Text, { style: styles.newsItemTitle }, item.title),
                            react_1.default.createElement(react_native_1.Text, { style: styles.newsItemText }, item.body)))));
            } })));
};
exports.default = AlertList;
