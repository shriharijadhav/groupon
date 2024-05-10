import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flex } from '@chakra-ui/react'
import Login from './components/Login'
import DefaultNavbar from './components/Navbar/DefaultNavbar'
import { Outlet } from 'react-router-dom'
import AllRoutes from './components/AllRoutes'

function App() {
 
  return (
    <Flex w={'100vw'}   direction={'column'} justifyContent={'center'} alignItems={'center'}>
      
      <AllRoutes/>
      </Flex>
  )
}

export default App
