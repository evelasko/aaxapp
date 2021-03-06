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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
var InputField = /** @class */ (function (_super) {
    __extends(InputField, _super);
    function InputField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChangeText = function (text) {
            var _a = _this.props, setFieldValue = _a.form.setFieldValue, name = _a.field.name;
            setFieldValue(name, text);
        };
        return _this;
    }
    InputField.prototype.render = function () {
        var _a = this.props, field = _a.field, _b = _a.form, touched = _b.touched, errors = _b.errors, props = __rest(_a, ["field", "form"]);
        var errorMsg = touched[field.name] && errors[field.name];
        return (React.createElement(react_native_1.View, { style: { width: '100%' } },
            React.createElement(react_native_1.TextInput, __assign({}, props, { onChangeText: this.onChangeText, value: field.value })),
            errorMsg && React.createElement(react_native_1.Text, { style: { color: '#F17A61', fontSize: 11 } }, errorMsg)));
    };
    return InputField;
}(React.Component));
exports.InputField = InputField;
