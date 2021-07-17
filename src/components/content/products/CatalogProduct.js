import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { productsAPI } from "../../../API";
import { setProductsAction } from '../../../actions/ProductsActions';
import SingleProduct from './SingleProduct';


const CatalogProduct = () => {
    const productList = useSelector(state => state.productList)
    const dispatch = useDispatch();


    useEffect(() => {
        productsAPI().then(result => {
            dispatch(setProductsAction(result));
        })
    }, [])

    return (
        <Grid container justifyContent="space-between">
             {productList && productList.map((item) => 
                <SingleProduct 
                id={item.id}
                image={item.imageUrl}
                title={item.title}
                price={item.price}
                description={item.description}
                item={item}
                />
            )
            }
    </Grid>
    )
}
export default CatalogProduct;
