import { useMemo } from "react";
import {
    ApolloClient, ApolloLink, createHttpLink, HttpLink, InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { env } from "process";

let apolloClient;

function createApolloClient() {
    // Declare variable to store authToken
    let authorization_token;




    const BACKEND_LINK = createHttpLink({
        uri: process.env.NEXT_PUBLIC_APOLLO_URI + '/query',
    });

    const DATO_CMS_LINK = createHttpLink({
        uri: 'https://graphql.datocms.com/',
        //credentials: 'same-origin',
    });



    const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        if (typeof window !== 'undefined') {
            authorization_token = sessionStorage.getItem('authorization_token');
        }
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                Authorization: authorization_token ? authorization_token : "",
                'Apollo-Require-Preflight': 'true',
            }
        }
    });

    const authLinkDATOCMS = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
            }
        }
    });


    return new ApolloClient({
        ssrMode: typeof window !== 'undefined',
        link: ApolloLink.split(
            operation => operation.getContext().clientName === 'DATO_CMS_LINK',
            authLinkDATOCMS.concat(DATO_CMS_LINK), //if above 
            authLink.concat(BACKEND_LINK),
        ),

        cache: new InMemoryCache(),
        connectToDevTools: true,
    })
}

export function initApollo(initialState = null) {
    const client = apolloClient || createApolloClient();
    if (initialState) {
        client.cache.restore({
            ...client.extract(),
            ...initialState
        })
    }


    if (typeof window === 'undefined') {
        return client
    }


    if (!apolloClient) {
        apolloClient = client
    }


    return client
}


export function useApollo(initialState) {
    return useMemo(
        () => initApollo(initialState),
        [initialState]
    )
}

