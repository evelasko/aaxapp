"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
var ContentScroll_1 = require("../ui/content/news/ContentScroll");
var TopBar_1 = require("../ui/shared/TopBar");
var styles = react_native_1.StyleSheet.create({
    main: {
        flexDirection: 'column',
        flex: 1
    }
});
exports.Main = mobx_react_lite_1.observer(function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.main },
        react_1.default.createElement(TopBar_1.TopBar, null),
        react_1.default.createElement(react_native_1.Button, { title: "view details", onPress: function () {
                // rootStore.routerStore.screen = 'NewsDetails' 
                rootStore.newsStore.alerts.push({ id: '1', title: 'Title One', text: 'Lorem ipsum' }, { id: '2', title: 'Title Two', text: 'Lorem ipsum' }, { id: '3', title: 'Title Three', text: 'Lorem ipsum' }, { id: '4', title: 'Title Four', text: 'Lorem ipsum' });
            } }),
        react_1.default.createElement(ContentScroll_1.ContentScroll, null)));
});
// 
