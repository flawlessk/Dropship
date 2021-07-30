import React, { useState } from 'react';
import './RangeSlider.css';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { productsAPI } from '../../API';
import { setProducts } from '../../redux/action-types/actionTypes';

function valuetext(value) {
  return `${value}`;
}

const RangeSlider = () => {
  const productList = useSelector((state) => state.ProductsReducer.productList);
  const priceMax = productList.length
    ? Math.max(...productList.map((x) => x.price), 0)
    : 10000;
  const priceMin = 1;
  let timeout;
  const dispatch = useDispatch();
  const [value, setValue] = useState([priceMin, priceMax]);

  const handleChange = (event, newValue) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      setValue(newValue);
      productsAPI().then((result) => {
        let filterProducts = result.filter((product) => {
          return product.price >= value[0] && product.price <= value[1];
        });
        dispatch(setProducts(filterProducts));
      });
    }, 1000);
  };

  return (
    <div className="slider-wrapper">
      <div className="advance-filter">
        <form className="advance-filter-form">
          <div className="country-select-box">
            <div className="country-select-header">
              <span>Ship From</span>
            </div>
          </div>
          <div className="country-select-box">
            <div className="country-select-header">
              <span>Ship To</span>
            </div>
          </div>
          <div className="country-select-box">
            <div className="country-select-header">
              <span>Select Supplier</span>
            </div>
          </div>
          <div>
            <Typography id="range-slider" gutterBottom>
              Price Range
            </Typography>
            <Slider
              min={priceMin}
              max={priceMax}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </div>
          <span className="slider-span">
            <span className="slider-price">$</span>
            {value[0]}
          </span>
          <span className="slider-span-right">
            <span className="slider-price-right">$</span>
            {value[1]}
          </span>
        </form>
      </div>
    </div>
  );
};

export default RangeSlider;
