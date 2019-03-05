"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var expo_1 = require("expo");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_navigation_1 = require("react-navigation");
var index_1 = __importDefault(require("../../../ui/shared/MenuButton/index"));
var News_1 = __importDefault(require("./News"));
var styles = react_native_1.StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1 },
    activity: { flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center' }
});
var News = /** @class */ (function (_super) {
    __extends(News, _super);
    function News() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pushDetails = function (id, title) {
            _this.props.navigation.push('NewsDetails', { id: id, title: title });
        };
        return _this;
    }
    News.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: react_native_1.StyleSheet.absoluteFill },
            react_1.default.createElement(News_1.default, { pushDetails: this.pushDetails })));
    };
    News.navigationOptions = {
        title: 'Noticias',
        headerBackground: (react_1.default.createElement(expo_1.BlurView, { tint: "light", intensity: 100, style: react_native_1.StyleSheet.absoluteFill })),
        headerTransparent: true,
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return react_navigation_1.DrawerActions.openDrawer(); } },
            react_1.default.createElement(index_1.default, null)))
    };
    return News;
}(react_1.default.Component));
exports.default = News;
