import "./MainContent.css";
import CatalogNav from "../catalogNav/CatalogNav"


const MainContent = () => {

  
  return (
    <div className="main">
      <div className="main__catalog">
        <CatalogNav />
      </div>
    </div>
  );
}
export default MainContent;
