"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var apollo_1 = require("../../../apollo");
var index_1 = __importDefault(require("../../../ui/icons/logoColor/index"));
var InputField_1 = require("../../../ui/shared/InputField");
var user_1 = require("../../../yupSchemas/user");
var notifications_1 = require("../../notifications");
var loginUserMutation = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation LoginUserMutation ( $email: String!, $password: String!, $device: String, $permission: Boolean ) \n    { loginUserMobile( data: { \n            email: $email, password: $password, deviceToken: $device, devicePermission: $permission\n        } ) { token error } }   \n"], ["\n    mutation LoginUserMutation ( $email: String!, $password: String!, $device: String, $permission: Boolean ) \n    { loginUserMobile( data: { \n            email: $email, password: $password, deviceToken: $device, devicePermission: $permission\n        } ) { token error } }   \n"])));
var WIDTH = react_native_1.Dimensions.get('window').width;
var styles = react_native_1.StyleSheet.create({
    logoContainer: {
        width: '100%', marginBottom: 30, alignItems: 'center', marginTop: 30
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
    },
});
var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setUser = function (per) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, react_native_1.AsyncStorage.setItem('per', per)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, apollo_1.client.resetStore()];
                    case 2:
                        _a.sent();
                        this.props.loginSuccess(per);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log('ERROR: ', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.remountComponent = function () { _this.forceUpdate(); };
        return _this;
    }
    LoginComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, handleForgot = _a.handleForgot, handleSignUp = _a.handleSignUp, loginFailed = _a.loginFailed;
        return (react_1.default.createElement(react_apollo_1.Mutation, { mutation: loginUserMutation }, function (loginUser) {
            return (react_1.default.createElement(react_native_1.ScrollView, { style: react_native_1.StyleSheet.absoluteFill },
                react_1.default.createElement(formik_1.Formik, { initialValues: { email: '', password: '', permission: false, device: '' }, validationSchema: user_1.loginSchema, onSubmit: function (values, _a) {
                        var resetForm = _a.resetForm;
                        return __awaiter(_this, void 0, void 0, function () {
                            var pushToken, err_2, res, err_3;
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
                                            values.device = '';
                                        }
                                        return [3 /*break*/, 3];
                                    case 2:
                                        err_2 = _b.sent();
                                        console.log('ERROR WHILE SETING UP PUSH NOTIFICATIONS @LOGIN: ', err_2);
                                        return [3 /*break*/, 3];
                                    case 3:
                                        _b.trys.push([3, 7, , 8]);
                                        return [4 /*yield*/, loginUser({ variables: values })];
                                    case 4:
                                        res = _b.sent();
                                        if (!res.data.loginUserMobile.token) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.setUser(res.data.loginUserMobile.token)];
                                    case 5:
                                        _b.sent();
                                        _b.label = 6;
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        err_3 = _b.sent();
                                        react_native_1.Alert.alert('Iniciar Sesión', 'Las credenciales introducidas no coinciden con ningún usuario, por favor inténtelo de nuevo...', [{ text: 'OK', onPress: function () { resetForm(); } }], { cancelable: false });
                                        return [3 /*break*/, 8];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        });
                    } }, function (_a) {
                    var handleSubmit = _a.handleSubmit, isSubmitting = _a.isSubmitting, handleBlur = _a.handleBlur, errors = _a.errors;
                    if (isSubmitting) {
                        return (react_1.default.createElement(react_native_1.View, { style: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { padding: 25 }) },
                            react_1.default.createElement(react_native_1.ActivityIndicator, null)));
                    }
                    return (react_1.default.createElement(react_native_1.View, null,
                        react_1.default.createElement(react_native_1.View, { style: styles.logoContainer },
                            react_1.default.createElement(index_1.default, { width: 216, height: 216, color: "silver" })),
                        react_1.default.createElement(react_native_1.View, null,
                            react_1.default.createElement(react_native_1.View, { style: styles.inputFieldsView },
                                react_1.default.createElement(formik_1.Field, { name: "email", type: "email", textContentType: "username", autoCapitalize: "none", placeholder: "email", placeholderTextColor: 'grey', spellCheck: false, error: errors.email, style: styles.inputFields, component: InputField_1.InputField })),
                            react_1.default.createElement(react_native_1.View, { style: styles.inputFieldsView },
                                react_1.default.createElement(formik_1.Field, { name: "password", type: "password", textContentType: "password", placeholder: "contrase\u00F1a", placeholderTextColor: 'grey', secureTextEntry: true, spellCheck: false, error: errors.password, style: styles.inputFields, component: InputField_1.InputField }))),
                        react_1.default.createElement(react_native_1.View, { style: { marginBottom: 150 } },
                            react_1.default.createElement(react_native_1.View, { style: styles.submitButton },
                                react_1.default.createElement(react_native_1.Button, { title: "Iniciar Sesi\u00F3n", color: "#EB894A", onPress: function (e) { return handleSubmit(); } })),
                            react_1.default.createElement(react_native_1.View, { style: styles.linkTextView },
                                react_1.default.createElement(react_native_1.Text, { style: styles.linkTextButtons, onPress: handleForgot }, "recuerda tu contrase\u00F1a"),
                                react_1.default.createElement(react_native_1.Text, { style: styles.linkTextButtons, onPress: handleSignUp }, "reg\u00EDstrate aqu\u00ED")))));
                })));
        }));
    };
    return LoginComponent;
}(react_1.default.Component));
exports.default = LoginComponent;
var templateObject_1;
