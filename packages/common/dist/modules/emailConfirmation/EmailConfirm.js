"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var apollo_1 = require("../../apollo");
var confirmEmailMutation = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation ConfirmEmailMutation ( $key: String! ) \n    { confirmEmail( key: $key ) { token error } }   \n"], ["\n    mutation ConfirmEmailMutation ( $key: String! ) \n    { confirmEmail( key: $key ) { token error } }   \n"])));
var EmailConfirm = function (_a) {
    var history = _a.history, match = _a.match, navigation = _a.navigation;
    var key = match && match.params.key ? match.params.key : navigation.getParam('key');
    var message = "UNO";
    apollo_1.client.mutate({ mutation: confirmEmailMutation, variables: { key: key } }).then(function (res) {
        if (res.data && res.data.confirmEmail.token) {
            var alertTitle = 'Confirmación de Email';
            var alertText = 'Hemos confirmado tu dirección de email, ya puedes iniciar sesión a tu cuenta.';
            if (react_native_1.Platform.OS === 'web') {
                alert(alertText);
                console.log('MADE IT!');
                history.push('/login');
            }
            else {
                react_native_1.Alert.alert(alertTitle, alertText, [{ text: 'ok', onPress: function () { navigation.navigate('Profile'); } }]);
            }
        }
    });
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.ActivityIndicator, null),
        react_1.default.createElement(react_native_1.Text, null, message)));
};
exports.default = EmailConfirm;
var templateObject_1;
