import './Header.css';
import HeaderBtn from './Header-btn';
import Search from './Search';
import { useSelector } from 'react-redux';
import { addToCart } from '../../API';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { useState } from 'react';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Header = ({ checkedProducts, selectAll, clearAll }) => {
  const productList = useSelector((state) => state.ProductsReducer.productList);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const addToInventory = () => {
    checkedProducts.forEach((id) => {
      addToCart(id, 1);
    });
    handleClick();
  };

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
        <HeaderBtn name="ADD TO INVENTORY" onClick={addToInventory} />
        <span className="side-help">
          <button className="help-btn">?</button>
        </span>
        <Snackbar
          open={open}
          autoHideDuration={800}
          onClose={handleClose}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <Alert onClose={handleClose} severity="success">
            Product added successfully!!!
          </Alert>
        </Snackbar>
      </div>
    </header>
  );
};

export default Header;
