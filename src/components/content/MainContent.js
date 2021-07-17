import "./MainContent.css";
import CatalogNav from "../catalogNav/CatalogNav"
import CatalogContent from "./catalog/CatalogContent";


const MainContent = () => {

  
  return (
    <div className="main">
      <div className="main__catalog">
        <CatalogNav />
        <CatalogContent />
      </div>
    </div>
  );
}
export default MainContent;
