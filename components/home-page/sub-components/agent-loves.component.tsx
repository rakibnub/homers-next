import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {H2,P,H4} from '@lib/index';
import Image from 'next/image';
import {Container, Grid} from '@mui/material';
import styles from './agent-loves.module.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className={`${styles.item}`}>
    <img src="/images/agents-1.png"/>
    <p>Real Time Mortgage and Closing Costs Calculator</p>
  </div>,
  <div className={`${styles.item}`}>
    <img src="/images/agents-2.png" />
    <p>Customize form with complete property information</p>
  </div>,
  <div className={`${styles.item}`}>
    <img src="/images/agents-3.png" />
    <p>Sync info. Write better offers</p>
  </div>
];

function AgentLovesComponent() {

  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  return (
    <div className={`${styles.agent_loves}`}>
      <div className={`${styles.agent_love_inner}`}>
        <Container>
          <Grid container spacing={3} className={`${styles.agent_cont}`}>
            <Grid item xs={12} md={3}>
              <H2 color='white' text='Agents loves our System'/>
            </Grid>
            <Grid item xs={12} md={9}>
              <div className={`${styles.slide_container}`}>
                <AliceCarousel
                    mouseTracking
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                    activeIndex={activeIndex}
                    infinite={true}
                    responsive={responsive}
                   // onSlideChanged={syncActiveIndex}
                />
                <div className={`${styles.b_refs_buttons}`}>
                    <button className={`${styles.prev}`} onClick={slidePrev}><ArrowBackIosNewIcon/></button>
                    <button className={`${styles.next}`} onClick={slideNext}><ArrowForwardIosIcon/></button>
                </div>
              </div>
            </Grid>
          </Grid>


        </Container>
      </div>
    </div>
  );
}

export default AgentLovesComponent;