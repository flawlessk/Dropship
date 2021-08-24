import { Route, Switch } from 'react-router-dom';
import LoginModal from './components/authentications/LoginModal';
import Logout from './components/authentications/Logout';
import RegisterModal from './components/authentications/RegisterModal';
import Cart from './components/cart/Cart';
import MainContent from './components/content/MainContent';
import ProductValidation from './components/content/products/ProductValidation';
import MainPage from './components/mainpage/MainPage';
import Nav from './components/navbar/Nav';
import Test from './components/test/Test';
import Stepper from './components/test2/Stepper';
import Walkthrough from './components/test2/Walkthrough';

function App() {
  return (
    <Switch>
      <Route exact path="/catalog/:categoryParams?">
        <Nav />
        <MainContent />
      </Route>
      <Route path="/user/profile">
        <Nav />
        <h2
          style={{
            fontSize: '40px',
            textAlign: 'center',
            margin: '20px 0',
            paddingBottom: '21px',
            borderBottom: '1px solid gray',
            color: '#61d5df',
          }}
        >
          User Profile
        </h2>
        <Logout />
      </Route>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/login">
        <Nav />
        <LoginModal />
      </Route>
      <Route path="/product/:productId?">
        <Nav />
        <ProductValidation />
      </Route>
      <Route exact path="/cart">
        <Nav />
        <h2
          style={{
            fontSize: '40px',
            textAlign: 'center',
            margin: '20px 0',
            paddingBottom: '21px',
            borderBottom: '1px solid gray',
            color: '#61d5df',
          }}
        >
          Inventory
        </h2>
        <Cart />
      </Route>
      <Route exact path="/register">
        <Nav />
        <RegisterModal />
      </Route>
      <Route path="/dashboard">
        <Nav />
      </Route>
      <Route path="/transactions">
        <Nav />
      </Route>
      <Route path="/orders">
        <Nav />
        <div style={{ display: 'flex', marginLeft: "100px" }}>
          <Test />
        </div>
      </Route>
      <Route path="/store">
        <Nav />
        <div style={{marginLeft: "100px"}}>
          <Stepper />
        </div>
        <div style={{marginLeft: "100px"}}>
         <Walkthrough />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
