"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_markdown_renderer_1 = __importStar(require("react-native-markdown-renderer"));
var AboutContentMD_1 = __importDefault(require("./AboutContentMD"));
var styles = react_native_1.StyleSheet.create({
    heading: {
        borderBottomWidth: 1,
        borderColor: '#000000',
    },
    heading1: {
        fontSize: 24, fontWeight: '900',
        backgroundColor: '#000000',
        color: '#FFFFFF',
    },
    heading2: {
        fontSize: 24, fontWeight: '400'
    },
    heading3: {
        fontSize: 18, fontWeight: '400'
    },
    heading4: {
        fontSize: 16,
    },
    heading5: {
        fontSize: 13,
    },
    heading6: {
        fontSize: 11,
    }
});
var rules = {
    // @ts-ignore
    heading1: function (node, children, parent, styles) {
        return react_1.default.createElement(react_native_1.Text, { key: react_native_markdown_renderer_1.getUniqueID(), style: [styles.heading, styles.heading1] }, children);
    },
    // @ts-ignore
    heading2: function (node, children, parent, styles) {
        return react_1.default.createElement(react_native_1.Text, { key: react_native_markdown_renderer_1.getUniqueID(), style: [styles.heading, styles.heading2] }, children);
    },
    // @ts-ignore
    heading3: function (node, children, parent, styles) {
        return react_1.default.createElement(react_native_1.Text, { key: react_native_markdown_renderer_1.getUniqueID(), style: [styles.heading, styles.heading3] }, children);
    }
};
var AboutContent = function () {
    return (react_1.default.createElement(react_native_1.ScrollView, { style: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { margin: 30, marginTop: 100 }) },
        react_1.default.createElement(react_native_markdown_renderer_1.default, { rules: rules }, AboutContentMD_1.default)));
};
exports.default = AboutContent;
