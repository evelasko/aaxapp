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
        this.alerts = [];
        this.calls = [];
        this.allNews = [];
        this.featuredNews = null;
        this.rootStore = rootStore;
    }
    NewsStore.prototype.initNewsStore = function (newses) {
        var _this = this;
        this.alerts = newses.filter(function (n) { return n.category === 'ALERT'; });
        this.calls = newses.filter(function (n) { return n.category === 'CALL'; });
        this.featuredNews = newses.filter(function (n) { return n.featured && n.category === 'NEWS'; })[0];
        this.allNews = newses.filter(function (n) {
            _this.featuredNews ? n.category === 'NEWS' && n.id != _this.featuredNews.id : n.category === 'NEWS';
        }).slice().sort(function (a, b) {
            var dA = new Date(a.expiration);
            var dB = new Date(b.expiration);
            return dA - dB;
        });
    };
    Object.defineProperty(NewsStore.prototype, "recents", {
        get: function () {
            var recentsCount = this.allNews.length > 3 ? 3 : this.allNews.length;
            return this.allNews.slice(0, recentsCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsStore.prototype, "newses", {
        get: function () {
            var recentsCount = this.allNews.length > 3 ? 3 : this.allNews.length;
            return this.allNews.slice(recentsCount, this.allNews.length);
        },
        enumerable: true,
        configurable: true
    });
    NewsStore.prototype.addAlert = function (newAlert) {
        this.alerts.unshift(newAlert);
    };
    NewsStore.prototype.updateAlert = function (id, newTitle) {
        this.alerts.filter(function (a) { return a.id === id; })[0].title = newTitle;
    };
    __decorate([
        mobx_1.observable
    ], NewsStore.prototype, "alerts", void 0);
    __decorate([
        mobx_1.observable
    ], NewsStore.prototype, "calls", void 0);
    __decorate([
        mobx_1.observable
    ], NewsStore.prototype, "allNews", void 0);
    __decorate([
        mobx_1.observable
    ], NewsStore.prototype, "featuredNews", void 0);
    __decorate([
        mobx_1.action
    ], NewsStore.prototype, "initNewsStore", null);
    __decorate([
        mobx_1.computed
    ], NewsStore.prototype, "recents", null);
    __decorate([
        mobx_1.computed
    ], NewsStore.prototype, "newses", null);
    __decorate([
        mobx_1.action
    ], NewsStore.prototype, "addAlert", null);
    __decorate([
        mobx_1.action
    ], NewsStore.prototype, "updateAlert", null);
    return NewsStore;
}());
exports.NewsStore = NewsStore;
