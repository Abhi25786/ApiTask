import { removeItem, setItem } from "../../utils/utils";
import types from "../types";


const initial_state = {
    userData: {},
  
}
export default function (state = initial_state, action) {
    switch (action.type) {
        case types.LOGIN: {
            const data = action.payload
            setItem('userLogin',data)
            return {...state, userData: data };
        }
        case types.USER_LOGOUT: {

           removeItem('userLogin')

            return { userData: undefined }
        }

        case types.NO_INTERNET: {
            const internetConnection = action.payload.internetConnection
            return { ...state, internetConnection }
        }
        default: {
            return { ...state }
        }
    }
}
