"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var EventDetails_1 = __importDefault(require("../modules/content/events/EventDetails"));
var index_1 = __importDefault(require("../modules/content/events/index"));
var index_2 = __importDefault(require("../modules/content/index"));
var index_3 = __importDefault(require("../modules/content/news/index"));
var NewsDetails_1 = __importDefault(require("../modules/content/news/NewsDetails"));
var index_4 = require("../modules/login/index");
var index_5 = require("../router/index");
var Routes = function () {
    return (react_1.default.createElement(index_5.Router, null,
        react_1.default.createElement(index_5.Switch, null,
            react_1.default.createElement(index_5.Route, { exact: true, path: "/login", component: index_4.LoginConnector }),
            react_1.default.createElement(index_5.Route, { exact: true, path: "/content", component: index_2.default }),
            react_1.default.createElement(index_5.Route, { exact: true, path: "/news", component: index_3.default }),
            react_1.default.createElement(index_5.Route, { exact: true, path: "/news/:news", component: NewsDetails_1.default }),
            react_1.default.createElement(index_5.Route, { exact: true, path: "/events", component: index_1.default }),
            react_1.default.createElement(index_5.Route, { exact: true, path: "/event/:event", component: EventDetails_1.default }))));
};
exports.default = Routes;
