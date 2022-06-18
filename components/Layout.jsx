import Head from "next/head";
import {Box} from "@chakra-ui/react";
// import Navbar from './Navbar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children}) => (
    <>
    <Head>
        <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
        <header>
            Navbar goes here
            <Navbar/>
        </header>
        <main>
            {children}
        </main>    

        <footer>
          Footer goes here 
            <Footer/>
        </footer>
    </Box>
    </>

);
export default Layout;