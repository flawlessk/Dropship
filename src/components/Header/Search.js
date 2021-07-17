import "./Search.css";

const Search = () => {
    return (
        <div className="side-search">
          <input
            type="text"
            id="search"
            placeholder="search..."
          />
            <button id="search-btn">
              <img className="search-img" src="/assets/search.jpg" alt="search" />
          </button>
        </div>
    )
  };
  
  export default Search;
  