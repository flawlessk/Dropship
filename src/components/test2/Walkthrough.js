import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from "./Walkthrough.styles";
import Press from "../../svgs/press.svg";
import X from "../../svgs/X.svg";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Arrow from "../../svgs/arrow.svg"
import MobileStepper from '@material-ui/core/MobileStepper';
import Backarrow from "../../svgs/backarrow.svg";
import Left from "../../svgs/left.svg";
import { Box } from '@material-ui/core';
import Right from "../../svgs/right.svg";



// Data
const steps = [
    {
      imgPath: X,
      title: "Let's Open your first special day",
      text: 'Opening any special day,you will be able to see all the amazing related activities, contents & packages offered by WIV team.',
      contentText: "To view offerings please tap",
      contentText2: "to open the modal",
      imgPress: Press
    },
    {
      imgPath: X,
      title: "Let's see special day overview",
      text: 'On special day overview you can see all the offerings for',
      boldText: "Activities, Content, Packages.",
      text2: "Use arrows",
      text3: "to move  through suggestions",
      text4: "If there is no offer to your liking you can alwayes",
      text5: "create from scratch",
      left: Left,
      right: Right,
    },
  ];





const Walkthrough = () => {
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const classes = useStyles();
    const maxSteps = steps.length;

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setActiveStep(0);
        setOpen(false);
      };

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                style={{
                borderRadius: '8px',
                height: '40px',
                marginTop: '10px',
                boxShadow: 'none',
                }}
            >
                Walkthrough
            </Button>
            <Dialog
                 onClose={handleClose}
                 aria-labelledby="customized-dialog-title"
                 open={open}
                 PaperProps={{
                   style: {
                     width: '480px',
                     height: activeStep === 1 ? '358px' : '294px',
                     borderRadius: '12px',
                     boxShadow: '0 10px 50px 0 rgba(29, 52, 82, 0.1)',
                     margin: '100px 0 0 400px',
                     overflow: 'unset',
                   },
                 }}
                >
                    <DialogTitle className={classes.dialogTitle}>
                        {steps[activeStep].title}
                        <img src={steps[activeStep].imgPath} alt={steps[activeStep].title} className={classes.imgX} onClick={handleClose} />
                    </DialogTitle>
                    <DialogContent dividers className={classes.content}>
                        <Typography className={classes.text}>{steps[activeStep].text}</Typography>
                        {activeStep === 1 && (
                          <Box className={classes.bold}>
                             {steps[activeStep].boldText}
                          </Box>
                        )}
                        <Typography className={classes.text2}>
                            {activeStep === 0 && (
                              <Box>
                                {steps[activeStep].contentText}
                                <img src={steps[activeStep].imgPress} alt="bla" className={classes.press} />
                                {steps[activeStep].contentText2}
                              </Box>
                            )}
                            {activeStep === 1 && (
                              <Box>
                                {steps.[activeStep].text2}
                                <img src={steps[activeStep].left} alt="left" />
                                <img src={steps[activeStep].right} alt="left" />
                                {steps[activeStep].text3}
                              </Box>
                            )}

                        </Typography>
                        <Typography className={classes.text2}>
                          {steps[activeStep].text4}
                          <Box className={classes.underline}>
                            {steps[activeStep].text5}
                          </Box>
                        </Typography>
                    </DialogContent>
                    <MobileStepper
                        variant="dots"
                        className={classes.stepper}
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        classes={{
                        dot: classes.dot,
                        dotActive: classes.dotActive,
                        }}
                        nextButton={
                        <Button
                            className={classes.btnNext}
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            <img src={Arrow} alt="arrow" className={classes.imagee} />
                        </Button>
                        }
                        backButton={
                        <Button
                            className={classes.btnBack}
                            size="small"
                            onClick={handleBack}
                        >
                            <img src={Backarrow} alt="backarrow" className={classes.image} />
                        </Button>
                        }
                    />
            </Dialog>
        </div>
    )
}
export default Walkthrough;