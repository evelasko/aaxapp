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
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var HeaderMain_1 = __importDefault(require("../../web/HeaderMain"));
var News_1 = __importDefault(require("./News"));
var News = /** @class */ (function (_super) {
    __extends(News, _super);
    function News() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pushDetails = function (id, title) {
            _this.props.history.push("/news/" + id);
        };
        return _this;
    }
    News.prototype.render = function () {
        var history = this.props.history;
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(HeaderMain_1.default, { goLogin: function () { history.push('/login'); }, goMenu: function () { }, title: "Noticias" }),
            react_1.default.createElement(News_1.default, { pushDetails: this.pushDetails })));
    };
    return News;
}(react_1.default.Component));
exports.default = News;
