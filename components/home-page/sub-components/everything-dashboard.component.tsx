import {FC} from 'react';
import {Container, Grid} from '@mui/material';
import {ButtonComponent,P,H2} from '@lib/index';
import Image from 'next/image';
import styles from './everything-dashboard.module.scss';
import dashboard from '../../../public/images/dashboard.png';

const EverythingDashboardComponent: FC = () => {
  return (
    <div className={`${styles.everything_dashboard}`}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <H2 text='Everything in a single dashboard with best offers'/>
              <P text='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te.'/>
              <ButtonComponent
                onClickHandler={() => {}}
                buttonText="Create Free Account"
                variant="contained"
                formType='button'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image src={dashboard} alt="dashboard" />
            </Grid>
          </Grid>
        </Container>
      </div>
  );
};

export default EverythingDashboardComponent;