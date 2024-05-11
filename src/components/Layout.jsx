import { Flex } from '@chakra-ui/react'
import React from 'react'
import DefaultNavbar from './Navbar/DefaultNavbar'
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import { Dummy } from './Dummy';


const Layout = () => {
  
  return (
    <Flex w={'100vw'}   direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <DefaultNavbar/>
         

        
        <Flex w={'100%'} >
            <Outlet/>
        </Flex>

        <Footer/>

   </Flex>
  )
}

export default Layout
