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
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var WIDTH = react_native_1.Dimensions.get('window').width;
var HEIGHT = react_native_1.Dimensions.get('window').height;
var styles = react_native_1.StyleSheet.create({
    container: { flex: 1, backgroundColor: 'lightgray' },
    headerContainer: {},
    linkContainer: { height: 100 },
    linkList: {},
    link: { flex: 1, fontSize: 20, padding: 6, paddingLeft: 14 },
    linkSocialContainer: {},
    linkSocialList: {},
    linkSocial: {}
});
var DrawerMenu = /** @class */ (function (_super) {
    __extends(DrawerMenu, _super);
    function DrawerMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navLink = function (nav, text) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.linkContainer, onPress: function () { } },
            react_1.default.createElement(react_native_1.Text, { style: styles.link }, text))); };
        return _this;
    }
    DrawerMenu.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.headerContainer },
                react_1.default.createElement(react_native_1.Text, null, "Menu Drawer")),
            react_1.default.createElement(react_native_1.View, { style: styles.linkList },
                this.navLink('Nosotros', 'Nosotros'),
                this.navLink('Soporte', 'Soporte')),
            react_1.default.createElement(react_native_1.View, { style: styles.linkSocialList })));
    };
    return DrawerMenu;
}(react_1.default.Component));
exports.default = DrawerMenu;
