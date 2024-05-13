import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsEmojiFrown } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigator = useNavigate();
    const [navigateToHome,setNavigateToHome] = useState(false);

    useEffect(() => {
        if(navigateToHome){
            navigator('/')
        }
    },[navigateToHome])
  return (
    <Flex w={'100%'} h={'50vh'} justifyContent={'center'} gap={'20px'} alignItems={'center'} direction={'column'}>
       <Flex justifyContent={'center'} gap={'20px'} alignItems={'center'}>
            <BsEmojiFrown size={60} />
            <Text fontSize={'xx-large'}>Page not found
            </Text>
        </Flex>
        <Text fontSize={'large'}> This page seems to be off the map. Try navigating back or exploring elsewhere. Happy exploring!</Text>
        <Button colorScheme='purple' onClick={()=>{setNavigateToHome(true)}}>Go to Home</Button>
    </Flex>
  )
}

export default PageNotFound
