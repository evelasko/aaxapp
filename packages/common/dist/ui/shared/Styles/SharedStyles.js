"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.Colors = {
    primary: '#EB894A',
    primaryDark: '#C77139',
    medium: '#999999',
    dark: '#363636'
};
exports.Headers = react_native_1.StyleSheet.create({
    h1Light: {
        color: "white", fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1
    },
    h1Color: {
        color: exports.Colors.primary, fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1
    },
    h1Dark: {
        color: exports.Colors.dark, fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1
    }
});
