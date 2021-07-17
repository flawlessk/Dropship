import "./Header.css";
import HeaderBtn from "./Header-btn";
import Search from "./Search";

const Header = () => {
  
  return (
    <header className="content__header">
      <div className="header-select">
        <HeaderBtn name="SELECT ALL"/>
        <span className="content__header-title">
          selected 0 out of 0 products
        </span>
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
