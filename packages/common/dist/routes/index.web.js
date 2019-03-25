"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = __importDefault(require("../modules/content/about/index"));
var index_2 = __importDefault(require("../modules/content/contact/index"));
var EventDetails_1 = __importDefault(require("../modules/content/events/EventDetails"));
var index_3 = __importDefault(require("../modules/content/events/index"));
var index_4 = __importDefault(require("../modules/content/news/index"));
var NewsDetails_1 = __importDefault(require("../modules/content/news/NewsDetails"));
var index_5 = __importDefault(require("../modules/content/policy/index"));
var EmailConfirm_1 = __importDefault(require("../modules/emailConfirmation/EmailConfirm"));
var index_6 = __importDefault(require("../modules/login/index"));
var index_7 = __importDefault(require("../modules/profile/index"));
var index_8 = __importDefault(require("../modules/rnav/index"));
var index_9 = __importDefault(require("../modules/signup/index"));
var index_10 = require("../router/index");
var Routes = function () {
    return (react_1.default.createElement(index_10.Router, null,
        react_1.default.createElement(index_10.Switch, null,
            react_1.default.createElement(index_10.Route, { exact: true, path: "/", component: index_6.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/login", component: index_6.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/news", component: index_4.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/news/:news", component: NewsDetails_1.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/events", component: index_3.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/event/:event", component: EventDetails_1.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/support", component: index_2.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/about", component: index_1.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/policy", component: index_5.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/signup", component: index_9.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/emailconfirm/:key", component: EmailConfirm_1.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/rnav", component: index_8.default }),
            react_1.default.createElement(index_10.Route, { exact: true, path: "/profile", component: index_7.default }))));
};
exports.default = Routes;
