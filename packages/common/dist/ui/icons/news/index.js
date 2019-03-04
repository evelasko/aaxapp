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
var NewsIcon = /** @class */ (function (_super) {
    __extends(NewsIcon, _super);
    function NewsIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewsIcon.prototype.render = function () {
        var activeColor = "#EB894A";
        var inactiveColor = "#BDBDBD";
        var _a = this.props, width = _a.width, height = _a.height, _b = _a.active, active = _b === void 0 ? false : _b;
        return (react_1.default.createElement(expo_1.Svg, { width: width || 32, height: height || 32, viewBox: "0 0 32 32" },
            react_1.default.createElement(expo_1.Svg.Path, { d: "M8 6c0-.552.448-1 1-1h17c.552 0 1 .448 1 1v21c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V11h3zM6 27c0 .552.448 1 1 1s1-.448 1-1V12H6zm5-14h5V8h-5zm7-4.5c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5zm0 2c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5zm0 2c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5zm-7 3c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5zm0 2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5zm0 2c0 .276.224.5.5.5h6c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-6c-.276 0-.5.224-.5.5zm0 3c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5zm0 4c0 .276.224.5.5.5h6c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-6c-.276 0-.5.224-.5.5zm0-2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5z", fill: active ? activeColor : inactiveColor })));
    };
    return NewsIcon;
}(react_1.Component));
exports.default = NewsIcon;
