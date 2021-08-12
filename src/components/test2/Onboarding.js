import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Group from '../../svgs/Group1.webp';
import { Box } from '@material-ui/core';
import Stepper from './Stepper';
import useStyles from './Onboarding.styles';

const Onboarding = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      className={classes.dialog}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      PaperProps={{
        style: {
          width: '600px',
          height: '548px',
          borderRadius: '12px',
          boxShadow: '0 10px 50px 0 rgba(29, 52, 82, 0.1)',
          padding: '0 0 32px',
          margin: '200px 0 0 400px',
          overflow: 'unset',
        },
      }}
    >
      <Box>
        <img src={Group} alt="calendar" className={classes.img} />
      </Box>
      <DialogTitle className={classes.title} onClose={handleClose}>
        Welcome on WIV calendar
      </DialogTitle>
      <DialogContent dividers className={classes.content}>
        <Typography gutterBottom>
          This is the page where you can manage your events and milestones
        </Typography>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Stepper />
        <Button
          disableFocusRipple
          onClick={handleClose}
          color="primary"
          style={{
            textTransform: 'capitalize',
            width: '68px',
            height: '28px',
            fontSize: '16px',
            lineHeight: '1.75',
            textAlign: 'left',
            letterSpacing: '0',
            padding: '0',
            marginRight: '54px',
            color: '#8f9aa9',
          }}
        >
          Skip intro
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Onboarding;
