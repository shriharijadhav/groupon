import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../redux/actions';

const Logout = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    useEffect(()=>{
       navigator('/') 
    },[]);
  return (
    <Button onClick={()=>{dispatch(handleLogout())}} colorScheme='red'>
      Logout
    </Button>
  )
}

export default Logout
