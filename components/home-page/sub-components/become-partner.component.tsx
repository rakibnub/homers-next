import {FC} from 'react';
import {Container, Grid} from '@mui/material';
import {ButtonComponent,P,H2} from '@lib/index';
import Image from 'next/image';
import styles from './become-partner.module.scss';
import rafiki from '../../../public/images/rafiki.png';

const BecomePartnerComponent: FC = () => {
  return (
    <div className={`${styles.become_partner}`}>
      <Container>
        <div className={`${styles.become_partner_box}`}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={8}>
              <H2 text='Let’s become our partner'/>
              <P text='Lorem ipsum dolor sit amet, consectetur adipiscing aliquam.'/>
              <ButtonComponent
                onClickHandler={() => {}}
                buttonText="Create account to become our partner"
                variant="contained"
                formType='button'
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Image src={rafiki} alt="rafiki" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default BecomePartnerComponent;
