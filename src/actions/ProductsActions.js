
export const setProductsAction = (products) => {
    return {
        type: "PRODUCTS_FETCH",
        payload: products
    }
}