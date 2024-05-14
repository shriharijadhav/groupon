import { Flex, FormControl, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { clearTheSearchBarInput, debouncedDisplaySearchResults, displaySearchResults, emptySearchResultArray, getSearchInput } from '../../redux/actions';
import SingleSearchResult from './SingleSearchResult';
import { Link } from 'react-router-dom';


const GlobalSearchBar = () => {

  const [searchInputIsClearedFlag,setSearchInputIsClearedFlag] = useState(false)

  const searchInput = useSelector((store) =>store.searchInput);
  const allSearchResults = useSelector((store) => store.allSearchResults);
  const dispatch= useDispatch();

  const getTrimmedUrl = (url) =>{
    const parts = url.split('/');
    const lastPart = parts[parts.length-1];
    return lastPart
  }

 

   
  useEffect(()=>{
    if(searchInput.length === 0 && searchInputIsClearedFlag){
      if(searchInputIsClearedFlag){
        dispatch(emptySearchResultArray())
      }
      setSearchInputIsClearedFlag(false);
    }

    if(searchInput.length>0){
      setSearchInputIsClearedFlag(true)
    }
   

  },[searchInput.length,searchInputIsClearedFlag])

  return (
    <Flex w={'60%'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'5px'}>
      <FormControl >
            <InputGroup >
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                    cursor={'pointer'}
                />
                <Input type='text' placeholder='Search Groupon' rounded='full' variant={'ghost'} value={searchInput} onChange={(e)=>{dispatch(getSearchInput(e.target.value));dispatch(debouncedDisplaySearchResults(displaySearchResults,500))}} />
            </InputGroup>
            
        </FormControl>
          {     searchInput.length > 0 && (
            <Flex w={'100%'} bg={'white'}  justifyContent={'center'} alignItems={'center'} rounded={'md'} zIndex={10} >
              <Flex w={'100%'}   direction={'column'} gap={'5px'} rounded={'md'}>
              {allSearchResults.length > 0 && (
                <Flex w={'90%'} justifyContent={'right'}>
                <Text  >{allSearchResults.length} Item(s) found</Text>
                </Flex>
              )}

                {
                  allSearchResults.length > 0 ? (
                  <Flex w={'100%'} direction={'column'} maxHeight={'80vh'} overflowY={'scroll'} overflowX={'hidden'}>
                  {
                    allSearchResults.map((resultItem)=>(
                      <Link to={`/deals/${getTrimmedUrl(resultItem.attributes.url)}`} >
                      <SingleSearchResult  resultItem={resultItem} />
                      </Link>
                    ))
                  }
                  </Flex>
                  ):(
                    <Text>No Item found</Text>
                  )
                }
              </Flex>
              <Flex></Flex>
            </Flex>
          ) 
          }
    </Flex>
  )
}

export default GlobalSearchBar
