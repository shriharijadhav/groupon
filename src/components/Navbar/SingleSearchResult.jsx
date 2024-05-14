import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import StarRating from '../homepage/StarRating';
import { clearTheSearchBarInput } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const SingleSearchResult = ({resultItem}) => {
    const productImageUrl = resultItem?.attributes?.med_image;
    const productTitle = resultItem?.attributes?.title_array[0].length>40 ? resultItem?.attributes?.title_array[0].slice(0,40)+'...' :resultItem?.attributes?.title_array[0];
    const productStreet =  JSON.parse(resultItem.attributes.redemption_locations_short )[0].streetAddress1;
    const productCity =   JSON.parse(resultItem.attributes.redemption_locations_short )[0].city;
    const price_array =  JSON.parse(resultItem.attributes.price_array);
    const price = Number((price_array[0]))/100;
    const rating =   resultItem.attributes.rating_value;
    const rating_count =   resultItem.attributes.rating_count;
    console.log(productImageUrl);


    const dispatch = useDispatch();

  return (
    <Flex w={'100%'} p={'10px 10px'}   gap={'10px'} onClick={()=>{dispatch(clearTheSearchBarInput())}} _hover={{bg:'#F8F6FB'}}>
        <Flex w={'30%'}   justifyContent={'center'} alignItems={'center'}>
            <Image  maxHeight={'110px'} w={'100%'} rounded={'md'} src={productImageUrl} alt={'alt'} />
        </Flex>
        <Flex w={'70%'} direction={'column'}>
            <Text fontSize={'large'} fontWeight={'700'}>{productTitle}</Text>
            <Flex>
                <Text  >{productStreet+", "+productCity},</Text>
            </Flex>
            <Flex alignItems={'center'} alignContent={'center'} gap={'5px'} >
                <Text fontSize={'small'}>{rating}</Text>
                <Box pb={'5px'}><StarRating ratingPoints={rating} /></Box>
                <Text fontSize={'small'}>{rating_count}</Text>
            </Flex>
            <Text fontWeight={'600'} color={'#318301'} fontSize={'large'}>${price}</Text>
        </Flex>
      
    </Flex>
  )
}

export default SingleSearchResult
