import { Route, Switch } from 'react-router-dom';
import LoginModal from './components/authentications/LoginModal';
import Logout from './components/authentications/Logout';
import RegisterModal from './components/authentications/RegisterModal';
import Cart from './components/cart/Cart';
import MainContent from './components/content/MainContent';
import ProductValidation from './components/content/products/ProductValidation';
import MainPage from './components/mainpage/MainPage';
import Nav from './components/navbar/Nav';

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
          This is user profile section!
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
          This is an inventory section!
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
      </Route>
      <Route path="/store">
        <Nav />
      </Route>
    </Switch>
  );
}

export default App;
