
export const getProductsAction = (products) => {
    return {
        type: "PRODUCTS_FETCH",
        payload: products
    }
}