import axios from "axios"
import { ADD_SELECTED_PRODUCT_TO_CART, CLEAR_THE_SEARCHBAR_INPUT, DISPLAY_SEARCH_RESULTS, EMPTY_SEARCH_RESULT_ARRAY, GET_SEARCH_INPUT, HANDLE_LOGOUT, REMOVE_PRODUCT_FROM_CART, SET_TOKEN, UPDATE_LOGIN_FORM_DATA } from "./actionTypes"

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

export const getSearchInput = (inputData) =>{
    return{
        type:GET_SEARCH_INPUT,payload:inputData
    }
}

export const displaySearchResults = () =>{
    return{
        type:DISPLAY_SEARCH_RESULTS
    }

}

export const debouncedDisplaySearchResults = (yourFunction,delay) =>{
    let timeoutId;
    return (dispatch) =>{
        timeoutId = setTimeout(() => {
            dispatch(yourFunction())
        }, delay);
    }
}

export const clearTheSearchBarInput = ()=>{
    return{
        type:CLEAR_THE_SEARCHBAR_INPUT
    }
}

export const emptySearchResultArray = ()=>{
    return{
        type:EMPTY_SEARCH_RESULT_ARRAY
    }
}