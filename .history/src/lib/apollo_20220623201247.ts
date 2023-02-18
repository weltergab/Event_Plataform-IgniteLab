import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pywx0h2kp101xtf4npbpzl/master',
    cache: new InMemoryCache()
})