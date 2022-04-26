
import { PETS_DATA } from "./action.js";

const initState={
    data:""
}

export const petReducer=(state=initState,{type,payload})=>{

    switch (type) {
        case PETS_DATA : 
        return {data : payload}
        default :
        return state
    }


}












