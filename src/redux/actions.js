import axios from "axios"
import { HANDLE_LOGOUT, SET_TOKEN, UPDATE_LOGIN_FORM_DATA } from "./actionTypes"

export const updateLoginFormData = (data,fieldName)=>{
    return {
        type:UPDATE_LOGIN_FORM_DATA,payload:data,fieldName:fieldName
    }
}

export const setToken = (token)=>{
    return{
        type:SET_TOKEN,payload:token
    }
}

export const handleLogin = (formData) =>{
    return async(dispatch)=>{
        axios.post('https://reqres.in/api/login',formData)
        .then((response)=>{
            dispatch(setToken(response.data.token));
        })
        .catch((error)=>{
            
        })
    }

}

export const handleLogout = ()=>{
    return{
        type:HANDLE_LOGOUT
    }
}

