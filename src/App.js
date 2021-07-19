import { Route, Switch } from 'react-router-dom';
import LoginModal from './components/authentications/LoginModal';
import Logout from './components/authentications/Logout';
import RegisterModal from './components/authentications/RegisterModal';
import Cart from './components/cart/Cart';
import MainContent from './components/content/MainContent';
import ProductValidation from './components/content/products/ProductValidation';
import MainPage from './components/main-page/MainPage';
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
          <h2>this is user profile</h2>
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
          <Cart />
        </Route>
        <Route exact path="/register">
          <Nav />
          <RegisterModal />
        </Route>
        <Route path="/dashboard">
          <Nav />
          <h2>This is Dashboard Section</h2>
        </Route>
        <Route path="/transactions">
          <Nav />
         <h2>This is Transactions Section</h2>
        </Route>
        <Route path="/orders">
          <Nav />
          <h2>This is Orders Section</h2>
        </Route>
        <Route path="/store">
          <Nav />
          <h2>This is Store Section</h2>
        </Route>
      </ Switch>
  );
}

export default App;
