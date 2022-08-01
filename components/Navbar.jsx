import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
// import {covoLogo} from '../assets/images/covoLogo';


const Navbar = () => {
    return (

        <Flex p='2' borderBottom='1px' borderColo='gray.100'>
        <Box fontSize='xl' color='blue.400' fontWeight='bold'>
        {/* <Image src='./covoLogo.png' alt='Logo-image' /> */}
            <Link href='/' paddingLeft='2'>CavaTour</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant='outline' color='red.400'/>
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome/>}>Home of the page</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch/>}>Search here</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                    </Link>
               </MenuList>
            </Menu>
          
        </Box>
    </Flex>

    )
    
};

export default Navbar;