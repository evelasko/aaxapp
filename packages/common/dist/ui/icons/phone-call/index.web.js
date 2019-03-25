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
var react_native_svg_1 = __importStar(require("react-native-svg"));
var PhoneCall = function (_a) {
    var size = _a.size, color = _a.color;
    return (react_1.default.createElement(react_native_svg_1.default, { viewBox: "0 0 48 48", width: size || 48, height: size || 48 },
        react_1.default.createElement(react_native_svg_1.Path, { d: "M 8.791 40.829 L 7.172 39.208 L 22.38 24 L 7.172 8.792 L 8.791 7.17 L 24 22.379 L 39.209 7.17 L 40.828 8.792 L 25.62 24 L 40.828 39.208 L 39.209 40.829 L 24 25.62 Z", fill: color || "grey" })));
};
exports.default = PhoneCall;
