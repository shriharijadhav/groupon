import { ADD_SELECTED_PRODUCT_TO_CART, HANDLE_LOGOUT, REMOVE_PRODUCT_FROM_CART, SET_TOKEN, UPDATE_LOGIN_FORM_DATA } from "./actionTypes";
import { category_local_data, face_and_skin_care_data, homepage_all_data, homepage_gifting_data } from "./allProductData";

const initialState = {
    email:'',
    password:'',
    token:null,
    cart:[],

    homepage_all_data:homepage_all_data,
    // homepage_gifting_data:homepage_gifting_data,
    // category_local_data:category_local_data,
    // face_and_skin_care_data:face_and_skin_care_data

}

export const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case UPDATE_LOGIN_FORM_DATA:
            return {
                ...state,[action.fieldName]:action.payload
            }
            break;
        case SET_TOKEN:
            return {
                ...state,token:action.payload
            }
            break;
        case ADD_SELECTED_PRODUCT_TO_CART:
            let updatedCart;

            if (state.cart.length>0) {
                updatedCart = state.cart.map((cartItem)=>{
                    if (cartItem.productId === action.payload.productId && cartItem.productIndex === action.productIndex) {
                        return{
                            ...cartItem,quantity:cartItem.quantity+1,
                        }
                    }
                })
                console.log('updatedCart',typeof(updatedCart[0]))
                if (updatedCart[0] !== undefined) {
                    console.log('updated cart part')
                    return {
                        ...state,cart:updatedCart
                    }
                }else{
                    console.log('else cart part')
                    return {
                        ...state,cart:[...state.cart,{...action.payload,quantity:1,productIndex:action.productIndex}],
                    }
                }
                 
                
            } else {
                return{
                    ...state,cart:[{...action.payload,quantity:1,productIndex:action.productIndex}]
                }
            }

            break;            
        case HANDLE_LOGOUT:
            return {
                ...state,token:null
            }
            break;
    case REMOVE_PRODUCT_FROM_CART:
            let tempCart = state.cart.filter((item)=> item.productId !== action.payload)
                return {
                    ...state,cart:tempCart
                }
                break;            
          
        default:
            return state
            break;
    }
}