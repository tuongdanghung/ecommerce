import * as types from "../constant/actionType"
export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const removeToCart = (product) => {
    return {
        type: types.DELETE_TO_CART,
        product
    }
}