import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>277 Fifth Nomad</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
          key='viewport'
        />
        <meta
          name='description'
          content='A templatized version of a pre-existing site'
          key='description'
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

