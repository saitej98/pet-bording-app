
import { LOGIN_SUCCESS,LOGOUT } from "./action";
import { loadData,removeData,saveData } from "../localStorage";

let initState={
    isAuth:false,
    accessToken:""
}

let accessToken=loadData("accessToken")
if(accessToken){
    initState={
        ...initState,
        isAuth:true,
        accessToken:accessToken
    }
}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_SUCCESS:
            saveData("accessToken",payload.accessToken);
            return{
                ...state,
                isAuth:true,
                accessToken:payload.accessToken
            }
        case LOGOUT:
            removeData("accessToken")  
            return{
                ...state,
                isAuth:false,
                accessToken:""
            }  
        default:
            return state;    
    }
}



