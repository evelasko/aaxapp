"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var moment = require("moment");
var styles = react_native_1.StyleSheet.create({
    eventListView: {
        backgroundColor: "white",
        padding: 20,
        marginBottom: 55
    },
    eventItem: {
        height: 96, flexDirection: 'row'
    },
    eventItemTitle: {
        fontSize: 14, fontWeight: 'bold', color: '#363636',
        height: 45, overflow: 'hidden'
    },
    eventItemDataView: {
        flexDirection: 'column', flex: 1, marginLeft: 10, justifyContent: 'space-around'
    },
    eventItemImage: {
        width: 118, height: 96
    },
    eventItemLocation: {
        color: '#999999', fontSize: 12,
        overflow: 'hidden'
    },
    eventItemDate: {},
    eventHeader: {
        color: "#EB894A", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        marginBottom: 20
    },
});
exports.EventsList = function (_a) {
    var events = _a.events, pushDetails = _a.pushDetails;
    return (react_1.default.createElement(react_native_1.View, { style: styles.eventListView },
        react_1.default.createElement(react_native_1.FlatList, { data: events, keyExtractor: function (item) { return item.id; }, renderItem: function (_a) {
                var item = _a.item, separators = _a.separators;
                return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: { height: 132 }, onPress: function () { pushDetails(item.id, item.title); } },
                    react_1.default.createElement(react_native_1.View, { style: styles.eventItem },
                        react_1.default.createElement(react_native_1.Image, { style: styles.eventItemImage, source: { uri: item.imageURL || 'default.png' } }),
                        react_1.default.createElement(react_native_1.View, { style: styles.eventItemDataView },
                            react_1.default.createElement(react_native_1.Text, { style: styles.eventItemTitle }, item.title),
                            react_1.default.createElement(react_native_1.View, { style: styles.eventItemDate },
                                react_1.default.createElement(react_native_1.Text, { style: styles.eventItemDate }, moment(item.date).format('D MMMM, HH:mm')),
                                react_1.default.createElement(react_native_1.Text, { style: styles.eventItemLocation }, "@" + item.venue.name))))));
            } })));
};
