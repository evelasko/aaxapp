"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LoginConnector_1 = require("../controllers/LoginConnector");
var EventDetails_1 = __importDefault(require("../modules/content/events/EventDetails"));
var Events_1 = __importDefault(require("../modules/content/events/Events"));
var index_1 = __importDefault(require("../modules/content/index"));
var News_1 = __importDefault(require("../modules/content/news/News"));
var NewsDetails_1 = __importDefault(require("../modules/content/news/NewsDetails"));
var index_2 = require("../router/index");
var Routes = function () {
    return (react_1.default.createElement(index_2.Router, null,
        react_1.default.createElement(index_2.Switch, null,
            react_1.default.createElement(index_2.Route, { exact: true, path: "/login", component: LoginConnector_1.LoginConnector }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/", component: index_1.default }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/news", component: News_1.default }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/news/:news", component: NewsDetails_1.default }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/events", component: Events_1.default }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/events/:event", component: EventDetails_1.default }))));
};
exports.default = Routes;
