import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { productsAPI } from "../../../API";
import { setProductsAction } from '../../../actions/ProductsActions';
import SingleProduct from './SingleProduct';
import { useHistory } from "react-router-dom";



const CatalogProduct = ({
    checkedProducts,
    checkboxChanged,
    setActiveProduct,
    setIsOpen
}) => {
    const productList = useSelector(state => state.ProductsReducer.productList);
    const dispatch = useDispatch();
    const history = useHistory();


    const openModal = (item) => {
        setActiveProduct(item);
        setIsOpen(true);
        window.location = `/catalog/${item.id}`
      };

    useEffect(() => {
        productsAPI().then(result => {
            dispatch(setProductsAction(result));
        })
    }, [])

    return (
        <Grid container justifyContent="space-between">
             {productList && productList.map((item) => 
                <SingleProduct 
                key={item.id}
                id={item.id}
                image={item.imageUrl}
                title={item.title}
                price={item.price}
                description={item.description}
                item={item}
                checkedProducts={checkedProducts}
                checkboxChanged={checkboxChanged}
                openModal={openModal}
                />
            )
            }
    </Grid>
    )
}
export default CatalogProduct;
