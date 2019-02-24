"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var LoginConnector_1 = require("../connectors/LoginConnector");
var AuthController_1 = require("../controllers/AuthController");
var RootStore_1 = require("../stores/RootStore");
var Base_1 = __importDefault(require("./Base"));
exports.Main = mobx_react_lite_1.observer(function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(react_apollo_1.Query, { query: AuthController_1.meQuery }, function (_a) {
        var loading = _a.loading, data = _a.data;
        if (!loading) {
            if (data.me.user) {
                rootStore.userStore.CurrentUser = data.me.user;
                return react_1.default.createElement(Base_1.default, null);
            }
            else {
                rootStore.userStore.CurrentUser = null;
                return react_1.default.createElement(LoginConnector_1.LoginConnector, null);
            }
        }
        else
            return (react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.Text, null, "Loading")));
    }));
});
