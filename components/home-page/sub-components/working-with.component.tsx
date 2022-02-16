import {FC} from 'react';
import {Container, Grid,Link} from '@mui/material';
import {H2} from '@lib/index';
import Image from 'next/image';
import styles from './working-with.module.scss';

const partnerImages = [
    {
        url: '/images/partner-1.png',
        alt: 'partner'
    },
    {
        url: '/images/partner-2.png',
        alt: 'Partner'
    },
    {
        url: '/images/partner-3.png',
        alt: 'Partner'
    },
    {
        url: '/images/partner-4.png',
        alt: 'partner'
    },
    {
        url: '/images/partner-5.png',
        alt: 'Partner'
    },
    {
        url: '/images/partner-6.png',
        alt: 'Partner'
    },
  ];

const WorkingWithComponent: FC = () => {
  return (
    <div className={`${styles.working_with}`}>
        <Container>
            <H2 text="We are working with"/>
            <Grid container spacing={3} alignItems="center">
                {partnerImages.map((slideImage, index)=> (
                    <Grid item xs={6} sm={2} key={index}>
                        <Link href='#'><Image src={slideImage.url} width={100} height={100} alt={slideImage.alt} /></Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </div>
  );
};

export default WorkingWithComponent;