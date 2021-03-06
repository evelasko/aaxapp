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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var expo_1 = require("expo");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var screen = react_native_1.Dimensions.get('window');
var ASPECT_RATIO = screen.width / screen.height;
var LATITUDE_DELTA = 0.005;
var LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
var EventMap = /** @class */ (function (_super) {
    __extends(EventMap, _super);
    function EventMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventMap.prototype.render = function () {
        var latlng = this.props.latlng;
        return (react_1.default.createElement(expo_1.MapView, { style: { flex: 1 }, initialRegion: __assign({}, latlng, { latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA }) }));
    };
    return EventMap;
}(react_1.default.Component));
exports.default = EventMap;
