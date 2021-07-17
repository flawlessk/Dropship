import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../API'

const Catalog = () => {
    const productList = useSelector(state => state.productList)
    const dispatch = useDispatch();


    useEffect(() => {
        getProducts().then(result => {
            dispatch({
                type: "PRODUCTS_FETCH",
                payload: result
            })
        })
    }, [])

    useEffect(() => {
        console.log("list is", productList);
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