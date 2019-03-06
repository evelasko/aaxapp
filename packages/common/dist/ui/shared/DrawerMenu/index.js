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
var index_1 = __importDefault(require("../../icons/logo/index"));
var WIDTH = react_native_1.Dimensions.get('window').width;
var HEIGHT = react_native_1.Dimensions.get('window').height;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#2E2E2E', justifyContent: 'space-between'
    },
    headerContainer: {
        width: '100%', alignItems: 'center', justifyContent: 'center'
    },
    logoContainer: {
        width: '100%', height: 300, marginTop: 50, alignItems: 'center', justifyContent: 'center'
    },
    linkList: {
        borderTopWidth: react_native_1.StyleSheet.hairlineWidth, borderTopColor: '#555555', width: '100%'
    },
    linkContainer: {
        justifyContent: 'center',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth, borderBottomColor: '#555555'
    },
    link: {
        paddingLeft: 20, marginTop: 15, marginBottom: 15,
        fontSize: 14, fontWeight: '100', textTransform: 'uppercase', color: '#999999', letterSpacing: 1
    },
    linkSocialContainer: {},
    linkSocialList: { flexDirection: 'row', justifyContent: 'space-evenly' },
    linkSocial: {},
    footerContainer: { marginBottom: 35 },
    footerText: {
        fontWeight: '100', fontSize: 10, color: '#999999',
        alignSelf: 'center', marginTop: 15
    }
});
var DrawerMenu = /** @class */ (function (_super) {
    __extends(DrawerMenu, _super);
    function DrawerMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navLink = function (nav, text) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.linkContainer, onPress: function () { return _this.props.navigation.navigate(nav); } },
            react_1.default.createElement(react_native_1.Text, { style: styles.link }, text))); };
        return _this;
    }
    DrawerMenu.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.headerContainer },
                react_1.default.createElement(react_native_1.View, { style: styles.logoContainer },
                    react_1.default.createElement(index_1.default, { width: 100, height: 100 })),
                react_1.default.createElement(react_native_1.View, { style: styles.linkList },
                    this.navLink('Nosotros', 'Nosotros'),
                    this.navLink('Soporte', 'Soporte'),
                    this.navLink('Privacidad', 'Privacidad'))),
            react_1.default.createElement(react_native_1.View, { style: styles.footerContainer },
                react_1.default.createElement(react_native_1.View, { style: styles.linkSocialList },
                    react_1.default.createElement(vector_icons_1.AntDesign, { name: 'twitter', style: styles.linkSocial, color: '#C77139', size: 32 }),
                    react_1.default.createElement(vector_icons_1.Entypo, { name: 'instagram', style: styles.linkSocial, color: '#C77139', size: 32 }),
                    react_1.default.createElement(vector_icons_1.Entypo, { name: 'facebook', style: styles.linkSocial, color: '#C77139', size: 32 }),
                    react_1.default.createElement(vector_icons_1.AntDesign, { name: 'linkedin-square', style: styles.linkSocial, color: '#C77139', size: 32 })),
                react_1.default.createElement(react_native_1.Text, { style: styles.footerText }, "@ 2019 Fundaci\u00F3n Alicia Alonso"))));
    };
    return DrawerMenu;
}(react_1.default.Component));
exports.default = DrawerMenu;
