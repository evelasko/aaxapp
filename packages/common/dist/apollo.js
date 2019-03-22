"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_client_1 = require("apollo-client");
var apollo_link_1 = require("apollo-link");
var apollo_link_http_1 = require("apollo-link-http");
var apollo_link_ws_1 = require("apollo-link-ws");
var apollo_utilities_1 = require("apollo-utilities");
var react_native_1 = require("react-native");
var host = react_native_1.Platform.OS === "android" ? "10.0.2.2:4000" : "localhost:4000";
// const host = `api.alicialonso.org/mobile`
var wsLink = new apollo_link_ws_1.WebSocketLink({ uri: "ws://" + host, options: { reconnect: true } });
var httpLink = new apollo_link_http_1.HttpLink({ uri: "http://" + host, credentials: 'omit' });
var link = apollo_link_1.split(function (_a) {
    var query = _a.query;
    // split based on operation kind
    var _b = apollo_utilities_1.getMainDefinition(query), kind = _b.kind, operation = _b.operation;
    return kind === "OperationDefinition" && operation === "subscription";
}, wsLink, httpLink);
var cache = new apollo_cache_inmemory_1.InMemoryCache({
    cacheRedirects: {
        Query: {
            oneEvent: function (_, _a, _b) {
                var id = _a.id;
                var getCacheKey = _b.getCacheKey;
                return getCacheKey({ __typename: 'Event', id: id });
            },
            oneNews: function (_, _a, _b) {
                var id = _a.id;
                var getCacheKey = _b.getCacheKey;
                return getCacheKey({ __typename: 'News', id: id });
            },
            allAlerts: function (_, _a, _b) {
                var id = _a.id;
                var getCacheKey = _b.getCacheKey;
                return getCacheKey({ __typename: 'News', id: id });
            },
            allCalls: function (_, _a, _b) {
                var id = _a.id;
                var getCacheKey = _b.getCacheKey;
                return getCacheKey({ __typename: 'News', id: id });
            }
        }
    }
});
exports.client = new apollo_client_1.ApolloClient({ link: link, cache: cache });
