import { Box, Button, Checkbox, Flex, FormControl, FormLabel, IconButton, Image, Input, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin, updateLoginFormData } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import facebookLogo from '../images/logos/facebookSvg.svg'
import googleLogo from '../images/logos/googleSvg.svg'


const Login = () => {
    const email= useSelector((store)=>store.email);
    const password= useSelector((store)=>store.password);
    const token = useSelector((store)=>store.token);
    const dispatch = useDispatch();
    const navigator = useNavigate();


    useEffect(() => {
        if(token){
            navigator('/')
        }
    },[token]);

  return (
    <Flex w={'100%'}    justifyContent={'center'} alignItems={'center'}>
        {
            !token &&(
                <Flex direction={'column'} gap={'10px'} w={'90%'}  >
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Enter above email'type='text' value={email} name='email' onChange={(e)=>{dispatch(updateLoginFormData(e.target.value,e.target.name))}}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Enter above password' type='password' required value={password} name='password'onChange={(e)=>{dispatch(updateLoginFormData(e.target.value,e.target.name))}} />
                    </FormControl>
                    
                    <Flex w={'100%'}   padding={'10px 0px'} m={'5px 0px'}  justifyContent={'space-between'}>
                        <Flex gap={'5px'}>
                            <Checkbox/>  
                            <Text fontSize={'sm'}>Remember me</Text>
                        </Flex>
                        <Flex>
                                <Text fontSize={'sm'}>Forgot Password?</Text>
                        </Flex>
                    </Flex>

                    <Button color={'#0d71e0'} border={'1px solid #2998F4'} _hover={{bg:'#0d71e0',color:'white'}} onClick={()=>{dispatch(handleLogin({email:email,password:password}))}}>Sign In</Button>

                    <Flex w={'100%'}  justifyContent={'center'}>
                        <Text fontSize={'small'}>Or Sign in with</Text>
                    </Flex>

                    <Flex w={'100%'}   gap={'10px'} justifyContent={'space-between'}>
                        <Box  cursor={'pointer'} gap={'10px'} rounded={'md'} justifyContent={'center'} alignItems={'center'} display={'flex'} border={'1px solid black'} padding={'5px 15px'} pr={'20px'}>
                            <Image src={facebookLogo} w={'22px'} h={'22px'} alt=''/>
                            <Text>Facebook</Text>
                        </Box>
                        <Box  cursor={'pointer'} gap={'10px'} rounded={'md'} justifyContent={'center'} alignItems={'center'} display={'flex'} border={'1px solid black'} padding={'5px 15px'} pr={'20px'}>
                            <Image src={googleLogo} w={'15px'} h={'15px'} alt=''/>
                            <Text>Facebook</Text>
                        </Box>
                    </Flex>
                </Flex>
            )
        }
       
    </Flex>
  )
}

export default Login
