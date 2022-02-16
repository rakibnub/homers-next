import {FC} from 'react';
import {Container, Grid} from '@mui/material';
import {ButtonComponent,H2,P} from '@lib/index';
import Image from 'next/image';
import styles from './video-part.module.scss';
import videoImage from '../../../public/images/video_img.svg';

const VideoPartComponent: FC = () => {
  return (
    <div className={`${styles.video_part}`}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Image src={videoImage} alt="video" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <H2 text="Real easy & quick to make offers!" />
              <P text='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.'/>
              <ButtonComponent
                onClickHandler={() => {}}
                buttonText="Create Free Account"
                variant="contained"
                formType="button"
              />
            </Grid>
          </Grid>
        </Container>
    </div>
  );
};

export default VideoPartComponent;