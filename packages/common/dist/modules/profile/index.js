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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var vector_icons_1 = require("@expo/vector-icons");
var expo_1 = require("expo");
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var native_1 = require("mobx-react/native");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var apollo_1 = require("../../apollo");
var index_1 = require("../../ui/shared/SharedConstants/index");
var LoginComponent_1 = __importDefault(require("./components/LoginComponent"));
var ProfileView_1 = __importDefault(require("./components/ProfileView"));
var styles = react_native_1.StyleSheet.create({
    container: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { padding: 10, paddingTop: 50, marginTop: index_1.headerHeight })
});
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { guest: !_this.props.appStore.per };
        _this.shiftUser = function () {
            _this.setState({ guest: !_this.props.appStore.per });
        };
        return _this;
    }
    Profile.prototype.render = function () {
        var _this = this;
        var _a = this.props, navigation = _a.navigation, appStore = _a.appStore;
        console.log('AT PROFILE RENDER: ', appStore.per);
        if (!this.state.guest && appStore.per)
            return (react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(ProfileView_1.default, { userQRID: appStore.per, logOutUser: function () { return __awaiter(_this, void 0, void 0, function () {
                        var logOutMutation, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    logOutMutation = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                            mutation LogOutMutation { logoutUser { token error } }\n                            "], ["\n                            mutation LogOutMutation { logoutUser { token error } }\n                            "])));
                                    return [4 /*yield*/, apollo_1.client.mutate({
                                            mutation: logOutMutation,
                                            refetchQueries: ['AllNewsQuery', 'AllEventsQuery']
                                        })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, react_native_1.AsyncStorage.removeItem('per')];
                                case 2:
                                    _a.sent();
                                    appStore.unsetUser();
                                    this.shiftUser();
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    console.log('LOGGIN OFF ERROR: ', err_1);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); } })));
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(LoginComponent_1.default, { loginSuccess: function (per) { if (per) {
                    appStore.setUser(per);
                } ; _this.shiftUser(); }, loginFailed: function () { _this.shiftUser(); }, handleForgot: function () { react_native_1.Linking.openURL('https://admin.alicialonso.org/forgot/'); }, handleSignUp: function () { navigation.navigate('SignUp'); } })));
    };
    Profile.navigationOptions = function (_a) {
        var navigation = _a.navigation;
        return ({
            title: 'Perfil',
            headerTransparent: true,
            animationEnabled: true,
            headerLeft: react_1.default.createElement(vector_icons_1.Ionicons, { name: "ios-menu", color: "gray", size: 32, onPress: function () { return navigation.openDrawer(); }, style: { marginLeft: 15 } }),
            // headerRight: navigation.state.params.per ? <Feather name='sliders'
            //                 color="gray"
            //                 size={24}
            //                 onPress={() => navigation.navigate('Settings')}
            //                 style={{marginRight: 15}}
            //             /> : <View />,
            headerBackground: (react_1.default.createElement(expo_1.BlurView, { tint: "light", intensity: 100, style: react_native_1.StyleSheet.absoluteFill })),
            headerTitleStyle: { fontWeight: 'bold' }
        });
    };
    Profile = __decorate([
        native_1.inject('appStore')
    ], Profile);
    return Profile;
}(react_1.default.Component));
exports.default = Profile;
var templateObject_1;
