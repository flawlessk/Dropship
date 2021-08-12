import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Group from '../../svgs/Group.svg';
import Group3 from '../../svgs/Group3.svg';
import Link from '../../svgs/link.svg';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import useStyles from './Modal.style';
import './Test.css';

const styles = (theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const Modal = ({ toggleOpen, toggleClose, link }) => {
  const classes = useStyles();

  return (
    <>
      <Dialog
        maxWidth="md"
        onClose={toggleClose}
        aria-labelledby="customized-dialog-title"
        open={toggleOpen}
      >
        <Box className={classes.dialogSize} style={{ overflow: 'hidden' }}>
          <Box className={classes.boxPadding}>
            <DialogTitle className={classes.dialogTitle} onClose={toggleClose}>
              {link ? 'Invitation Link' : 'Share Code'}
            </DialogTitle>
            <DialogContent
              dividers
              className={classes.content}
              style={{ overflow: 'hidden' }}
            >
              <Typography gutterBottom className={classes.typography}>
                {link
                  ? `Invite your audience to join this amazing community! Copy the
                link and send it via any media to reach out your potential
                members`
                  : `Invite your audience to join this amazing community! Copy the
              community code and send it for future members by mobile.`}
              </Typography>
              {link ? (
                <img src={Group} alt="grp" className={classes.img} />
              ) : (
                <img src={Group3} alt="grp3" className={classes.img} />
              )}
            </DialogContent>
            <DialogActions className={classes.form}>
              <form noValidate autoComplete="off">
                <TextField
                  value="https://www.youtube.com/watch?v=EvB2IQ3veJs"
                  className={classes.link}
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Link} alt="bla" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box className={classes.box}>
                          <Box className={classes.vector}></Box>
                          <Box className={classes.copy}>Copy</Box>
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </DialogActions>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Modal;
