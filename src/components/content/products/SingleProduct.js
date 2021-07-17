import { Paper , Box } from '@material-ui/core'
import "./SingleProduct.css";



const SingleProduct = () => {
    return (
        <Box className="product-box"
            >
                <Box item xs={3} 
                 className="products-item" >
                <div className="checkbox-container">
                    <input
                    type="checkbox"
                    id="products__item--input"
                    className="products__item--input"
                    />
                </div>
                    <Paper className="products-paper">
                        <input 
                         type="button" 
                         className="hidden-btn" 
                         value="Add To Cart" 
                         />
                        <div className="products-image">
                            {/* <img src={image} alt="img" /> */}
                        </div>
                        <div className="products-info">
                            <div className="products-title">
                                <h3>title</h3>
                                <p>description</p>
                            </div>
                            <h3 className="products-supplier">
                                <span>By:</span>
                                <button>US-Supplier103</button>
                            </h3>
                        </div>
                        <div className="products-price">
                            <span>COST price $ </span>
                        </div>
                    </Paper>
                </Box>
            </Box>
    )
}
export default SingleProduct;