import React, {FC, useState} from 'react';
import Router from 'next/router';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const LinearIndeterminateComponent: FC = () => {
  const [showProgressBar, setProgressBarState] = useState<boolean>(false);

  Router.events.on('routeChangeStart', () => setProgressBarState(true));
  Router.events.on('routeChangeError', () => setProgressBarState(false));
  Router.events.on('routeChangeComplete', () => setProgressBarState(false));

  return (
    <>
      {showProgressBar && (
        <Box
          sx={{
            width: '100vw',
            position: 'absolute',
            top: 0,
            zIndex: 10,
            left: 0,
            right: 0,
          }}>
          <LinearProgress />
        </Box>
      )}
    </>
  );
};

export default LinearIndeterminateComponent;
