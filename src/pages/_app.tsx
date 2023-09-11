import type { AppProps } from 'next/app'
import "@/styles/globals.css";
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { designSystemChakraUi } from '@/config/designSystemChakraUi';
import { useApollo } from '../lib/apollo'
import { ApolloProvider } from '@apollo/client';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import { Open_Sans, Inter, Roboto } from 'next/font/google'


const theme = extendTheme(designSystemChakraUi)
const open_sans = Open_Sans({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
})
export default function App({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient} >
            <main className={open_sans.className}>

                <ChakraProvider theme={theme}>


                    <Header />
                    <Component  {...pageProps} />
                    <Footer />
                </ChakraProvider>
            </main>
        </ApolloProvider>

    )
}