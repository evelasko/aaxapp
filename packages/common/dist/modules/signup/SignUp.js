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
var index_1 = __importDefault(require("../../ui/icons/close/index"));
var InputField_1 = require("../../ui/shared/InputField");
var index_2 = require("../../ui/shared/SelectField/index");
var index_3 = require("../../ui/shared/Styles/index");
var user_1 = require("../../yupSchemas/user");
var SignUpSuccess_1 = __importDefault(require("./SignUpSuccess"));
var signUpUserMutation = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation SignUpUserMutation (   $email: String!, \n                                    $password: String!, \n                                    $name: String!, \n                                    $lastname: String!,\n                                    $groupRequest: UserGroup\n                                    $nID: String,\n                                    $nIDType: nIdType\n                                ) \n    {\n        signUpUser( data: { email: $email, \n                            password: $password,\n                            name: $name, lastname: $lastname,\n                            groupRequest: $groupRequest,\n                            nID: $nID, nIDType: $nIDType\n                        } \n                    )\n        { token error } \n    }   \n"], ["\n    mutation SignUpUserMutation (   $email: String!, \n                                    $password: String!, \n                                    $name: String!, \n                                    $lastname: String!,\n                                    $groupRequest: UserGroup\n                                    $nID: String,\n                                    $nIDType: nIdType\n                                ) \n    {\n        signUpUser( data: { email: $email, \n                            password: $password,\n                            name: $name, lastname: $lastname,\n                            groupRequest: $groupRequest,\n                            nID: $nID, nIDType: $nIDType\n                        } \n                    )\n        { token error } \n    }   \n"])));
exports.styles = react_native_1.StyleSheet.create({
    signUpContainer: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { paddingTop: react_native_1.Platform.OS == 'web' ? 20 : 40, backgroundColor: index_3.Colors.dark, alignItems: 'center', justifyContent: 'space-between' }),
    signUpHeader: { width: '100%', flexDirection: 'row', paddingLeft: 20, marginTop: 30 },
    signUpHeaderTitle: { textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', color: 'silver', fontSize: 18, paddingRight: 40 },
    signUpFormContainer: { width: '100%', alignItems: 'center', paddingLeft: 40, paddingRight: 40 },
    signUpInputs: {
        borderBottomColor: "rgba(0,0,0,0.3)", borderBottomWidth: 1,
        marginBottom: 5, marginTop: 25, width: '100%', paddingBottom: 5, height: 20,
        fontSize: 16, color: 'silver'
    },
    signUpPick: { width: '100%', color: 'silver' },
    signUpPickLabel: { fontSize: 16, color: 'silver' },
    signUpPickHeader: { fontSize: 12, color: 'silver', textAlign: 'justify' },
    signUpButton: { marginBottom: 90, alignSelf: 'center' }
});
var SignUpComponent = /** @class */ (function (_super) {
    __extends(SignUpComponent, _super);
    function SignUpComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.remountComponent = function () { _this.forceUpdate(); };
        return _this;
    }
    SignUpComponent.prototype.render = function () {
        var _this = this;
        var navToProfile = this.props.navToProfile;
        return (react_1.default.createElement(react_apollo_1.Mutation, { mutation: signUpUserMutation }, function (signUp, _a) {
            var data = _a.data, loading = _a.loading, error = _a.error;
            if (error) {
                return (react_1.default.createElement(react_native_1.View, { style: exports.styles.signUpContainer },
                    react_1.default.createElement(react_native_1.View, null,
                        react_1.default.createElement(react_native_1.Text, { style: { fontWeight: 'bold' } }, "Ha ocurrido un error...")),
                    react_1.default.createElement(react_native_1.View, null,
                        react_1.default.createElement(react_native_1.Text, null, error.message.split(': ')[1])),
                    react_1.default.createElement(react_native_1.View, { style: { marginTop: 25 } },
                        react_1.default.createElement(react_native_1.Text, { onPress: _this.remountComponent }, "Reintentar"))));
            }
            if (data && data.signUpUser.token) {
                return react_1.default.createElement(SignUpSuccess_1.default, { navToProfile: navToProfile });
            }
            return (react_1.default.createElement(formik_1.Formik, { initialValues: { email: '', password: '', name: '', lastname: '', groupRequest: 'PUBLIC' }, validationSchema: user_1.userSignUpSchema, onSubmit: function (values) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, signUp({ variables: values })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                }); }); } }, function (_a) {
                var handleSubmit = _a.handleSubmit, handleBlur = _a.handleBlur, errors = _a.errors, setFieldValue = _a.setFieldValue, values = _a.values;
                return (react_1.default.createElement(react_native_1.View, { style: exports.styles.signUpContainer },
                    react_1.default.createElement(react_native_1.View, { style: exports.styles.signUpHeader },
                        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { navToProfile(); } },
                            react_1.default.createElement(index_1.default, { size: 32, color: "grey" })),
                        react_1.default.createElement(react_native_1.View, { style: { alignItems: 'center', flex: 1 } },
                            react_1.default.createElement(react_native_1.Text, { style: exports.styles.signUpHeaderTitle }, "Nuevo Usuario"))),
                    react_1.default.createElement(react_native_1.View, { style: exports.styles.signUpFormContainer },
                        loading && react_1.default.createElement(react_native_1.ActivityIndicator, null),
                        react_1.default.createElement(formik_1.Field, { name: "email", type: "email", textContentType: "username", autoCapitalize: "none", placeholder: "email", placeholderTextColor: 'grey', spellCheck: false, component: InputField_1.InputField, error: errors.email, onBlur: handleBlur('email'), style: exports.styles.signUpInputs }),
                        react_1.default.createElement(formik_1.Field, { name: "password", type: "password", autoCapitalize: "none", textContentType: "password", placeholder: "contrase\u00F1a", placeholderTextColor: 'grey', spellCheck: false, secureTextEntry: true, component: InputField_1.InputField, error: errors.password, onBlur: handleBlur('password'), style: exports.styles.signUpInputs }),
                        react_1.default.createElement(formik_1.Field, { name: "name", textContentType: "username", placeholder: "nombre", placeholderTextColor: 'grey', spellCheck: false, component: InputField_1.InputField, error: errors.name, onBlur: handleBlur('name'), style: exports.styles.signUpInputs }),
                        react_1.default.createElement(formik_1.Field, { name: "lastname", textContentType: "username", placeholder: "apellidos", placeholderTextColor: 'grey', spellCheck: false, component: InputField_1.InputField, error: errors.lastname, onBlur: handleBlur('lastname'), style: exports.styles.signUpInputs }),
                        react_1.default.createElement(formik_1.Field, { name: "groupRequest", component: index_2.SelectField, items: [
                                { value: 'PUBLIC', label: 'General' },
                                { value: 'STAFF', label: 'Staff' },
                                { value: 'STUDENT', label: 'Estudiante' }
                            ], placeholder: { label: 'Seleccione un grupo...', value: 'PUBLIC', color: 'grey' }, textInputProps: exports.styles.signUpInputs }),
                        react_1.default.createElement(react_native_1.View, { style: { marginTop: 30, marginBottom: 15 } },
                            react_1.default.createElement(react_native_1.Text, { style: exports.styles.signUpPickHeader }, "Especifique el grupo al que pertenece. Su selecci\u00F3n ser\u00E1 verificada a partir de su nombre completo y apellidos cotejados con su registro dentro de la organizaci\u00F3n; posteriormente recibir\u00E1 un email confirmando su grupo."))),
                    react_1.default.createElement(react_native_1.View, { style: exports.styles.signUpButton },
                        react_1.default.createElement(react_native_1.Button, { onPress: function (e) { return handleSubmit(); }, title: "Registrarse", color: index_3.Colors.primary }))));
            }));
        }));
    };
    return SignUpComponent;
}(react_1.default.Component));
exports.default = SignUpComponent;
var templateObject_1;
