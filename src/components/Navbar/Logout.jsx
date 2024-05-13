import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../redux/actions';

const Logout = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const token = useSelector((store)=>store.token);
    useEffect(()=>{
       if(!token){
        navigator('/') 
       }
    },[token]);
  return (
    <Button onClick={()=>{dispatch(handleLogout())}} colorScheme='red'>
      Logout
    </Button>
  )
}

export default Logout
