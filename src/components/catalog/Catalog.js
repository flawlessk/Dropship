import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productsAPI } from '../../API'
import { getProductsAction } from '../../actions/ProductsActions';

const Catalog = () => {
    const productList = useSelector(state => state.productList)
    const dispatch = useDispatch();


    useEffect(() => {
        productsAPI().then(result => {
            dispatch(getProductsAction(result));
        })
    }, [])

    useEffect(() => {
    }, [productList])
    return (
        <>
            {productList.map(item => 
                <div key={item.id} className="product-div">
                    <div>
                        <h2 className="product-div--h2">{item.title}</h2 >
                    </div>
                    <div>
                        <p className="product-div--p">{item.price}</p>
                    </div>
                    <div>
                        <img src={item.imageUrl} className="product-div--img" />
                    </div>
                </div>
                )}
        </>
    )



}
export default Catalog;