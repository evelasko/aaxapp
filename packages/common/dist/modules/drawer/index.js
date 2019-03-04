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
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_navigation_1 = require("react-navigation");
var styles = react_native_1.StyleSheet.create({
    menuItem: {}
});
var DrawerScreen = /** @class */ (function (_super) {
    __extends(DrawerScreen, _super);
    function DrawerScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navigateToScreen = function (route) { return function () {
            var navigateAction = react_navigation_1.NavigationActions.navigate({
                routeName: route
            });
            _this.props.navigation.dispatch(navigateAction);
            _this.props.navigation.dispatch(react_navigation_1.DrawerActions.closeDrawer());
        }; };
        return _this;
    }
    DrawerScreen.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.ScrollView, null,
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(react_native_1.View, { style: styles.menuItem },
                        react_1.default.createElement(react_native_1.Text, { onPress: this.navigateToScreen('Content') }, "Home")),
                    react_1.default.createElement(react_native_1.View, { style: styles.menuItem },
                        react_1.default.createElement(react_native_1.Text, { onPress: this.navigateToScreen('About') }, "About")),
                    react_1.default.createElement(react_native_1.View, { style: styles.menuItem },
                        react_1.default.createElement(react_native_1.Text, { onPress: this.navigateToScreen('Contact') }, "Contact"))))));
    };
    return DrawerScreen;
}(react_1.Component));
exports.default = DrawerScreen;
