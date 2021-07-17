import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { productsAPI } from '../../../API'
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
        <Grid container justify="space-between">
             {/* {productList.map((item) => ( */}
                <SingleProduct 
                // key={item.id}
                // image={item.imageUrl}
                // title={item.title}
                // id={item.id} 
                // price={item.price}
                // description={item.description}
                // item={item}
                />
            {/* )) */}
            {/* } */}
    </Grid>
    )
}
export default CatalogProduct;
