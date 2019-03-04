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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {},
    menuIcon: {
        marginLeft: 15
    }
});
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuButton.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(vector_icons_1.Ionicons, { name: "ios-menu", color: "gray", size: 32, onPress: function () { }, style: styles.menuIcon })));
    };
    return MenuButton;
}(react_1.default.Component));
exports.default = MenuButton;
