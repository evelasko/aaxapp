"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var SharedStyles_1 = require("../../ui/shared/Styles/SharedStyles");
var SignUp_1 = require("./SignUp");
var SignUpSuccess = function (_a) {
    var navToProfile = _a.navToProfile;
    return (react_1.default.createElement(react_native_1.View, { style: SignUp_1.styles.signUpContainer },
        react_1.default.createElement(react_native_1.View, { style: { width: '60%', marginTop: 50 } },
            react_1.default.createElement(react_native_1.View, { style: { borderBottomColor: 'grey', borderBottomWidth: 1, paddingBottom: 15 } },
                react_1.default.createElement(react_native_1.Text, { style: SignUp_1.styles.signUpHeaderTitle }, "Cuenta Creada")),
            react_1.default.createElement(react_native_1.View, { style: { alignContent: 'center', marginTop: 15 } },
                react_1.default.createElement(react_native_1.Text, { style: { fontSize: 16, color: 'silver' } }, "Hemos enviado un email a la direcci\u00F3n que ha indicado con instrucciones para activar su cuenta."))),
        react_1.default.createElement(react_native_1.View, { style: SignUp_1.styles.signUpButton },
            react_1.default.createElement(react_native_1.Button, { title: "ok", onPress: function () { navToProfile(); }, color: SharedStyles_1.Colors.primary }))));
};
exports.default = SignUpSuccess;
