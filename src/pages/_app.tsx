import type { AppProps } from 'next/app'
import "@/styles/globals.css";
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { designSystemChakraUi } from '@/config/designSystemChakraUi';
import { useApollo } from '../lib/apollo'
import { ApolloProvider } from '@apollo/client';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';

const theme = extendTheme(designSystemChakraUi)

export default function App({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient} >
            <ChakraProvider theme={theme}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ChakraProvider>
        </ApolloProvider>

    )
}