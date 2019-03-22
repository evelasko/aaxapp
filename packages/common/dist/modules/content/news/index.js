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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_icons_1 = require("@expo/vector-icons");
var expo_1 = require("expo");
var native_1 = require("mobx-react/native");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var SharedConstants_1 = require("../../../ui/shared/SharedConstants");
var News_1 = __importDefault(require("./News"));
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
        var per = this.props.appStore.per;
        return (react_1.default.createElement(react_native_1.View, { style: react_native_1.StyleSheet.absoluteFill },
            react_1.default.createElement(News_1.default, { pushDetails: this.pushDetails, per: per, headerHeight: SharedConstants_1.headerHeight, appState: react_native_1.AppState })));
    };
    News.navigationOptions = function (_a) {
        var navigation = _a.navigation;
        return ({
            title: 'Noticias',
            headerTransparent: true,
            animationEnabled: true,
            headerLeft: react_1.default.createElement(vector_icons_1.Ionicons, { name: "ios-menu", color: "gray", size: 32, onPress: function () { return navigation.openDrawer(); }, style: { marginLeft: 15 } }),
            headerBackground: (react_1.default.createElement(expo_1.BlurView, { tint: "light", intensity: 100, style: react_native_1.StyleSheet.absoluteFill })),
            headerTitleStyle: { fontWeight: 'bold' }
        });
    };
    News = __decorate([
        native_1.inject('appStore'),
        native_1.observer
    ], News);
    return News;
}(react_1.default.Component));
exports.default = News;
