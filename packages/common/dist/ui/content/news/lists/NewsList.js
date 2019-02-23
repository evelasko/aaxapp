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
exports.NewsList = function () {
    return (React.createElement(react_native_1.View, { style: styles.newsListView },
        React.createElement(react_native_1.Text, { style: styles.newsHeader }, "noticias"),
        React.createElement(react_native_1.FlatList, { data: [
                { title: 'Ut vitae augue vehicula, semper dui eget, tincidunt metus', key: 'item1', text: 'Ut vitae augue vehicula, semper dui eget, tincidunt metus. Fusce non nunc eget nunc viverra aliquam. Donec convallis semper nisl in suscipit. Sed quis erat vitae magna vestibulum lobortis ac ut libero. Aenean non sem vel nulla eleifend porta. Aliquam vel posuere nisl. Fusce malesuada ante sit amet nunc lacinia pharetra ac sed libero.' },
                { title: 'Fusce non nunc eget nunc sit amet nunc lacinia pharetra viverra aliquam', key: 'item2', text: 'Nunc vel eros quis tortor facilisis posuere. Phasellus luctus finibus felis, ac elementum neque dapibus quis. Vivamus consequat dictum neque, sed consequat est facilisis faucibus. Ut finibus varius diam, vitae hendrerit urna suscipit vitae. Etiam ultrices, dolor eu condimentum cursus, velit metus placerat mi, non aliquam velit ante id ante.' },
                { title: 'Fusce malesuada ante sit amet nunc lacinia pharetra ac sed libero', key: 'item3', text: 'Aliquam maximus, dolor sit amet ultrices sagittis, arcu odio suscipit libero, id venenatis urna magna eu mauris. Donec at molestie dolor, consequat porta eros. Etiam ac est accumsan, sagittis purus quis, scelerisque nulla. Proin vel tellus in purus aliquam dapibus at sit amet erat. Donec sit amet euismod nibh.' }
            ], renderItem: function (_a) {
                var item = _a.item, separators = _a.separators;
                return (React.createElement(react_native_1.TouchableHighlight, { style: { height: 132 }, onPress: function () { return console.log('You pressed on: ', item.title); }, onShowUnderlay: separators.highlight, onHideUnderlay: separators.unhighlight },
                    React.createElement(react_native_1.View, { style: styles.newsItem },
                        React.createElement(react_native_1.Image, { style: styles.newsItemImage, source: { uri: 'https://res.cloudinary.com/huh9ixig7/image/upload/v1550834159/aaxapi_images/e3darvw9yh3m8t51wq95.jpg' } }),
                        React.createElement(react_native_1.View, { style: styles.newsItemDataView },
                            React.createElement(react_native_1.Text, { style: styles.newsItemTitle }, item.title),
                            React.createElement(react_native_1.Text, { style: styles.newsItemText }, item.text)))));
            } })));
};
