import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
import Poter from '../../svgs/poter.svg';
import Package from '../../svgs/package.svg';
import Content from '../../svgs/content.svg';

const steps = [
  {
    imgPath: Group,
    title: 'Welcome on WIV calendar',
    text: 'This is the page where you can manage your events and milestones',
  },
  {
    imgPath: Group1,
    title: 'What is Milestone?',
    text: 'Milestone is event day which is combination of these three different component:',
  },
  {
    imgPath: Group2,
    title: 'What is Special day?',
    text: 'This is the page where you can manage your events and milestones',
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
    setActiveStep(0);
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
      <Box>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          PaperProps={{
            style: {
              width: '600px',
              height: activeStep === 1 ? '774px' : '548px',
              borderRadius: '12px',
              boxShadow: '0 10px 50px 0 rgba(29, 52, 82, 0.1)',
              margin: '100px 0 0 400px',
              overflow: 'unset',
            },
          }}
        >
          <Box>
            <img
              src={steps[activeStep].imgPath}
              alt={steps[activeStep].title}
            />
          </Box>
          <DialogTitle
            className={activeStep === 1 ? classes.stepTwoTitle : classes.title}
            onClose={handleClose}
          >
            <Typography className={classes.typo}>
              {steps[activeStep].title}
            </Typography>
          </DialogTitle>
          <DialogContent
            dividers
            className={
              activeStep === 1 ? classes.stepTwoContent : classes.content
            }
          >
            <Typography>{steps[activeStep].text}</Typography>
          </DialogContent>
          {activeStep === 1 && (
            <DialogContent className={classes.pageTwoContent}>
              <Box className={classes.WrapperBox}>
                <Box className={classes.imgBox}>
                  <img src={Poter} alt="poter" className={classes.poter} />
                </Box>
                <Box className={classes.textBox}>
                  <Typography className={classes.pageTwoTitle}>
                    1.Plan your activities
                  </Typography>
                  <Typography className={classes.pageTwoText}>
                    Amet minim mollit non doserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit.
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.WrapperBox}>
                <Box className={classes.imgBox}>
                  <img src={Content} alt="content" className={classes.poter} />
                </Box>
                <Box className={classes.textBox}>
                  <Typography className={classes.pageTwoTitle}>
                    2. Create and manage content
                  </Typography>
                  <Typography className={classes.pageTwoText}>
                    Amet minim mollit non doserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit.
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.WrapperBox}>
                <Box className={classes.imgBox}>
                  <img src={Package} alt="package" className={classes.poter} />
                </Box>
                <Box className={classes.textBox}>
                  <Typography className={classes.pageTwoTitle}>
                    3. Purchase packages
                  </Typography>
                  <Typography className={classes.pageTwoText}>
                    Amet minim mollit non doserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit.
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
          )}
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
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={activeStep === 1 ? classes.StepperTwo : classes.Stepper}
            classes={{
              dot: classes.dot,
              dotActive: classes.dotActive,
            }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                className={activeStep === 1 ? classes.stepTwoBox : classes.box}
                disabled={activeStep === maxSteps - 1}
              >
                <img src={Arrow} alt="arrow" className={classes.image} />
              </Button>
            }
          />
        </Dialog>
      </Box>
    </div>
  );
}
