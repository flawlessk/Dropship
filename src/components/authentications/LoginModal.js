import React, { useState } from 'react';
import './Login.css';
import { Dialog } from '@material-ui/core';
import Login from './Login';

const LoginModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="dialog-wrapper">
      <Dialog
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="heading-wrapper">
          <div className="dialog-logo">
            <img
              src="https://app.365dropship.com/assets/images/auth/logo.svg"
              alt="loginlogo"
            />
          </div>
          <h2 className="dialog-regist">Members Log In</h2>
        </div>
        <Login />
      </Dialog>
    </div>
  );
};
export default LoginModal;
