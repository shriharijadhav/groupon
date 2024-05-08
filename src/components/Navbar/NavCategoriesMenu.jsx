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
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const NavCategoriesMenu = ({variant,menuName}) => {
  return (
    <Menu >
    <MenuButton as={Button} rightIcon={<ChevronDownIcon color={'white'} />} p={'10px 15px'} pr={'5px'} _hover={{textDecoration:'underline',textDecorationColor:'white',textUnderlineOffset:'5px'}} textUnderlineOffset={'5px'} variant={variant} border='1px solid white'>
      <Text color={'white'}> {menuName}</Text>
    </MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  </Menu>  )
}

export default NavCategoriesMenu
