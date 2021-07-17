const initialState = {
    productList: []
}


const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS_FETCH":
            return {
                ...state,
                productList: action.payload
            }
        default:
            return state;

    }
    return state;
}

export default ProductsReducer;