import React, { useState, useEffect } from 'react';
import './Login.css';
import { useHistory } from 'react-router';
import { login } from '../../API';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const LoggedIn = () => {
    history.push('/catalog');
  };

  const performLogIn = (e) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        LoggedIn();
      })
      .catch((error) => {
        alert('email or password is incorrect!!!');
      });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      LoggedIn();
    }
  }, []);

  return (
    <form className="Login" onSubmit={performLogIn}>
      <div className="login-email">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="login-password">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="signup-wrapper">
        <a href="/register">Forgot password?</a>
        <button className="login-button">Log In</button>
      </div>
      <div className="social-auths">
        <h4 className="auths-title">Or Log In with</h4>
        <div className="auths-buttons">
          <button className="google-btn"></button>
          <button className="facebook-btn"></button>
        </div>
      </div>
      <div className="auth-getstart">
        <span>Don't have an account?</span>
        <a href="/register">Sign up</a>
      </div>
    </form>
  );
};
export default Login;
