
import { combineReducers ,createStore,applyMiddleware,compose } from "redux";
import { petReducer } from "./PetsReducer/reducer.js";


 const rootReducer=combineReducers({
    details:petReducer
})

const thunk=(store)=>(next)=>(action)=>{
    typeof action==="function" ? action(store.dispatch) : next(action);
}

const enhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store= createStore(rootReducer,enhancers(applyMiddleware(thunk)))










