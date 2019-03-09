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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_qrcode_svg_1 = __importDefault(require("react-native-qrcode-svg"));
var WIDTH = react_native_1.Dimensions.get('screen').width;
var styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%', height: WIDTH, position: 'absolute', top: 0, left: 0,
        justifyContent: 'center', alignItems: 'center'
    }
});
var ProfileHeader = /** @class */ (function (_super) {
    __extends(ProfileHeader, _super);
    function ProfileHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileHeader.prototype.render = function () {
        var _a = this.props.codeID, codeID = _a === void 0 ? '123' : _a;
        return (react_1.default.createElement(react_native_1.View, { style: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { padding: 5, paddingTop: 50 }) },
            react_1.default.createElement(react_native_qrcode_svg_1.default, { size: WIDTH * 0.80, value: codeID })));
    };
    return ProfileHeader;
}(react_1.default.Component));
exports.default = ProfileHeader;
