import {ButtonComponent} from '@lib/index';
import {Container, Grid,useTheme,useMediaQuery} from '@mui/material';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React, {FC} from 'react';
import Link from 'next/link';
import MobileMenuComponent from "./mobile-menu.component";
import logo from '../../public/images/logo.png';
import styles from './navbar.module.scss';

export const NavBarItems = [
  {name: 'Home', url: '/'},
  {name: 'About', url: '/about'},
  {name: 'Services', url: '/services'},
  {name: 'Membership', url: '/membership'},
  {name: 'Blog', url: '/blog'},
  {name: 'Contact us', url: '/contact-us'},
  {name: 'FAQ', url: '/faq'},
];

const NavbarComponent: FC = () => {
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header className={`${styles.header_part}`}>
      {isMobile ? (
        <div className={`${styles.mobile_menu}`}>
          <Container>
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center">
                <Link href="/" passHref>
                  <Image src={logo} alt="logo" />
                </Link>
              </Grid>
              <Grid
                  item
                  xs={6}
                  container
                  direction="row"
                  justifyContent="flex-end">
                  <MobileMenuComponent/>
                </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
      <Container>
        <div className={`${styles.header}`}>
          <Grid container spacing={2}>
            <Grid
              item
              md={1} lg={1}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center">
              <Link href="/" passHref>
                <a><Image src={logo} alt="logo" /></a>
              </Link>
            </Grid>
            <Grid
              item
              md={7} lg={8}
              container
              direction="row"
              className={`${styles.headerMenu}`}
              justifyContent="center"
              alignItems="center">
              {NavBarItems.map(({name, url}, index) => {
                return (
                  <Link
                    key={index} passHref
                    href={url}>
                    <a className={`${
                      router.route === url ? styles.active : null
                    }`}>{name}</a>
                  </Link>
                );
              })}
            </Grid>
            <Grid
              item
              md={4} lg={3}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center">
              <ButtonComponent
                onClickHandler={() => router.push('/login')}
                buttonText="Log In"
                variant="outlined"
                color="secondary"
              />
              <ButtonComponent
                onClickHandler={() => router.push('/signup')}
                buttonText="Create Free Account"
                variant="contained"
                formType="button"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
      )}
    </header>
  );
};

export default NavbarComponent;
