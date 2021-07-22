import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsAPI } from '../../API';
import { setProducts, sortAction } from '../../redux/actions/actionTypes';
import './Sort.css';

const Sort = () => {
  const sortState = useSelector((state) => state.ProductsReducer.sort);
  const searchQuery = useSelector((state) => state.ProductsReducer.search);
  const dispatch = useDispatch();

  const sort = (results, value) => {
    if (value === 'HTL') {
      return [...results.sort((a, b) => (a.price < b.price ? 1 : -1))];
    } else if (value === 'LTH') {
      return [...results.sort((a, b) => (a.price > b.price ? 1 : -1))];
    } else if (value === 'AZ') {
      return [...results.sort((a, b) => (a.title > b.title ? 1 : -1))];
    } else if (value === 'ZA') {
      return [...results.sort((a, b) => (a.title < b.title ? 1 : -1))];
    } else {
      return [...results.sort((a, b) => (a.id > b.id ? 1 : -1))];
    }
  };

  useEffect(() => {
    productsAPI().then((result) => {
      let filterProducts = sort(
        result.filter((value) => {
          return value.title.toLowerCase().includes(searchQuery.toLowerCase());
        }),
        sortState
      );
      dispatch(setProducts(filterProducts));
    });
  }, [searchQuery, sortState, dispatch]);

  const changeSort = (e) => {
    dispatch(sortAction(e.target.value));
  };

  return (
    <div className="content__sort">
      <label htmlFor="sort">Sort By:</label>
      <select name="items" id="sort" onChange={changeSort}>
        <option value="new">New Arrivals </option>
        <option value="HTL">Price: High To Low</option>
        <option value="LTH">Price: Low To High</option>
        <option value="AZ">Profit: Alphabetic</option>
        <option value="ZA">Profit: Non-Alphabetic</option>
      </select>
    </div>
  );
};

export default Sort;
