import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  border,
  Text,
  Flex,
  Checkbox,
  Box,
  Spacer,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Login from '../Login'
import { SlTag } from "react-icons/sl";
import { RxCountdownTimer } from "react-icons/rx";
import { BsCardChecklist } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";





const SignInMenu = () => {
  return (
    <Menu >
    <MenuButton as={Button} variant={'link'} rightIcon={<ChevronDownIcon color={'white'} />} p={'10px 15px'} pr={'5px'} _hover={{textDecoration:'underline',textDecorationColor:'white',textUnderlineOffset:'5px'}} textUnderlineOffset={'5px'}   border='1px solid white'>
      <Text color={'white'}> Sign In</Text>
    </MenuButton>
    <MenuList >
      <Flex w={'550px'} direction={'column'} p={'0px 10px'}>
            <Flex w={'100%'} justifyContent={'center'} borderBottom={'1px solid lightgray '} p={'10px 0px'}>
                <Text>Please use email "<Text as={'span'} color={'#0d71e0'}>eve.holt@reqres.in</Text>"  & password "<Text as={'span'} color={'#0d71e0'}>cityslicka</Text>"  for sign in</Text>
            </Flex>
            <Flex w={'100%'}>
            <Flex w={'42%'} direction={'column'}  justifyContent={'center'} gap={'25px'}  alignItems={'center'}  borderRight={'1px solid lightgray'}  p={'5px 0px'}>
            <Flex w={'90%'} direction={'column'} gap={'15px'} justifyContent={'start'} alignItems={'start'} p={'0px 0px'} pb={'20px'} borderBottom={'1px solid lightgray'}>
                <Flex cursor={'pointer'} gap={'10px'} justifyContent={'center'}  alignItems={'center'} >
                   <Box     display={'flex'} justifyContent={'center'} alignItems={'center'}> <SlTag  /></Box>
                    <Text fontSize={'sm'} >My Groupons</Text>
                </Flex>
                <Flex cursor={'pointer'} gap={'10px'} justifyContent={'center'}  alignItems={'center'} >
                   <Box     display={'flex'} justifyContent={'center'} alignItems={'center'}> <RxCountdownTimer   /></Box>
                    <Text  fontSize={'sm'} >Buy It Again</Text>
                </Flex>
                <Flex cursor={'pointer'} gap={'10px'} justifyContent={'center'}  alignItems={'center'} >
                   <Box     display={'flex'} justifyContent={'center'} alignItems={'center'}> <BsCardChecklist  /></Box>
                    <Text   fontSize={'sm'}>My Groupon+ Deals</Text>
                </Flex>
                <Flex cursor={'pointer'} gap={'10px'} justifyContent={'center'}  alignItems={'center'} >
                   <Box     display={'flex'} justifyContent={'center'} alignItems={'center'}> <BsSuitHeart  /></Box>
                    <Text  fontSize={'sm'} >My Wishlist</Text>
                </Flex>
                <Flex cursor={'pointer'} gap={'10px'} justifyContent={'center'}  alignItems={'center'} >
                   <Box     display={'flex'} justifyContent={'center'} alignItems={'center'}> <FaMagic  /></Box>
                    <Text  fontSize={'sm'} >Try Groupon's New Design</Text>
                </Flex>
            </Flex>
             <Flex w={'90%'} direction={'column'} gap={'10px'} justifyContent={'start'} alignItems={'start'}  p={'0px 0px'} pb={'15px'}  >
                <Text cursor={'pointer'} fontSize={'sm'}>Account</Text>
                <Text cursor={'pointer'} fontSize={'sm'}>Redeem Gift Card</Text>
                <Text cursor={'pointer'} fontSize={'sm'}>Not a Member? Sign up</Text>
            </Flex>

         </Flex>
        <Flex w={'58%'} direction={'column'}  p={'15px 0px'} >
            <Login/>  
        </Flex>
            </Flex>
      </Flex>
    </MenuList>
  </Menu>  )
}

export default SignInMenu
