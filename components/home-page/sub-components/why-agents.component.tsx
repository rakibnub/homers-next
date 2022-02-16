import {FC} from 'react';
import {Container, Grid} from '@mui/material';
import {H2,P,H4} from '@lib/index';
import Image from 'next/image';
import styles from './why-agents.module.scss';
import systemImg1 from '../../../public/images/system-1.png';
import systemImg2 from '../../../public/images/system-2.png';
import systemImg3 from '../../../public/images/system-3.png';
import videoImage from '../../../public/images/video_img.svg';

const WhyAgentsComponent: FC = () => {
  return (
    <div className={`${styles.why_agents}`}>
        <Container>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Image src={videoImage} alt="video" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <H2 text='Why agents use our system?'></H2>
                    <P text='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                    nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                    animal molestiae te. Ex duo eripuit mentitum.'/>
                    <div className={`${styles.why_agents_box}`}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={3} md={2}>
                                <Image src={systemImg1} alt="system" />
                            </Grid>
                            <Grid item xs={9} md={10}>
                                <H4 text="Signup"/>
                                <P text="At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum."/>
                            </Grid>
                        </Grid>
                        </div>
                        <div className={`${styles.why_agents_box}`}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={3} md={2}>
                                    <Image src={systemImg2} alt="system" />
                                </Grid>
                                <Grid item xs={9} md={10}>
                                    <H4 text="Signup"/>
                                    <P text="At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum."/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={`${styles.why_agents_box}`}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={3} md={2}>
                                <Image src={systemImg3} alt="system" />
                            </Grid>
                            <Grid item xs={9} md={10}>
                                <H4 text="Signup"/>
                                <P text="At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum."/>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
};

export default WhyAgentsComponent;