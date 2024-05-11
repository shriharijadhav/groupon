import { Flex } from '@chakra-ui/react'
import React from 'react'
import HomepageGrid from './HomepageGrid'

const Homepage = () => {
  return (
    <Flex w={'100%'} justifyContent={'center'}>
        <HomepageGrid/>
    </Flex>
  )
}

export default Homepage
