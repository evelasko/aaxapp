"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var expo_1 = require("expo");
var react_navigation_1 = require("react-navigation");
__export(require("./Constants"));
exports.headerHeight = (expo_1.Constants.statusBarHeight / 2) + react_navigation_1.Header.HEIGHT;
