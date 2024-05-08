import { Flex, FormControl } from '@chakra-ui/react'
import React from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const DummySearchBar = () => {
  return (
    <Flex w={'100%'}>
      <FormControl >
            <InputGroup >
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray' />}
                    cursor={'pointer'}
                />
                <Input type='text' placeholder='Zip Code, Neighborhood, City'   rounded='full' variant={'ghost'}  />
            </InputGroup>
        </FormControl>
    </Flex>
  )
}

export default DummySearchBar
