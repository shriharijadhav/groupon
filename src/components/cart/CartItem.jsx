import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../redux/actions';


const CartItem = ({item}) => {
    const productName = item.productName;
    const productPrice = item.productPrice;
    const productValue = item.productValue;
    const productDiscount = item.productDiscount;
    const quantity = item.quantity;
    const productImageUrl = item.productImageUrl;

    const dispatch = useDispatch();

    console.log(item)
  return (
    <Flex w={'100%'} borderBottom={'1px solid lightgrey'} padding={'20px 0px'}>
    <Flex w={'30%'}  >
    <Image w={'90%'} src={productImageUrl} alt={''} />
    </Flex>

    <Flex w={'70%'} p={'10px 10px'}   direction={'column'} gap={'10px'}>
        <Text>
        {productName}
        </Text>
        <Flex gap={'10px'}>
            <Text as={'span'} fontSize={'medium'} textDecoration={'line-through'}>${productValue}</Text>
            <Text as={'span'} fontSize={'medium'} >$ {productPrice}</Text>
        </Flex>
        <Box padding={'0px 5px'} rounded={'sm'} fontSize={'small'} w={'max-content'} border={'1px solid #EA0029'}>
            <Text>{productDiscount}% OFF</Text>
        </Box>

        <Flex direction={'column'}>
            <Text>QTY</Text>
            <Flex gap={'10px'}>
                <Button boxSize={7}>-</Button>
                <Text fontSize={'large'}>{quantity}</Text>
                <Button boxSize={7}>+</Button>
            </Flex>
        </Flex>
        <Flex  alignItems={'center'} p={'10px 0px'} cursor={'pointer'} _hover={{textDecoration:'underline'}} title='Delete item from cart'
        onClick={() =>{dispatch(removeProductFromCart(item.productId))}}
        >
        <Text>Remove</Text>
        <RiDeleteBin5Line size={20} />
        </Flex>

    </Flex>


</Flex>
  )
}

export default CartItem
