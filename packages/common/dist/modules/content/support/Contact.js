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
Object.defineProperty(exports, "__esModule", { value: true });
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    mainWrapper: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { paddingTop: 50 }),
    cardWrapper: { flexDirection: 'row' },
    headerWrapper: {},
    headerTitle: { fontWeight: '900' },
    cardTextHeader: { fontWeight: 'bold' },
    cardText: {},
});
var ContactContent = function () {
    return (react_1.default.createElement(react_native_1.View, { style: styles.mainWrapper },
        react_1.default.createElement(react_native_1.View, { style: styles.cardWrapper },
            react_1.default.createElement(vector_icons_1.Feather, { name: "phone-call", size: 32, color: "grey" }),
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.Text, { style: styles.cardTextHeader }, "Ll\u00E1manos"),
                react_1.default.createElement(react_native_1.Text, { style: styles.cardText }, "+34 914 888 129"))),
        react_1.default.createElement(react_native_1.View, { style: styles.cardWrapper },
            react_1.default.createElement(vector_icons_1.Feather, { name: "mail", size: 32, color: "grey" }),
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.Text, { style: styles.cardTextHeader }, "Escr\u00EDbenos"),
                react_1.default.createElement(react_native_1.Text, { style: styles.cardText }, "info@alicialonso.org"))),
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(vector_icons_1.Feather, { name: "map-pin", size: 32, color: "grey" }),
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.Text, null, "Campus URJC Fuenlabrada")),
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.Text, null,
                    "Camino del Molino SN",
                    "\n",
                    "28943, Fuenlabrada",
                    "\n",
                    "Madrid. Espa\u00F1a")))));
};
exports.default = ContactContent;
