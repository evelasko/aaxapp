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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var index_1 = __importDefault(require("../../../ui/icons/logoColor/index"));
var InputField_1 = require("../../../ui/shared/InputField");
var user_1 = require("../../../yupSchemas/user");
var notifications_1 = require("../../notifications");
var WIDTH = react_native_1.Dimensions.get('window').width;
var styles = react_native_1.StyleSheet.create({
    logoContainer: {
        width: '100%', marginBottom: 35, alignItems: 'center'
    },
    inputFieldsView: {
        marginBottom: 25, width: '100%'
    },
    inputFields: {
        color: 'black', width: '50%', alignSelf: 'center',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth, borderBottomColor: 'grey'
    },
    submitButton: {
        marginTop: 15, marginBottom: 20
    },
    linkTextView: {
        width: '100%',
        alignItems: 'center'
    },
    linkTextButtons: {
        color: "#EB894A",
        marginTop: 10, marginBottom: 15
    }
});
var L = /** @class */ (function (_super) {
    __extends(L, _super);
    function L() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    L.prototype.render = function () {
        var _a = this.props, handleSubmit = _a.handleSubmit, handleForgot = _a.handleForgot, handleSignUp = _a.handleSignUp, isSubmitting = _a.isSubmitting;
        if (isSubmitting) {
            return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, flexDirection: 'column', alignItems: 'center' } },
                react_1.default.createElement(react_native_1.ActivityIndicator, null)));
        }
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, flexDirection: 'column', alignItems: 'center' } },
            react_1.default.createElement(react_native_1.View, { style: styles.logoContainer },
                react_1.default.createElement(index_1.default, { width: 236, height: 236, color: "silver" })),
            react_1.default.createElement(react_native_1.View, { style: styles.inputFieldsView },
                react_1.default.createElement(formik_1.Field, { name: "email", placeholder: "email", textContentType: "username", placeholderTextColor: 'grey', spellCheck: false, autocapitalize: "none", style: styles.inputFields, component: InputField_1.InputField })),
            react_1.default.createElement(react_native_1.View, { style: styles.inputFieldsView },
                react_1.default.createElement(formik_1.Field, { name: "password", type: "password", textContentType: "password", placeholder: "contrase\u00F1a", placeholderTextColor: 'grey', secureTextEntry: true, spellCheck: false, style: styles.inputFields, component: InputField_1.InputField })),
            react_1.default.createElement(react_native_1.View, { style: styles.submitButton },
                react_1.default.createElement(react_native_1.Button, { title: "Iniciar Sesi\u00F3n", color: "#EB894A", onPress: handleSubmit })),
            react_1.default.createElement(react_native_1.View, { style: styles.linkTextView },
                react_1.default.createElement(react_native_1.Text, { style: styles.linkTextButtons, onPress: handleForgot }, "recuerda tu contrase\u00F1a"),
                react_1.default.createElement(react_native_1.Text, { style: styles.linkTextButtons, onPress: handleSignUp }, "reg\u00EDstrate aqu\u00ED"))));
    };
    return L;
}(react_1.default.Component));
var LoginView = formik_1.withFormik({
    validationSchema: user_1.loginSchema,
    mapPropsToValues: function () { return ({ email: "", password: "", device: "", permission: false }); },
    handleSubmit: function (values, _a) {
        var props = _a.props, setErrors = _a.setErrors;
        return __awaiter(_this, void 0, void 0, function () {
            var pushToken, err_1, errors;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, notifications_1.registerForPushNotificationsAsync()];
                    case 1:
                        pushToken = _b.sent();
                        if (pushToken) {
                            values.permission = true;
                            values.device = pushToken;
                        }
                        else {
                            values.permission = false;
                            values.device = null;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log('ERROR WHILE SETING UP PUSH NOTIFICATIONS @LOGIN: ', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [4 /*yield*/, props.submit(values)];
                    case 4:
                        errors = _b.sent();
                        if (errors) {
                            return [2 /*return*/, setErrors(errors)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
})(L);
exports.default = LoginView;
