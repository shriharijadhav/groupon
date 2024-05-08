import { Flex, FormControl } from '@chakra-ui/react'
import React from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const GlobalSearchBar = () => {
  return (
    <Flex w={'50%'}>
      <FormControl >
            <InputGroup >
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                    cursor={'pointer'}
                />
                <Input type='text' placeholder='Search Groupon' rounded='full' variant={'ghost'}  />
            </InputGroup>
        </FormControl>
    </Flex>
  )
}

export default GlobalSearchBar
