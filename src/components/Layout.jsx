import { Flex } from '@chakra-ui/react'
import React from 'react'
import DefaultNavbar from './Navbar/DefaultNavbar'
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <Flex w={'100vw'}   direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <DefaultNavbar/>
       
        <Flex w={'100%'} bg={'green'}>
            <Outlet/>
        </Flex>
        
   </Flex>
  )
}

export default Layout
