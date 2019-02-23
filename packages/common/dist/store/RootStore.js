"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NewsStore_1 = require("./NewsStore");
var RouterStore_1 = require("./RouterStore");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.routerStore = new RouterStore_1.RouterStore(this);
        this.newsStore = new NewsStore_1.NewsStore(this);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
