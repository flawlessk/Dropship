import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../../redux/action-types/actionTypes';
import './Search.css';

const Search = () => {
  const searchQuery = useSelector((state) => state.ProductsReducer.search);
  const dispatch = useDispatch();

  const changeSearch = (e) => {
    dispatch(searchAction(e.target.value));
  };

  return (
    <div className="side-search">
      <input
        type="text"
        id="search"
        placeholder="search..."
        value={searchQuery}
        onChange={changeSearch}
      />
      <button id="search-btn">
        <img className="search-img" src="/assets/search.jpg" alt="search" />
      </button>
    </div>
  );
};

export default Search;
