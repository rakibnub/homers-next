import React, {FC} from 'react';
import {Container, Grid,Link} from '@mui/material';
import Image from 'next/image';
import {P} from '@lib/index';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import styles from './footer.module.scss';
import logo from '../../public/images/logo.png';


export const FooterNavOne = [
  {name: 'About', url: '/about'},
  {name: 'Services', url: '/services'},
  {name: 'Membership', url: '/membership'},
  {name: 'Blog', url: '/blog'},
  {name: 'Contact us', url: '/contact-us'},
  {name: 'FAQ', url: '/faq'},
];

export const FooterNavTwo = [
  {name: 'Services 1', url: '/services1'},
  {name: 'Services 2', url: '/services2'},
  {name: 'Services 3', url: '/services3'},
  {name: 'Services 4', url: '/services4'},
  {name: 'Services 5', url: '/services5'},
  {name: 'Services 6', url: '/services6'},
];

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    icon: <FacebookIcon />,
    url: 'https://facebook.com',
    alt: 'facebook-icon',
    background:'#3B5998'
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    url: 'https://instagram.com',
    alt: 'instagram-icon',
    background:'#ff4d91'
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon />,
    url: 'https://twitter.com',
    alt: 'facebook-icon',
    background:'#1DA1F3'
  },
  {
    name: 'Linked In',
    icon: <LinkedInIcon />,
    url: 'https://linkedin.com',
    alt: 'linkedin-icon',
    background:'#007bb5'
  },
];

const FooterComponent: FC = () => {
  return (
    <div className={`${styles.mainFooterContainer}`}>
      <Container>
        <div className={`${styles.footer_top}`}>
          <Grid container spacing={5}>
              <Grid item xs={12} md={5}>
                  <Link href='#' underline="none"><Image src={logo} alt="partner" /></Link>
                  <P color='#fff' text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less."/>
                  <div className={styles.socialLinks}>
                      {SOCIAL_LINKS.map((linkItem, index) => {
                      return (
                        <Link href={linkItem.url} key={index} style={{background:linkItem.background}}>
                          {linkItem.icon}
                        </Link>
                      );
                      })}
                  </div>
              </Grid>
              <Grid item xs={6} md={2}>
                <div className={`${styles.footer_link}`}>
                  <h4>Contacts</h4>
                  <ul>
                    {FooterNavOne.map(({name, url}, index) => {
                      return (
                        <li key={index}><Link underline='hover'
                          href={url}>
                          {name}
                        </Link></li>
                      );
                    })}
                  </ul>
                </div>
              </Grid>
              <Grid item xs={6} md={2}>
                <div className={`${styles.footer_link}`}>
                  <h4>Services</h4>
                  <ul>
                    {FooterNavTwo.map(({name, url}, index) => {
                      return (
                        <li key={index}><Link underline='hover'
                          href={url}>
                          {name}
                        </Link></li>
                      );
                    })}
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
                <div className={`${styles.footer_link}`}>
                  <h4>Contact Us</h4>
                  <Grid container spacing={3} alignItems="center">
                      <Grid item xs={3} md={2}>
                          <AddLocationOutlinedIcon/>
                      </Grid>
                      <Grid item xs={9} md={10}>
                          <P color='white' text="393 Garfield Road,Seaton, IL 61476"/>
                      </Grid>
                  </Grid>
                  <Grid container spacing={3} alignItems="center">
                      <Grid item xs={3} md={2}>
                          <LocalPhoneIcon/>
                      </Grid>
                      <Grid item xs={9} md={10}>
                          <P color='white' text="+1 123 456 7890"/>
                      </Grid>
                  </Grid>
                </div>
              </Grid>
          </Grid>
        </div>
        <div className={`${styles.footer_bottom}`}>
          <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={6}>
                <P color='white' text="Copyright © 2022 Realestateportal. All Rights Reserved."/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link underline='hover' href='#'>Terms and Privacy</Link>
              </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default FooterComponent;
