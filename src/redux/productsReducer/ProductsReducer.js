import { ActionTypes } from '../action-types/actionTypes';

const initialState = {
  productList: [],
  selectedProducts: [],
  sort: 'default',
  search: '',
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PRODUCTS_FETCH:
      return {
        ...state,
        productList: action.payload,
      };
    case ActionTypes.SORT_CHANGE:
      return {
        ...state,
        sort: action.payload,
      };
    case ActionTypes.PRODUCTS_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case ActionTypes.COUNTER_INCREASED:
      return {
        ...state,
        productList: state.productList.map((x) =>
          x.id === action.payload ? { ...x, count: x.count + 1 } : x
        ),
      };
    case ActionTypes.COUNTER_DECREASED:
      return {
        ...state,
        productList: state.productList.map((x) =>
          x.id === action.payload
            ? { ...x, count: x.count === 1 ? 1 : x.count - 1 }
            : x
        ),
      };
    default:
      return state;
  }
};

export default ProductsReducer;
