import React, { useState } from 'react';
import './Test.css';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Email from '../../svgs/email.svg';
import Link from '../../svgs/link.svg';
import Share from '../../svgs/share.svg';
import Modal from './Modal';
import useStyles from './Test.styles';

const Test = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [toggle, setToggle] = useState(false);
  const [linkModal, setLinkModal] = useState(false);

  const toggleOpen = () => {
    setOpen(false);
    setToggle(true);
    setLinkModal(true);
  };

  const toggleClose = () => {
    setToggle(false);
    setLinkModal(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    setToggle(true);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <div className={classes.wrapper}>
      <Button
        className={classes.btn}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        disableRipple={true}
      >
        INVITE MEMBERS
      </Button>
      <Popper
        className={classes.popper}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={classes.menuList}
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    <img src={Email} alt="icon" className={classes.img} />
                    Email invitation
                  </MenuItem>
                  <MenuItem onClick={toggleOpen} className={classes.menuItem}>
                    <img src={Link} alt="icon" className={classes.img} />
                    Invite with Link
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className={classes.menuLastItem}
                  >
                    <img src={Share} alt="icon" className={classes.img} />
                    Share Community code
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <Modal
        toggleOpen={toggle}
        toggleClose={toggleClose}
        link={linkModal ? true : false}
      />
    </div>
  );
};

export default Test;
