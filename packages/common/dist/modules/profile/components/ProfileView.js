"use strict";
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
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var react_native_qrcode_svg_1 = __importDefault(require("react-native-qrcode-svg"));
var index_1 = require("../../../ui/shared/SharedConstants/index");
var Styles_1 = require("../../../ui/shared/Styles");
var WIDTH = react_native_1.Dimensions.get('window').width;
var styles = react_native_1.StyleSheet.create({
    listHeaderContainer: {
        margin: 5, marginTop: 25
    },
    groupContainer: {
        alignItems: 'center',
        backgroundColor: Styles_1.Colors.primary,
        paddingHorizontal: 15, paddingVertical: 10,
        borderRadius: 20
    },
    groupText: { color: 'white', fontWeight: '900' },
    listItemContainer: { margin: 5 },
    qrContainer: { alignSelf: 'center' },
    profileContainer: { justifyContent: 'space-around', flex: 1 },
    nameContainer: { marginBottom: 15, marginTop: 15 },
    nameText: {
        fontSize: 28, fontWeight: '100', letterSpacing: 1, color: 'black', alignSelf: 'center'
    },
    buttonsContainer: { marginBottom: 10 }
});
var userQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nquery UserQuery ($id: String!) { user (id: $id) { name lastname group isAdmin } }"], ["\nquery UserQuery ($id: String!) { user (id: $id) { name lastname group isAdmin } }"])));
var ProfileView = function (_a) {
    var logOutUser = _a.logOutUser, userQRID = _a.userQRID;
    return (react_1.default.createElement(react_apollo_1.Query, { query: userQuery, variables: { id: userQRID } }, function (_a) {
        var data = _a.data, loading = _a.loading, error = _a.error;
        console.log('User ID?:', userQRID);
        if (error)
            return (react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.Text, null, "Ha ocurrido un error..."),
                react_1.default.createElement(react_native_1.View, { style: { marginVertical: 25 } },
                    react_1.default.createElement(react_native_1.Text, null, error.message)),
                react_1.default.createElement(react_native_1.Button, { title: 'Restaurar', onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                        var err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, logOutUser()];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    console.log('ERROR WHILE RESETTING APP: ', err_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); } })));
        if (loading)
            return react_1.default.createElement(react_native_1.ActivityIndicator, null);
        var _b = data.user, _c = _b.name, name = _c === void 0 ? '' : _c, _d = _b.lastname, lastname = _d === void 0 ? '' : _d, _e = _b.group, group = _e === void 0 ? 'PUBLIC' : _e, _f = _b.isAdmin, isAdmin = _f === void 0 ? false : _f;
        var fullName = name + " " + lastname;
        var trimmedString = fullName.substr(0, 25);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
        return (react_1.default.createElement(react_native_1.View, { style: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { marginTop: index_1.headerHeight }) },
            react_1.default.createElement(react_native_1.View, { style: styles.qrContainer },
                react_1.default.createElement(react_native_qrcode_svg_1.default, { color: userQRID ? 'black' : 'red', size: WIDTH * 0.85, value: userQRID || 'notfound' })),
            react_1.default.createElement(react_native_1.View, { style: styles.profileContainer },
                react_1.default.createElement(react_native_1.View, { style: styles.nameContainer },
                    react_1.default.createElement(react_native_1.Text, { style: styles.nameText }, trimmedString)),
                react_1.default.createElement(react_native_1.View, { style: { width: '100%', alignItems: 'center' } },
                    react_1.default.createElement(react_native_1.View, { style: styles.groupContainer },
                        react_1.default.createElement(react_native_1.Text, { style: styles.groupText }, group))),
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(react_native_1.Button, { title: 'Cerrar Sesi\u00F3n', color: 'red', onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                            var err_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, logOutUser()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        err_2 = _a.sent();
                                        console.log('ERROR WHILE LOGGING USER OUT: ', err_2);
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); } })))));
    }));
};
exports.default = ProfileView;
var templateObject_1;
