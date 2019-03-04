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
var DateIcon = /** @class */ (function (_super) {
    __extends(DateIcon, _super);
    function DateIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateIcon.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, color = _a.color;
        return (react_1.default.createElement(expo_1.Svg, { width: width || 24, height: height || 24, viewBox: "0 0 24 24", "stroke-linecap": "round", "stroke-linejoin": "round" },
            react_1.default.createElement(expo_1.Svg.Path, { d: "M16 2v4M8 2v4M3 10h18", stroke: color || "#BDBDBD", fill: "none" })));
    };
    return DateIcon;
}(react_1.Component));
exports.default = DateIcon;
