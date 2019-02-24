"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var NewsStore = /** @class */ (function () {
    function NewsStore(rootStore) {
        this.newses = [];
        this.alerts = [];
        this.calls = [];
        this.featured = [];
        this.rootStore = rootStore;
    }
    NewsStore.prototype.initNewsStore = function (newses) {
        this.newses = newses.filter(function (n) { return n.category === 'NEWS' && !n.featured; });
        this.alerts = newses.filter(function (n) { return n.category === 'ALERT'; });
        this.calls = newses.filter(function (n) { return n.category === 'CALL'; });
        this.featured = newses.filter(function (n) { return n.featured; });
    };
    NewsStore.prototype.addAlert = function (newAlert) {
        this.alerts.unshift(newAlert);
    };
    NewsStore.prototype.updateAlert = function (id, newTitle) {
        this.alerts.filter(function (a) { return a.id === id; })[0].title = newTitle;
    };
    __decorate([
        mobx_1.observable
    ], NewsStore.prototype, "newses", void 0);
    __decorate([
        mobx_1.observable
    ], NewsStore.prototype, "alerts", void 0);
    __decorate([
        mobx_1.observable
    ], NewsStore.prototype, "calls", void 0);
    __decorate([
        mobx_1.observable
    ], NewsStore.prototype, "featured", void 0);
    __decorate([
        mobx_1.action
    ], NewsStore.prototype, "initNewsStore", null);
    __decorate([
        mobx_1.action
    ], NewsStore.prototype, "addAlert", null);
    __decorate([
        mobx_1.action
    ], NewsStore.prototype, "updateAlert", null);
    return NewsStore;
}());
exports.NewsStore = NewsStore;
