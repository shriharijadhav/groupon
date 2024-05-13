import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsEmojiFrown } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import oops from '../images/logos/oops.svg';

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
        
    <Button colorScheme='purple' onClick={()=>{setNavigateToHome(true)}}>Go to Home</Button>

        <Flex  w={'80%'} justifyContent={'center'} gap={'20px'} alignItems={'center'} direction={['column-reverse','column-reverse','row','row']}>

        <Flex w={['90%','90%','50%','50%']} bg={'red'} justifyContent={'center'} alignItems={'start'} direction={'column'}>
            <Text fontSize={'xxx-large'}>Oops! we can't </Text>
            <Text fontSize={'xxx-large'}> find that page</Text>
            <Text fontSize={'large'} p={'10px 0px'}>Try again later or keep exploring out of this world deals near you!
            </Text>
        </Flex>
        <Flex w={['90%','90%','50%','50%']} bg={'green'} justifyContent={'center'} alignItems={'center'}>
        <Image src={oops} w={'200px'} alt='pageNotFOund' />

        </Flex>
        </Flex>
    </Flex>
  )
}

export default PageNotFound
