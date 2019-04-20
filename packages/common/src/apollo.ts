import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// const host = Platform.OS === "android" ? "10.0.2.2:4000" : "localhost:4000"

const host = `api.alicialonso.org/mobile`

const wsLink = new WebSocketLink({ uri: `wss://${host}`, options: { reconnect: true } })
const httpLink = new HttpLink({ uri: `https://${host}`, credentials: 'omit' })

const link = split(({query}) => {
    // split based on operation kind
    const { kind, operation } = getMainDefinition(query)
    return kind === "OperationDefinition" && operation === "subscription"
}, wsLink, httpLink)

const cache:InMemoryCache = new InMemoryCache({
    cacheRedirects: {
        Query: {
            oneEvent: (_, {id}, { getCacheKey }) => getCacheKey({ __typename: 'Event', id }),
            oneNews: (_, {id}, { getCacheKey }) => getCacheKey({ __typename: 'News', id }),
            allAlerts: (_, {id}, { getCacheKey }) => getCacheKey({ __typename: 'News', id }),
            allCalls: (_, {id}, { getCacheKey }) => getCacheKey({ __typename: 'News', id })
        }
    }
})

export const client = new ApolloClient({ link, cache })