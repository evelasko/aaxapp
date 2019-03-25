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
var LogInIcon = function (_a) {
    var size = _a.size, color = _a.color;
    return (react_1.default.createElement(react_native_svg_1.default, { width: size || 48, height: size || 48, viewBox: "0 0 56 56" },
        react_1.default.createElement(react_native_svg_1.Path, { fill: color || 'grey', d: "M25.293 39.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l11.999-11.999c.093-.092.166-.203.217-.326.101-.244.101-.519 0-.764-.051-.123-.125-.234-.217-.327L26.707 15.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414L35.586 27H5c-.553 0-1 .447-1 1s.447 1 1 1h30.586L25.293 39.293z" }),
        react_1.default.createElement(react_native_svg_1.Path, { fill: color || 'grey', d: "M51 0H14c-.553 0-1 .447-1 1v21c0 .553.447 1 1 1s1-.447 1-1V2h35v52H15V34c0-.553-.447-1-1-1s-1 .447-1 1v21c0 .553.447 1 1 1h37c.553 0 1-.447 1-1V1c0-.553-.447-1-1-1z" })));
};
exports.default = LogInIcon;
