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
var EventsIcon = /** @class */ (function (_super) {
    __extends(EventsIcon, _super);
    function EventsIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventsIcon.prototype.render = function () {
        var activeColor = "#EB894A";
        var inactiveColor = "#BDBDBD";
        var _a = this.props, width = _a.width, height = _a.height, _b = _a.active, active = _b === void 0 ? false : _b;
        return (react_1.default.createElement(expo_1.Svg, { width: width || 32, height: height || 32, viewBox: "0 0 32 32" },
            react_1.default.createElement(expo_1.Svg.Path, { d: "M5 7c0-1.105.895-2 2-2h3v2c0 .552.448 1 1 1h1c.552 0 1-.448 1-1V5h6v2c0 .552.448 1 1 1h1c.552 0 1-.448 1-1V5h3c1.105 0 2 .895 2 2v3H5zm22 20c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V11h22zm-17-7c0 3.314 2.686 6 6 6s6-2.686 6-6-2.686-6-6-6-6 2.686-6 6zm6-4l.917 2.738 2.887.026-2.32 1.718.867 2.754L16 21.56l-2.351 1.676.867-2.754-2.32-1.718 2.887-.026zm4-12.5c0-.276.224-.5.5-.5s.5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5zm-9 0c0-.276.224-.5.5-.5s.5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5z", fill: active ? activeColor : inactiveColor })));
    };
    return EventsIcon;
}(react_1.Component));
exports.default = EventsIcon;
