import "./Header.css";
import HeaderBtn from "./Header-btn";
import Search from "./Search";
import { useSelector } from "react-redux";

const Header = ({
  checkedProducts,
  selectAll,
  clearAll
}) => {
  const productList = useSelector(state => state.ProductsReducer.productList);

  return (
    <header className="content__header">
      <div className="header-select">
        <HeaderBtn name="SELECT ALL" onClick={selectAll} />
        <span className="content__header-title">
          selected {checkedProducts.length} out of {productList.length} products
        </span>
        {checkedProducts.length > 0 && (
          <HeaderBtn name="CLEAR SELECTED" onClick={clearAll} />
        )}
      </div>
      <div className="header-side">
          <Search />
      </div>
      <div className="right-buttons">
        <HeaderBtn name="ADD TO INVENTORY"/>
        <span className="side-help">
          <button className="help-btn">?</button>
        </span>
      </div>
    </header>
  );
};

export default Header;
