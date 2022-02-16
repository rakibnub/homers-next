import {FC} from 'react';
import {Container, Grid} from '@mui/material';
import {ButtonComponent,H1,P} from '@lib/index';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from './banner.module.scss';
import bannerImage from '../../../public/images/banner.png';

const BannerComponent: FC = () => {

    const router = useRouter();
    return (
        <div className={`${styles.banner}`}>
            <Container>
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <H1 text=" Get your offers from buyer & generate strong profits lifetime" />
                        <P color='white' text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                        animal molestiae te. Ex duo eripuit mentitum."/>
                        <div className="subscribe">
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <input type="text" value="" onChange={()=>{}} placeholder="someone@gmail.com" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ButtonComponent
                                    onClickHandler={() => router.push('/signup')}
                                    buttonText="Create Free Account"
                                    variant="contained"
                                    formType="submit"
                                />
                            </Grid>
                        </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image src={bannerImage} alt="banner" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default BannerComponent;
