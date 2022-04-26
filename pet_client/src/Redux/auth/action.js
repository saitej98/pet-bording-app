
import axios from "axios"

export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGOUT="LOGOUT"

export const LoginSuccess=(payload)=>({type:LOGIN_SUCCESS,payload})
export const Logout=()=>({type:LOGOUT})








