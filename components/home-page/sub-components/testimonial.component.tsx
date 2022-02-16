import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Container, Grid,Box,MobileStepper,Paper,Typography,Button} from '@mui/material';
import {H2,P,H4} from '@lib/index';
import Image from 'next/image';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './testimonial.module.scss';
import quote from '../../../public/images/quote.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    client:'Lindsa Gardner',
    designation:'Designation 1',
    description: 'Lorem ipvsum dolor sit amext, coetur adipisicing elit, tempor incididunt ut lab magna smod conseur adipisicing it, tempor incididunt ut labore et dolore.',
    imgPath:'/images/client-1.png',
  },
  {
    client:'Lindsa Gardner',
    designation:'Designation 2',
    description: 'Lorem ipvsum dolor sit amext, coetur adipisicing elit, tempor incididunt ut lab magna smod conseur adipisicing it, tempor incididunt ut labore et dolore.',
    imgPath:'/images/client-1.png',
  },
  {
    client:'Lindsa Gardner',
    designation:'Designation 3',
    description: 'Lorem ipvsum dolor sit amext, coetur adipisicing elit, tempor incididunt ut lab magna smod conseur adipisicing it, tempor incididunt ut labore et dolore.',
    imgPath:'/images/client-1.png',
  },
];

function TestimonialComponent() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={`${styles.testimonial}`}>
      <Container>
        <H2 text="What our clients say"/>
        <Box className={`${styles.box}`}>
          <Box className={`${styles.box_inner}`}>
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={index}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={4}>
                          <Box
                          component="img"
                          sx={{
                            width: '100%',
                          }}
                          src={step.imgPath}
                          alt={step.client}
                        />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                          <h6>{step.client}</h6>
                          <span>{step.designation}</span>
                          <P text={step.description}/>
                      </Grid>
                    </Grid>
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <Box className={`${styles.quote}`}><Image src={quote} alt="video" /></Box>
          </Box>
          <Box className={`${styles.box_bot}`}>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  className='nextBtn'
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" className='preBtn' onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>

        </Box>
      </Container>
    </div>
  );
}

export default TestimonialComponent;