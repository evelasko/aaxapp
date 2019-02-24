import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { Platform } from 'react-native';

const host = process.env.AAXAPI_URL ? process.env.AAXAPI_URL :
                Platform.OS === "android" ? "10.0.2.2:4000" : "localhost:4000"

const wsLink = new WebSocketLink({ uri: `ws://${host}`, options: { reconnect: true } })
const httpLink = new HttpLink({ uri: `http://${host}`, credentials: 'include' })

const link = split(({query}) => {
    // split based on operation kind
    const { kind, operation } = getMainDefinition(query)
    return kind === "OperationDefinition" && operation === "subscription"
}, wsLink, httpLink)

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})