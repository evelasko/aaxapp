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
var GoBackIcon = function (_a) {
    var size = _a.size, color = _a.color;
    return (react_1.default.createElement(react_native_svg_1.default, { width: size || 48, height: size || 48, viewBox: "0 0 500 500" },
        react_1.default.createElement(react_native_svg_1.Path, { fill: color || 'grey', d: "M317.32703027 407.61330673L159.71373354 250.00001 317.32703027 92.38671327l22.95922546 22.95922546L205.63218446 250.00001l134.65407127 134.65407127-22.95922546 22.95922546" })));
};
exports.default = GoBackIcon;
