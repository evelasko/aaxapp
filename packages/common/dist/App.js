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
var native_1 = require("mobx-react/native");
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var apollo_1 = require("./apollo");
var index_1 = __importDefault(require("./routes/index"));
var store_1 = __importDefault(require("./store"));
var AppContainer = /** @class */ (function (_super) {
    __extends(AppContainer, _super);
    function AppContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppContainer.prototype.render = function () {
        return (react_1.default.createElement(react_apollo_1.ApolloProvider, { client: apollo_1.client },
            react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
                    react_1.default.createElement(native_1.Provider, { appStore: store_1.default },
                        react_1.default.createElement(index_1.default, null))))));
    };
    return AppContainer;
}(react_1.default.Component));
exports.default = AppContainer;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        width: '100%',
        maxWidth: 900,
    }
});
