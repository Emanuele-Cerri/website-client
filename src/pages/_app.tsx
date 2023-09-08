import type { AppProps } from 'next/app'
import "@/styles/globals.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}