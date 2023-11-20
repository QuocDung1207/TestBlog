import { ON_LOGIN_ACCOUNT, ON_LOGIN_ACCOUNT_FAIL, ON_LOGIN_ACCOUNT_SUCCESS } from "./actionTypes"

export const Onlogin = (params) => ({
    type:ON_LOGIN_ACCOUNT,
    payload:params
})
export const OnloginSuccess = (data) => ({
    type:ON_LOGIN_ACCOUNT_SUCCESS,
    payload:data
})
export const OnloginFail = (error) => ({
    type:ON_LOGIN_ACCOUNT_FAIL,
    payload:error
})