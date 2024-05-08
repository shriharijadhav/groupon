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
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import DummySearchBar from './DummySearchBar'
import { TbLocation } from "react-icons/tb";


const MainMenu = ({menuName}) => {
  return (
    <Menu variant={'ghost'} >
    <MenuButton bg={'transparent !important'}   as={Button} rightIcon={<ChevronDownIcon boxSize={7} mt={'6px'} color={'white'} />} p={'10px 15px'} pr={'5px'} _hover={{textDecoration:'underline',textDecorationColor:'white',textUnderlineOffset:'5px',bg:'transparent'}} textUnderlineOffset={'5px'} variant={'ghost'} >
      <Text color={'white'} fontSize={'3xl'} fontWeight={'700'}> {menuName}</Text>
    </MenuButton>
    <MenuList matchWidth={true} display={'flex'} flexDirection={'column'}  w={'650px'} position={'absolute'} left={-240}>
      <DummySearchBar/>
      
      <MenuItem>
        <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'} color={'#0077DB'}>
            <TbLocation/>
            <Text>Current Location</Text>
        </Flex>
      </MenuItem>
    </MenuList>
  </Menu>  )
}

export default MainMenu
