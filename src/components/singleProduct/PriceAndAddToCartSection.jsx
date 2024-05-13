import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedProductToCart } from '../../redux/actions'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const PriceAndAddToCartSection = ({productFetched}) => {

    const [itemAddedToCartFlag,setItemAddedToCartFlag] = useState(false);
    const [selectedProductIndex, setSelectedProductIndex] = React.useState('0')
    const cart = useSelector((store) =>store.cart);
    const navigator = useNavigate();

    
    
    const productTitle = JSON.parse( productFetched[0].attributes.title_array)[0];
    const gallery_title = productFetched[0].attributes.gallery_title;
    const productCity = JSON.parse(productFetched[0].attributes.redemption_locations_short )[0].city;
    const productStreet = JSON.parse(productFetched[0].attributes.redemption_locations_short )[0].streetAddress1;
    const rating = productFetched[0].attributes.rating_value;
    const rating_count = productFetched[0].attributes.rating_count;
    const purchases_total_displayed = productFetched[0].attributes.purchases_total_displayed;
    const merchantName = productFetched[0].attributes.merchant_name;
    const productId = productFetched[0].itemId;
    const productImageUrl = productFetched[0]?.attributes?.med_image;

    const value_array = JSON.parse(productFetched[0].attributes.value_array);
    const value = Number((value_array[0]))/100;

    const discount_percent_array = JSON.parse(productFetched[0].attributes.discount_percent_array);
    const discount = Number((discount_percent_array[0]));

    const price_array = JSON.parse(productFetched[0].attributes.price_array);
    const price = Number((price_array[0]))/100;

    const subProduct_title = JSON.parse( productFetched[0].attributes.title_array)[1]; 
    const subProduct_price = Number((price_array[1]))/100;
    const subProduct_value = Number((value_array[1]))/100;
    const subProduct_discount = Number((discount_percent_array[1]));


    const productObject = {
        productId:productId,
        productName: productTitle,
        productValue:value,
        productPrice:price,
        productDiscount:discount,
        productBoughtCount:purchases_total_displayed,
        productImageUrl:productImageUrl
    }

    const subProductObject = {
        productId:productId,
        productName: subProduct_title,
        productValue:subProduct_value,
        productPrice:subProduct_price,
        productDiscount:subProduct_discount,
        productBoughtCount:purchases_total_displayed,
        productImageUrl:productImageUrl
    }

    const totalProducts = [subProductObject,productObject]

    // console.log(productObject,subProductObject)

    const dispatch = useDispatch();
    // console.log(selectedProductIndex)

    const toast = useToast()

    const generateToast = () => {
        toast({
            position: 'top-right',
            render: () => (
              <Box color='white' rounded={'lg'} p={3} bg='green.500'>
                Item has been added to your cart!
              </Box>
            ),
          })
           
    }
    
    

    useEffect(()=>{
        if(itemAddedToCartFlag){
            navigator('/cart');

        }
    },[itemAddedToCartFlag])

  return (
    <Flex w={'100%'}   justifyContent={'center'} alignItems={'center'} p={'10px 0px'}>
    <Flex w={'80%'} gap={'10px'} direction={'column'}>

    <Flex w={'100%'} direction={'column'} gap={'20px'}>
     
    <RadioGroup onChange={(value)=>{setSelectedProductIndex(value)}}   value={selectedProductIndex}  display={'flex'} flexDirection={'column'}  gap={'30px'}>
        {
           subProduct_title && subProduct_discount && subProduct_price && subProduct_value && subProduct_title &&  (
                <Radio value={'0'} p={'0px 10px'}>
        
                    <Flex gap={'10px'} direction={'column'} pb={'10px'} borderBottom={'1px solid lightgrey'}  >
                        <Text >{subProduct_title}</Text>
                        <Flex gap={'10px'} justifyContent={'start'} alignItems={'center'}>
                            <Text as={'span'} fontSize={'xl'} textDecoration={'line-through'} color={'gray.600'}>${subProduct_value}</Text>
                            <Text as={'span'} fontSize={'2xl'} fontWeight={'600'} color={'#318301'}>${subProduct_price}</Text>
                            <Box  bg={'#EBFDDE'} fontSize={'small'} w={'max-content'} h={'max-content'} p={'3px 5px'} fontWeight={'700'}  rounded={'md'} color={'#318301'} >{subProduct_discount}% OFF</Box>
                        </Flex>
                        {
                            purchases_total_displayed && ( 
                                        <Text fontSize={'small'}>{purchases_total_displayed}+ bought</Text>
                            )
                        }
                    </Flex>
                </Radio>
            )
         }
         {
            productTitle && discount && price && value  && (
                <Radio value={'1'} p={'0px 10px'}>
        
                    <Flex gap={'10px'} direction={'column'} pb={'10px'} borderBottom={'1px solid lightgrey'}  >
                        <Text>{productTitle}</Text>
                        <Flex gap={'10px'} justifyContent={'start'} alignItems={'center'}>
                            <Text as={'span'} fontSize={'xl'} textDecoration={'line-through'} color={'gray.600'}>${value}</Text>
                            <Text as={'span'} fontSize={'2xl'} fontWeight={'600'} color={'#318301'}>${price}</Text>
                            <Box  bg={'#EBFDDE'} fontSize={'small'} w={'max-content'} h={'max-content'} p={'3px 5px'} fontWeight={'700'}  rounded={'md'} color={'#318301'} >{discount}% OFF</Box>
                        </Flex>
                        {
                            purchases_total_displayed && ( 
                                        <Text>{purchases_total_displayed}+ bought</Text>
                            )
                        }
                    </Flex>
                </Radio>
            )
         }
         
    </RadioGroup>
        
    </Flex>

   <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'20px'} p={'10px 0px'} >
   <Text>Over 1,250 sold today, this item is moving fast. Act now if you want one of your own!</Text>

   <Flex  w={'90%'} direction={'column'}  gap={'20px'}>

   <Button bg={'#0077D9'} _hover={{bg:'#015EAA'}} color={'white'}>Buy Now</Button>
   <Button bg={'white'} color={'#0077D9'} outline={'1px solid #0077D9'} _hover={{bg:'#0077D9',color:'white'}}
   onClick={()=>{dispatch(addSelectedProductToCart(totalProducts[Number(selectedProductIndex)],Number(selectedProductIndex)));generateToast();setItemAddedToCartFlag(true)}}
   >Add to Cart</Button>
   
   </Flex>
   </Flex>
   

</Flex>
    </Flex>
  )
}

export default PriceAndAddToCartSection
