"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_apollo_1 = require("react-apollo");
exports.meQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n query MeQuery { me { user { id name lastname email group isAdmin } error } }\n"], ["\n query MeQuery { me { user { id name lastname email group isAdmin } error } }\n"])));
exports.withUser = react_apollo_1.graphql(exports.meQuery, {
    props: function (_a) {
        var data = _a.data;
        var user = null;
        if (data && !data.loading && data.me) {
            user = data.me.user;
        }
        console.log('USER at controller: ', user);
        return { user: user, loading: data ? data.loading : false };
    }, options: { fetchPolicy: 'network-only' }
});
var templateObject_1;
