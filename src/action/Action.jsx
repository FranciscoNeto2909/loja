import { types } from "./ActionTypes";

export const addProd = form => ({
    type: types.ADD_PRODUTO,
    payload:form
})
export const success =()=>({
    type:types.SUCCESS,
    success:false
})