import React, { useState } from 'react';
import './RegisterModal.css';
import { Dialog } from '@material-ui/core';
import Register from './Register';

const RegisterModal = () => {
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
          <h2 className="dialog-regist">Sign Up</h2>
        </div>
        <Register />
      </Dialog>
    </div>
  );
};
export default RegisterModal;
