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
var qrcode_1 = __importDefault(require("qrcode"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
// @ts-ignore
// import QRCode from 'react-native-qrcode-svg';
var WIDTH = react_native_1.Dimensions.get('window').width;
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Profile.prototype.render = function () {
        qrcode_1.default.toDataURL('some text', { errorCorrectionLevel: 'H' }, function (err, url) {
            if (err)
                console.log('ERROR', err);
            console.log(url);
        });
        return (react_1.default.createElement(react_native_1.View, { style: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { padding: 10 }) },
            react_1.default.createElement(react_native_1.View, { style: { marginTop: 200, marginBottom: 100 } },
                react_1.default.createElement(react_native_1.Text, null, "Profile...")),
            react_1.default.createElement(react_native_1.View, null)));
    };
    return Profile;
}(react_1.default.Component));
exports.default = Profile;
// <QRCode value="http://awesome.link.qr" size={WIDTH-25} />
