"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var expo_1 = require("expo");
var react_1 = __importStar(require("react"));
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logo.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height;
        return (react_1.default.createElement(expo_1.Svg, { width: width, height: height, viewBox: "0 0 300 300" },
            react_1.default.createElement(expo_1.Svg.LinearGradient, { id: "a", x1: "225.8436", y1: "278.2705", x2: "225.8436", y2: "133.4908" },
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "0", stopColor: "#c77139" }),
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "1", stopColor: "#ed874a" })),
            react_1.default.createElement(expo_1.Svg.Path, { d: "M265.85 277.52l-2.75-.25c-10.25-.99-15.16-4.48-37.78-56.2l-38.35-87.59-1.17 6.94 34.93 80.65c5.37 12.18 8.55 25.36 9.13 36.31.59 11.19-1.23 19.15-12.87 19.89l-5.21.25.04.75h54.08l-.05-.75z", fill: "url(#a)" }),
            react_1.default.createElement(expo_1.Svg.LinearGradient, { id: "b", x1: "184.7307", y1: "278.7326", x2: "184.7307", y2: "170.7268" },
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "0", stopColor: "#c77139" }),
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "1", stopColor: "#ed874a" })),
            react_1.default.createElement(expo_1.Svg.Path, { d: "M183.3 210.59c-.53-2.91-1.58-5.93-1.85-8.95-.36-3.88-.21-7.94-1.4-11.57-2.15-6.57-4.47-13.06-7.19-19.34l-9.94 23.61c2.34 5.08 4.63 10.2 6.99 15.24 1.14 2.44 1.69 5.03 2.36 7.58 1.86 7.08 3.83 14.56 8.38 20.47 3.87 5.02 7.81 10.11 11.74 15.15 1.28 1.64 1.31 3.26.35 5.05-1.7 3.17-.94 5.37 2.43 6.76 1.53.63 2.42 1.68 3.22 3.05 1.53 2.6.88 5.61 1.77 8.33.55 1.67 1.96 2.65 3.3 2.77 1.02.1 2.06-1.53 2.34-2.69 1.37-5.76.92-14.12-2.18-19.4-8.64-14.72-17.28-29.37-20.32-46.06z", fill: "url(#b)" }),
            react_1.default.createElement(expo_1.Svg.LinearGradient, { id: "c", x1: "94.5445", y1: "166.1707", x2: "94.5445", y2: "140.7793" },
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "0", stopColor: "#c77139" }),
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "1", stopColor: "#ed874a" })),
            react_1.default.createElement(expo_1.Svg.Path, { d: "M126.52 162.26c4.63.83 9.26 1.86 14 2.17 2.67.18 4.42.7 5.84 1.74l8.62-22.56c-3.84 2.22-8.39 2.95-12.8 2.75-8.83-.39-18.98 2.18-28.13 2.73-7.86.47-16.37-.14-24.29-.07-6.16.05-12.59 1.24-18.87 1.76-6.74.56-14.15.06-19.76-3.88-3.98-2.79-8.19-5.57-13.15-6.1-2.77-.29-4.62 2.1-3.59 4.74.42 1.07 1.38 2.01 2.21 2.8 7.21 6.88 18.58 7.75 28.36 8.94 11.5 1.4 23.22 2.43 34.69 2.84 8.94.31 18 .55 26.87 2.14z", fill: "url(#c)" }),
            react_1.default.createElement(expo_1.Svg.LinearGradient, { id: "d", x1: "201.1719", y1: "215.6406", x2: "201.1719", y2: "212.7358" },
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "0", stopColor: "#c77139" }),
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "1", stopColor: "#ed874a" })),
            react_1.default.createElement(expo_1.Svg.Path, { fill: "url(#d)", d: "M215.11 212.74h-28.84l.88 2.9h28.93z" }),
            react_1.default.createElement(expo_1.Svg.LinearGradient, { id: "e", x1: "118.9822", y1: "278.2705", x2: "118.9822", y2: "21.2674" },
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "0", stopColor: "#c77139" }),
                react_1.default.createElement(expo_1.Svg.Stop, { offset: "1", stopColor: "#ed874a" })),
            react_1.default.createElement(expo_1.Svg.Path, { d: "M153.53 212.74l8.15-21.1.02-.06 10.08-23.77c1.54-3.74 2.56-7.86 4.81-11.12 3.87-5.59 5.6-12.24 5.9-18.94.06-1.25.07-2.51.03-3.76-.1-3.25-.4-6.51-.42-9.79-.01-1.65.05-3.3.25-4.94.5-4.23-.44-8.12-4.02-10.78-1.91-1.42-3.73-2.84-5.07-4.81-1.81-2.64-3.19-5.72-5.45-7.86-2.99-2.83-4.67-6.18-6.05-9.85-.13-.35-.2-.58.08-.93 2.83-3.61.66-9.06-3.15-10.88-.91-.43-1.87-1.07-2.05-2.19-.54-3.39-2.11-4.97-5.55-5.44-.4-.05-.7-.14-.91-.55-5.36-10.64-12.61-20.01-20.74-28.94-2.67-2.93-2.79-6.8-3.91-10.3-.18-.57-.11-1.22-.15-1.83-.4.59-.87 1.15-1.18 1.78-.16.33-.05.8-.05 1.21 0 .26-.12.69-.33.45-.68-.8-2.17-1.42-1.9-2.43.64-2.33-1.08-2.77-2.36-3.66-.17-.12-.38-.16-.58-.24.14.15.31.28.42.45.25.42.47.85.7 1.28-.14-.02-.31-.01-.41-.08-.81-.61-1.61-1.24-2.4-1.88-.18-.14-.32-.33-.48-.5-.04.36-.26.93-.1 1.06.72.61.9 1.59 1.45 2.18 2.25 2.39 3.31 5.49 5.02 8.18 2.45 3.87 4.44 8.06 6.95 11.9 4.64 7.09 8.06 15 11.69 22.63.39.82.54 1.22-.39 1.76-1.64.95-2.83 2.42-3.98 3.92-1.29 1.66-1.3 3.89-2.4 5.55-2.07 3.12-.94 8.71 2.69 9.68 2.69.72 4.03 2.69 6 4.07 3.49 2.44 4.93 5.61 3.7 9.84-.23.78-.53.97-1.3.91-1.67-.13-3.29-.7-5.01-.46-8.34 1.16-16.77 2.96-25.21 3.13-4.29.08-8.65-.42-12.91-.17-4.7.28-9.38 1.31-14.11 1.49-5.17.19-10.4-.41-15.51.15-5.28.58-10.3.3-15.3-1.33-.87-.28-2.36-1.1-2.56-.53-.49 1.35 1.05 1.72 1.99 2.3.22.14.4.34.6.52-.24.03-.49.11-.72.09-.6-.06-1.2-.16-1.8-.24.58.48 1.1 1.15 1.77 1.4.86.32 1.9.54 2.77.36 1.88-.38 3.4.24 4.87 1.27.25.18.47.39.71.59-.24.16-.48.3-.7.48-.47.38-1.68.6-1.38.96.53.63 1.46.93 2.55.65 3.54-.88 6.91-2.67 10.7-2.2 4.38.54 9.03 1.17 13.14 1.63 7.23.82 15.45-.52 22.92-.43 6.79.08 14.13.66 21.13 1.13 2.98.2 6.52.15 8.69 2.28 6.21 6.09 12.57 12.56 16.49 20.43.59 1.18.74 2.9-.01 3.73l-10.69 28.28c.01.01.01.02.02.03l-27.82 68.02c-14.67 35.81-17.16 39.54-27.35 40.78l-1.99.25v.75h59.43v-.75l-6.47-.25c-15.91-.5-11.69-10.69-.5-39.54l8.53-22.1h16.19l-.95-2.9h-14.12z", fill: "url(#e)" })));
    };
    return Logo;
}(react_1.Component));
exports.default = Logo;