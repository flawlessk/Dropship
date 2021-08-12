import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Arrow from '../../svgs/arrow.svg';
import useStyles from './Stepper.styles';
import './Stepper.css';

const Stepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <MobileStepper
      style={{ marginLeft: '44px', padding: '0' }}
      variant="dots"
      steps={3}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} className={classes.box}>
          <img src={Arrow} alt="arrow" className={classes.img} />
        </Button>
      }
    />
  );
};

export default Stepper;
