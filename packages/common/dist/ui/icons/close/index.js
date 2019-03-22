"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = __importDefault(require("react"));
var CloseIcon = function (_a) {
    var size = _a.size, color = _a.color;
    return react_1.default.createElement(vector_icons_1.EvilIcons, { name: "close", size: size || 24, color: color || "grey" });
};
exports.default = CloseIcon;
