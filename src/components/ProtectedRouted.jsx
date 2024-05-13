import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRouted = ({children}) => {
    const token = useSelector((store)=>store.token)
    const navigator = useNavigate();
    useEffect(()=>{
        if(!token){
            navigator('/');
        }
    },[])
  return (
    <Flex w={'100%'}>
      {
        token &&(
            <Flex w={'100%'}>
                {children}
            </Flex>
        )
      }
    </Flex>
  )
}

export default ProtectedRouted
