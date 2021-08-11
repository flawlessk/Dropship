import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Group from '../../svgs/Group.svg';
import Group3 from '../../svgs/Group3.svg';
import Link from '../../svgs/link.svg';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = (theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  dialogSize: {
    width: '465px',
    height: '513px',
    borderRadius: '8px',
  },
  boxPadding: {
    padding: '48px 63px 52px 68px',
  },
  dialogTitle: {
    width: '143px',
    height: '32px',
    fontSize: '24px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '1.33',
    letterSpacing: 'normal',
    textAlign: 'center',
    padding: '0',
    margin: '0 auto',
    marginBottom: '16px',
  },
  link: {
    width: '334px',
    height: '40px',
    padding: '4px 4px 4px 10px',
    borderRadius: '8px',
    border: 'solid 1px rgba(46, 53, 55, 0.2)',
    flexDirection: 'unset',
  },
  content: {
    border: 'none',
    padding: '0',
  },
  typography: {
    width: '334px',
    height: '72px',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    textAlign: 'center',
  },
  img: {
    width: '205px',
    height: '205px',
    margin: '24px 79.6px 24px 64.4px',
    objectFit: 'contain',
  },
  box: {
    width: '80px',
    height: '32px',
    margin: '0 0 0 30px',
    borderRadius: '6px',
    backgroundColor: 'rgba(94, 190, 132, 0.2)',
  },
  vector: {
    marginTop: '6px',
  },
  copy: {
    width: '32px',
    height: '20px',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.43',
    letterSpacing: 'normal',
    textAlign: 'center',
    margin: '0 0 0px 35px',
    color: '#5EBE84',
  },
  form: {
    padding: '0',
  },
}));

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
                Invite your audience to join this amazing community! Copy the
                link and send it via any media to reach out your potential
                members
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
