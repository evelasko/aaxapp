"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var gobackIcon_1 = __importDefault(require("../../ui/icons/goback/gobackIcon"));
var LogInIcon_1 = __importDefault(require("../../ui/icons/login/LogInIcon"));
var index_web_1 = __importDefault(require("../../ui/icons/user/index.web"));
var styles = react_native_1.StyleSheet.create({
    headerContainer: { width: '100%', height: 100, justifyContent: 'space-around' },
    headerButtonsRight: { paddingRight: 20 },
    headerButtonsLeft: { paddingLeft: 20, flex: 2 },
    headerTitle: { alignItems: 'center', flex: 1 },
    headerTitleText: { fontWeight: 'bold', fontSize: 16, color: '#2E2E2E' }
});
var HeaderMain = function (_a) {
    var goBack = _a.goBack, goProfile = _a.goProfile, goLogin = _a.goLogin, title = _a.title, goMenu = _a.goMenu;
    return (react_1.default.createElement(react_native_1.View, { style: styles.headerContainer },
        react_1.default.createElement(react_native_1.View, { style: styles.headerButtonsLeft }, goBack && react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { goBack(); } },
            react_1.default.createElement(gobackIcon_1.default, { size: 48, color: 'grey' }))),
        react_1.default.createElement(react_native_1.View, { style: styles.headerTitle },
            react_1.default.createElement(react_native_1.Text, { style: styles.headerTitleText }, title ? title : 'aaXapp')),
        react_1.default.createElement(react_native_1.View, { style: styles.headerButtonsRight },
            goLogin && react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { goLogin(); } },
                react_1.default.createElement(LogInIcon_1.default, { size: 32, color: 'grey' })),
            goProfile && react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return goProfile(); } },
                react_1.default.createElement(index_web_1.default, { size: 48, color: 'grey' })))));
};
exports.default = HeaderMain;
