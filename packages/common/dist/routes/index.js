"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LoginConnector_1 = require("../controllers/LoginConnector");
var EventDetails_1 = __importDefault(require("../modules/content/events/EventDetails"));
var index_1 = __importStar(require("../modules/content/index"));
var NewsDetails_1 = __importDefault(require("../modules/content/news/NewsDetails"));
var index_2 = require("../router/index");
var Routes = function () {
    return (react_1.default.createElement(index_2.Router, null,
        react_1.default.createElement(index_2.Switch, null,
            react_1.default.createElement(index_2.Route, { exact: true, path: "/login", component: LoginConnector_1.LoginConnector }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/", component: index_1.DrawerMenu }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/news", component: index_1.default }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/news/:news", component: NewsDetails_1.default }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/events", component: index_1.default }),
            react_1.default.createElement(index_2.Route, { exact: true, path: "/events/:event", component: EventDetails_1.default }))));
};
exports.default = Routes;
