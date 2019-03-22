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
var SelectField = /** @class */ (function (_super) {
    __extends(SelectField, _super);
    function SelectField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onValueChange = function (value) {
            var _a = _this.props, setFieldValue = _a.form.setFieldValue, name = _a.field.name;
            setFieldValue(name, value);
        };
        return _this;
    }
    SelectField.prototype.render = function () {
        var _a = this.props, field = _a.field, _b = _a.form, touched = _b.touched, errors = _b.errors, props = __rest(_a, ["field", "form"]);
        var errorMsg = touched[field.name] && errors[field.name];
        return (React.createElement(react_native_1.Picker, __assign({}, props, { onValueChange: this.onValueChange, selectedValue: field.value, mode: "dropdown" }), props.options.map(function (o) { return React.createElement(react_native_1.Picker.Item, { key: o.value, label: o.label, value: o.value }); })));
    };
    return SelectField;
}(React.Component));
exports.SelectField = SelectField;
