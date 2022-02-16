import {NavbarComponent,FooterComponent} from '@components/index';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {store} from '@states/store';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import Login from './login';
import SignUp from './signup';
import {Provider} from 'react-redux';
import '../styles/globals.scss';


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

function MyApp({Component, pageProps}: AppProps) {

  const router = useRouter();

  if(router.pathname == "/login" )
    return (
      <>
      <Login/>
      </>
    )
  else if(router.pathname == "/signup" )
    return (
      <>
      <SignUp/>
      </>
    )
  else {
    return (
      <ThemeProvider theme={theme}>
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
          <NavbarComponent />
          <Component {...pageProps} />
          <FooterComponent />
        </Provider>
      </ThemeProvider>
    )
  }
}

export default MyApp;
