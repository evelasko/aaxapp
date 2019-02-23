"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_client_1 = require("apollo-client");
var apollo_link_http_1 = require("apollo-link-http");
var react_native_1 = require("react-native");
var host = process.env.AAXAPI_URL ? process.env.AAXAPI_URL :
    react_native_1.Platform.OS === "android" ? "http://10.0.2.2:4000" : "http://localhost:4000";
exports.client = new apollo_client_1.ApolloClient({
    link: new apollo_link_http_1.HttpLink({
        uri: "" + host,
    }),
    cache: new apollo_cache_inmemory_1.InMemoryCache()
});
