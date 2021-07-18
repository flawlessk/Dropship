import "./MainContent.css";
import CatalogNav from "../catalogNav/CatalogNav"
import CatalogContent from "./catalog/CatalogContent";
import { useState } from "react";
import { useSelector } from "react-redux";



const MainContent = () => {
  const [checkedProducts, setCheckedProducts] = useState([]);
  const productList = useSelector(state => state.ProductsReducer.productList);

  
  const checkboxChanged = (id) => {
    if (checkedProducts.includes(id)) {
      setCheckedProducts(checkedProducts.filter((i) => i !== id));
    } else setCheckedProducts([...checkedProducts, id]);
  };

  const selectAll = () => {
    setCheckedProducts(productList.map((p) => p.id));
  };

  const clearAll = () => {
    setCheckedProducts([]);
  };

  return (
    <div className="main">
      <div className="main__catalog">
        <CatalogNav />
        <CatalogContent 
          checkedProducts={checkedProducts}
          checkboxChanged={checkboxChanged}
          selectAll={selectAll}
          clearAll={clearAll}
        />
      </div>
    </div>
  );
}
export default MainContent;
