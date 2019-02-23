"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var LoginConnector_1 = require("./connectors/LoginConnector");
var Main_1 = require("./modules/Main");
var NewsDetails_1 = require("./modules/NewsDetails");
var RootStore_1 = require("./stores/RootStore");
exports.Router = mobx_react_lite_1.observer(function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    switch (rootStore.routerStore.screen) {
        case 'Main':
            return react_1.default.createElement(Main_1.Main, null);
        case 'NewsDetails':
            return react_1.default.createElement(NewsDetails_1.NewsDetails, null);
        case 'Login':
            return react_1.default.createElement(LoginConnector_1.LoginConnector, null);
        default:
            return react_1.default.createElement(LoginConnector_1.LoginConnector, null);
    }
});
