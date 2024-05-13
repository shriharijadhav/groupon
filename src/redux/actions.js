import axios from "axios"
import { ADD_SELECTED_PRODUCT_TO_CART, HANDLE_LOGOUT, REMOVE_PRODUCT_FROM_CART, SET_TOKEN, UPDATE_LOGIN_FORM_DATA } from "./actionTypes"

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

export const addSelectedProductToCart = (product,productIndex) =>{
    console.log('product,',product)
    return{
        type:ADD_SELECTED_PRODUCT_TO_CART,payload:product,productIndex:productIndex
    }
}


export const removeProductFromCart = (productId) =>{
    return{
        type:REMOVE_PRODUCT_FROM_CART,payload:productId
    }
}