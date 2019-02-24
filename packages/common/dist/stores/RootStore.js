"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NewsStore_1 = require("./NewsStore");
var RouterStore_1 = require("./RouterStore");
var UserStore_1 = require("./UserStore");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.routerStore = new RouterStore_1.RouterStore(this);
        this.newsStore = new NewsStore_1.NewsStore(this);
        this.userStore = new UserStore_1.UserStore(this);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
