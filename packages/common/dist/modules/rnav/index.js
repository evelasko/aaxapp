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
//@ts-ignore
var core_1 = require("@react-navigation/core");
//@ts-ignore
var web_1 = require("@react-navigation/web");
var react_1 = __importDefault(require("react"));
function About() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "About Screen")));
}
About.path = "";
About.navigationOptions = {
    title: "About",
    linkName: "About Page"
};
function Home() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Home Screen"),
        react_1.default.createElement(web_1.Link, { routeName: "Profile", params: { name: "brent" } }, "Go to Brent's Profile")));
}
Home.path = "";
Home.navigationOptions = {
    title: "Home",
    linkName: "Home Page"
};
var Profile = function (_a) {
    var navigation = _a.navigation;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null,
            navigation.getParam("name"),
            "'s Profile"),
        react_1.default.createElement(web_1.Link, { routeName: "Home" }, "Go Home")));
};
Profile.path = "person/:name";
Profile.navigationOptions = function (_a) {
    var navigation = _a.navigation;
    return ({
        title: navigation.getParam("name"),
        linkName: "Profile Page"
    });
};
var SidebarView = /** @class */ (function (_super) {
    __extends(SidebarView, _super);
    function SidebarView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SidebarView.prototype.render = function () {
        var _a = this.props, descriptors = _a.descriptors, navigation = _a.navigation;
        var activeKey = navigation.state.routes[navigation.state.index].key;
        var descriptor = descriptors[activeKey];
        return (react_1.default.createElement("div", { style: { display: "flex", height: "100%", justifyContent: "stretch" } },
            react_1.default.createElement("div", { style: {
                    width: 300,
                    backgroundColor: "#efefef",
                    borderRight: "1px solid #99b"
                } },
                react_1.default.createElement("h1", null, "Hello, Navigation"),
                react_1.default.createElement(web_1.Link, { routeName: "Home" }, "Home"),
                react_1.default.createElement(web_1.Link, { routeName: "About" }, "About"),
                react_1.default.createElement(web_1.Link, { routeName: "Profile", params: { name: "jamie" } }, "About Jamie"),
                react_1.default.createElement(web_1.Link, { routeName: "Profile", params: { name: "brent" } }, "About Brent")),
            react_1.default.createElement("div", null,
                react_1.default.createElement(core_1.SceneView, { component: descriptor.getComponent(), navigation: descriptor.navigation }))));
    };
    return SidebarView;
}(react_1.default.Component));
var AppNavigator = core_1.createNavigator(SidebarView, core_1.SwitchRouter({
    Home: Home,
    About: About,
    Profile: Profile
}), {});
var RNav = web_1.createBrowserApp(AppNavigator);
exports.default = RNav;
