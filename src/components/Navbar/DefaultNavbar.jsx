import { Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineQrcode } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import NavCategoriesMenu from './NavCategoriesMenu';
import SignInMenu from './SignInMenu';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import MainMenu from './MainMenu';
import GlobalSearchBar from './GlobalSearchBar';
 


const DefaultNavbar = () => {
    const token = useSelector((store) =>store.token);
  return (
    <Flex w={'100%'} bg={'#230F33'} h={'225px'} justifyContent={'center'} >
        <Flex w={'80%'} direction={'column'} p={'5px 0px'}>

             <Flex w={'100%'}  justifyContent={'end'} gap={'5px'} fontSize={'small'} color={'white'} _hover={{textUnderlineOffset:'5px'}}>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'0px'}  p={'2px'} cursor={'pointer'} _hover={{textDecoration:'underline'}}>
                    <IconButton 
                    color={'white'}
                    variant={'ghost'}
                    icon={<AiOutlineQrcode /> }
                    padding={'0px'}
                    _hover={{bg:'treatment'}}
                    boxSize={2}
                    />
                    <Text ml={'-8px'} mt={'-2px'} pl={'0px'} >Get the Groupon App</Text>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'0px'}  p={'2px'} ml={'-5px'} cursor={'pointer'} _hover={{textDecoration:'underline'}}>
                    <IconButton 
                    ml={'0px'}
                    color={'white'}
                    variant={'ghost'}
                    icon={<BsSuitHeart /> }
                    padding={'0px'}
                    _hover={{bg:'treatment'}}
                    boxSize={1}
                    />
                    <Text ml={'-8px'} mt={'-2px'} pl={'0px'} >My Wishlist</Text>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'0px'}  p={'2px'} cursor={'pointer'} _hover={{textDecoration:'underline'}}>
                    <Text ml={'5px'} mt={'-2px'} pl={'0px'} >Sell On Groupon</Text>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'0px'}  p={'2px'} cursor={'pointer'} _hover={{textDecoration:'underline'}}>
                    <Text ml={'5px'} mt={'-2px'} pl={'0px'} >Help</Text>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'0px'}  p={'2px'} cursor={'pointer'} _hover={{textDecoration:'underline'}}>
                    <Link to={'/login'}>
                    <Text ml={'5px'} mt={'-2px'} pl={'0px'} >Sign Up</Text>
                    </Link>
                </Flex>
  
            </Flex>
            
            <Flex w={'100%'}  justifyContent={'space-between'}  p={'10px 10px'}>
                <Flex justifyContent={'center'} align={'center'} gap={'20px'}>
                    <Text fontSize={'2xl'} color={'white'} fontWeight={'900'}>GROUPON</Text>
                    <NavCategoriesMenu menuName='Categories' variant='link'/>
                </Flex>
                <Flex justifyContent={'center'} align={'center'} gap={'20px'}>
                    {
                        token ? (<Logout/>):(<SignInMenu />)
                    }
                </Flex>
            </Flex>

            <Flex w={'100%'}  justifyContent={'center'}  p={'10px 0px'}>
                <Flex w={'50%'} justifyContent={'center'}   align={'center'} gap={'20px'} position={'relative'}>
                     <MainMenu  menuName='Chicago' />
                </Flex>
            </Flex>

            <Flex w={'100%'}  justifyContent={'center'} alignItems={'center'}  p={'10px 0px'}>
                <GlobalSearchBar />
            </Flex>

        </Flex>
    </Flex>
  )
}

export default DefaultNavbar
