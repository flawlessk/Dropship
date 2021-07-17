import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productsAPI } from '../../API'
import { setProductsAction } from '../../actions/ProductsActions';

const Catalog = () => {
    const productList = useSelector(state => state.productList)
    const dispatch = useDispatch();


    useEffect(() => {
        productsAPI().then(result => {
            dispatch(setProductsAction(result));
        })
    }, [])

    return (
        <>
           
        </>
    )



}
export default Catalog;