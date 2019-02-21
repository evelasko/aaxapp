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
var Main_1 = require("./modules/Main");
var NewsDetails_1 = require("./modules/NewsDetails");
var RouterStore_1 = require("./store/RouterStore");
exports.Router = mobx_react_lite_1.observer(function () {
    var routerStore = react_1.useContext(RouterStore_1.RouterStoreContext);
    return routerStore.screen === 'Main' ? react_1.default.createElement(Main_1.Main, null) : react_1.default.createElement(NewsDetails_1.NewsDetails, null);
});
