import React, { useState } from 'react';
import './Register.css';
import { useHistory } from 'react-router';
import { register } from '../../API';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const history = useHistory();

  const registered = () => {
    history.push('/login');
  };

  const performRegister = (e) => {
    e.preventDefault();
    register(firstName, lastName, email, password, passwordConfirmation)
      .then((res) => {
        registered();
      })
      .catch((error) => {
        alert('Ooooops..Something went wrong!');
      });
  };

  return (
    <form className="Register" onSubmit={performRegister}>
      <div className="register-email">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname.."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="register-email">
        <input
          type="text"
          name="lastname"
          placeholder="Lastname.."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="register-email">
        <input
          type="email"
          name="email"
          placeholder="Email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="register-email">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="register-email">
        <input
          type="Password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
      </div>
      <div className="term">
        By creating an account, you agree with the Terms and Conditions and
        Privacy Policy
      </div>
      <div className="subscription">
        <input type="checkbox" />
        <label for="newsletters">Subscribe to Newsletter</label>
      </div>
      <button className="login-button">Sign Up</button>
      <div className="social-auths">
        <h4 className="auths-title">Or Sign In with</h4>
        <div className="auths-buttons">
          <button className="google-btn"></button>
          <button className="facebook-btn"></button>
        </div>
      </div>
      <div className="auth-getstart">
        <span>Already have an account?</span>
        <a href="/login">Sign In</a>
      </div>
    </form>
  );
};
export default Register;
