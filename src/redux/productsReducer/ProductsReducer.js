import { ActionTypes } from "../actions/actionTypes";

const initialState = {
    productList: [],
    selectedProducts: [],
    sort: "default",
    search: ""

}


const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCTS_FETCH:
            return {
                ...state,
                productList: action.payload
            }
        case ActionTypes.SORT_CHANGE:
            return {
                ...state,
                sort: action.payload
            }
        case ActionTypes.PRODUCTS_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}

export default ProductsReducer;