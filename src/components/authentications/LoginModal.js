import React, { useState } from 'react';
import './Login.css';
import { Dialog } from '@material-ui/core';
import Login from './Login';

const LoginModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h2 className="dialog-regist">Log In</h2>
        <Login />
      </Dialog>
    </div>
  );
};
export default LoginModal;
