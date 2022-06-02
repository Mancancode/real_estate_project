import Router from "next/router"
import Head from "next/head"
import Nprogress from 'nprogress'
import {CharkraProvider} from '@chakra-ui/react'
import Layout from '../component/Layout'
 


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
     
    </Head>
    <CharkraProvider> 
        <Layout>
          <Component {...pageProps}/>
        </Layout> 
      </CharkraProvider>
    </>
  )
}

export default MyApp
