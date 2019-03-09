"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    messageBox: {},
    messageText: {},
    linkTextButtons: {}
});
var ForgotPasswordMessage = function (_a) {
    var navigation = _a.navigation;
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.View, { style: styles.messageBox },
            react_1.default.createElement(react_native_1.Text, { style: styles.messageText }, "Hemos enviado a tu direcci\u00F3n de email las instrucciones para restablecer tu contrase\u00F1a")),
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, { style: styles.linkTextButtons, onPress: function () { navigation.navigate('Login'); } }, "entrar como visitante"),
            react_1.default.createElement(react_native_1.Text, { style: styles.linkTextButtons, onPress: function () { navigation.navigate('Content'); } }, "entrar como visitante"))));
};
exports.default = ForgotPasswordMessage;
