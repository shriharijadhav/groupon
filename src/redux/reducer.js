import { HANDLE_LOGOUT, SET_TOKEN, UPDATE_LOGIN_FORM_DATA } from "./actionTypes";
import { category_local_data, face_and_skin_care_data, homepage_all_data, homepage_gifting_data } from "./allProductData";

const initialState = {
    email:'',
    password:'',
    token:null,

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
        case HANDLE_LOGOUT:
            return {
                ...state,token:null
            }
            break;
          
        default:
            return state
            break;
    }
}