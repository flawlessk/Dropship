export const ActionTypes = {
  PRODUCTS_FETCH: 'PRODUCTS_FETCH',
  SELECTED_PRODUCTS: 'SELECTED_PRODUCTS',
  RM_SELECTED_PRODUCTS: 'RM_SELECTED_PRODUCTS',
  PRODUCTS_SEARCH: 'PRODUCTS_SEARCH',
  SORT_CHANGE: 'SORT_CHANGE',
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.PRODUCTS_FETCH,
    payload: products,
  };
};

export const sortAction = (data) => {
  return {
    type: ActionTypes.SORT_CHANGE,
    payload: data,
  };
};

export const searchAction = (data) => {
  return {
    type: ActionTypes.PRODUCTS_SEARCH,
    payload: data,
  };
};
