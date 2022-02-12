import { types } from "./ActionTypes";

export const addProd = form => ({
    type: types.ADD_PRODUTO,
    payload:form
})