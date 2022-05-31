import Router from "next/router"
import Head from "next/head"
import Nprogress from 'nprogress'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../component/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <CharkraProvider> 
        <Layout>
          <Component {...ChakraProvider}/>
        </Layout>
      </CharkraProvider>

    </Head>
    </>
  )
}

export default MyApp
