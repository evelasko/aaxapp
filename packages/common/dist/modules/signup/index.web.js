"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SignUp_1 = __importDefault(require("./SignUp"));
var SignUp = function (_a) {
    var history = _a.history;
    return react_1.default.createElement(SignUp_1.default, { navToProfile: function () { history.push('/profile'); } });
};
exports.default = SignUp;
