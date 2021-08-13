import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Box } from '@material-ui/core';
import Group from '../../svgs/Group1.webp';
import Group1 from '../../svgs/Group2.webp';
import Group2 from '../../svgs/Group3.webp';
import useStyles from './Stepper.styles';
import Arrow from '../../svgs/arrow.svg';

const steps = [
  {
    imgPath: Group,
    title: 'Welcome on WIV calendar',
    text: 'This is the page where you can manage your events and milestones',
  },
  {
    imgPath: Group1,
    title: 'cat 2',
  },
  {
    imgPath: Group2,
    title: 'cat 3',
  },
];
export default function Some() {
  const [open, setOpen] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  console.log(activeStep);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="secondary"
        style={{
          borderRadius: '8px',
          height: '40px',
          marginTop: '10px',
          boxShadow: 'none',
        }}
      >
        Calendar
      </Button>
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
          <img src={steps[activeStep].imgPath} alt={steps[activeStep].title} />
        </Box>
        <DialogTitle className={classes.title} onClose={handleClose}>
          <Typography>{steps[activeStep].title}</Typography>
        </DialogTitle>
        <DialogContent dividers className={classes.content}>
          <Typography>{steps[activeStep].text}</Typography>
        </DialogContent>
        <DialogActions className={classes.actions}>
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
              position: 'absolute',
              right: '54px',
              bottom: '32px',
              color: '#8f9aa9',
            }}
          >
            Skip intro
          </Button>
        </DialogActions>
        <MobileStepper
          style={{ marginLeft: '44px', padding: '0' }}
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          classes={{
            dot: classes.dot,
            dotActive: classes.dotActive,
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              className={classes.box}
              disabled={activeStep === maxSteps - 1}
            >
              <img src={Arrow} alt="arrow" className={classes.image} />
            </Button>
          }
        />
      </Dialog>
    </div>
  );
}
