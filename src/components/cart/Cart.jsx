import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { useSelector } from 'react-redux';
import CartItem from './CartItem';


const Cart = () => {
    const cartData = useSelector((store) => store.cart);
    const totalItemsInCart = cartData.length;

    const totalValue = cartData.reduce((total, item) => total + item.productValue,0);
    console.log(totalValue)

    const totalPrice = cartData.reduce((total, item) => total + item.productPrice,0);
    console.log(totalPrice)

    const youSavePrice = (totalValue - totalPrice).toFixed(2);
    

    useEffect(() => {
        window.scrollTo(0, 0);

    },[])

  return (
    <Flex w={'100%'}   direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} direction={'column'}> 
            <Flex w={'90%'} justifyContent={'space-between'} alignItems={'center'} p={'10px 0px'} >
                <MdArrowBackIos size={25}/>
                <Text fontSize={'x-large'} fontWeight={'600'}>Cart</Text>
                <Flex position={'relative'}   p={'15px'}>
                    <IoCartOutline top={10} size={25}/>
                    <Box position={'absolute'} bg={'#EA0029'} top={0} right={0} rounded={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Text p={'2px 8px'} fontSize={'small'} color={'white'}>{totalItemsInCart}</Text>
                    </Box>

                </Flex>
            </Flex>
            <Divider />

            <Flex w={'90%'} p={'10px 0px'}>
            <Text fontSize={'large'} fontWeight={'500'}>Your shopping cart ({totalItemsInCart} ITEMS)</Text>

            </Flex>
            </Flex>


            <Flex w={'80%'} p={'20px 0px'} direction={'column'} gap={'10px'}>
            {
                cartData.length > 0 && (
                    cartData.map((item,index)=>(
                        <CartItem key={index} item= {item} />
                    ))
                )
            }
                    
            </Flex>
            
    
            



        <Flex w={'90%'} justifyContent={'center'}  alignItems={'center'} m={'30px 0px'} direction={'column'} gap={'10px 0px'}   >
            <Flex w={'90%'} justifyContent={'space-between'}>
            <Flex>
                <Text fontSize={'large'}>Subtotal</Text>
            </Flex>
            <Flex direction={'column'}>
                <Flex gap={'10px'}>
                    <Text color={'gray'}  textDecoration={'line-through'} fontSize={'larger'}>${totalValue}</Text>
                    <Text  fontSize={'larger'}>${totalPrice}</Text>
                </Flex>
                <Text color={'#53A219'}>You save ${youSavePrice}</Text>
            </Flex>
            </Flex>
            <Button colorScheme='blue' w={'100%'}>Proceed to Checkout</Button>
        </Flex>
    </Flex>
  )
}

export default Cart
