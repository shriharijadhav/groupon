import { Box, Button, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import StarRating from './StarRating';

const SingleGridItem = ({product}) => {

    const imgSrc = product.attributes.med_image;
    
    const titleArrayString = product.attributes.title_array;
    const titleArray = JSON.parse(titleArrayString);
    const title = titleArray[0];

    const redemption_locations_short = JSON.parse(product.attributes.redemption_locations_short);
    const street = redemption_locations_short[0].streetAddress1;
    const city = redemption_locations_short[0].city;
    const rating = product.attributes.rating_value;
    const rating_count = product.attributes.rating_count;
    const purchases_total_displayed = product.attributes.purchases_total_displayed;
    const merchant_name = product.attributes.merchant_name;
    
    const value_array = JSON.parse(product.attributes.value_array);
    const value = Number((value_array[0]))/100;

    const discount_percent_array = JSON.parse(product.attributes.discount_percent_array);
    const discount = Number((discount_percent_array[0]));

    const price_array = JSON.parse(product.attributes.price_array);
    const price = Number((price_array[0]))/100;

    

    const updatedTitle = title.length >55? title.substring(0, 55) + "..." :title ;

  return (
    <GridItem display={'flex'} flexDirection={'column'} h={'420px'}  gap={'5px'} p={'5px 0px'} cursor={'pointer'} overflow={'hidden'}>
        <Image w={'100%'} h={'200px'} rounded={'lg'} src={imgSrc} />
        <Text fontWeight={'700'} >{updatedTitle}</Text>
        <Text>
            <Text as={'span'}>{street},</Text>
            <Text as={'span'}> {city}</Text>
        </Text>
        <Flex gap={'5px'}  alignItems={'baseline'} >
            <Text>{rating}</Text>
            <StarRating  ratingPoints={rating}/>
            <Text>{rating_count} Ratings</Text>

        </Flex>
        <Text fontSize={'small'}>{merchant_name}</Text>
        <Flex alignItems={'center'} gap={'5px'}>
            <Text as={'span'} fontSize={'xl'} textDecoration={'line-through'} color={'gray.600'}>${value}</Text>
            <Text as={'span'} color={'gray.600'}>From</Text>
            <Text as={'span'} fontSize={'2xl'} fontWeight={'600'} color={'#318301'}>${price}</Text>
            <Box  bg={'#EBFDDE'} fontSize={'small'} p={'5px'} fontWeight={'700'} rounded={'md'} color={'#318301'} >{discount}% OFF</Box>
        </Flex>
       {
        purchases_total_displayed && ( 
                    <Text>{purchases_total_displayed}+ bought</Text>
         )
        }

    </GridItem>
  )
}

export default SingleGridItem
