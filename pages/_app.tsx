import {FooterComponent, NavbarComponent} from '@components/index';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {store} from '@states/store';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import {Provider} from 'react-redux';
import '../styles/globals.scss';
import {SnackbarProvider} from 'notistack';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2689F5',
    },
    secondary: {
      main: '#FFF',
    },
  },
});

const LinearIndeterminateProgressBar = dynamic(
  () =>
    import('../ui-library/linear-indeterminate/linear-indeterminate.component'),
  {ssr: false},
);

const SnackbarComponent = dynamic(
  () => import('../ui-library/snackbar/snackbar.component'),
  {ssr: false},
);

const routes = ['/about', '/contact-us', '/pricing', '/'];

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

  const showNavAndFooter = routes.findIndex(value => value === router.asPath);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <Head>
            <title>Homers New Design</title>
            <meta
              name="description"
              content="World's First application made for Real-Estate Agents"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <LinearIndeterminateProgressBar />
          {showNavAndFooter > -1 ? <NavbarComponent /> : null}
          <Component {...pageProps} />
          {showNavAndFooter > -1 ? <FooterComponent /> : null}
          <SnackbarComponent />
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
