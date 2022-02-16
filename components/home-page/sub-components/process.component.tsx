import {FC} from 'react';
import {Container, Grid} from '@mui/material';
import {H2} from '@lib/index';
import ProcessLists from './process-list.component';
import styles from './process.module.scss';

const ProcessComponent: FC = () => {
  return (
    <div className={`${styles.process}`}>
        <Container>
          <H2 text="Process"/>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              <ProcessLists
                serial="01"
                title="Create your free account"
                description="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessLists
                serial="02"
                title="Request Info from buyer by send link"
                description="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessLists
                serial="03"
                title="Less Effort ! Buyer educated by system"
                description="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessLists
                serial="04"
                title="Agent Feedback notification"
                description="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum."
              />
            </Grid>
          </Grid>
        </Container>
      </div>
  );
};

export default ProcessComponent;