export const ActionTypes = {
  PRODUCTS_FETCH: 'PRODUCTS_FETCH',
  SELECTED_PRODUCTS: 'SELECTED_PRODUCTS',
  RM_SELECTED_PRODUCTS: 'RM_SELECTED_PRODUCTS',
  PRODUCTS_SEARCH: 'PRODUCTS_SEARCH',
  SORT_CHANGE: 'SORT_CHANGE',
  COUNTER_INCREASED: 'COUNTER_INCREASED',
  COUNTER_DECREASED: 'COUNTER_DECREASED',
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.PRODUCTS_FETCH,
    payload: [
      ...products.map((product) => {
        return {
          count: 1,
          ...product,
        };
      }),
    ],
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

export const increaseCounter = (productId) => {
  return {
    type: ActionTypes.COUNTER_INCREASED,
    payload: productId,
  };
};

export const decreaseCounter = (productId) => {
  return {
    type: ActionTypes.COUNTER_DECREASED,
    payload: productId,
  };
};
