import React, {useEffect} from 'react';
import {useSnackbar} from 'notistack';
import {useAppSelector} from '@states/hooks';

const SnackbarComponent = () => {
  const snackbarSelector = useAppSelector(state => state.loaders.showSnackbar);

  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    if (
      snackbarSelector.snackbarType !== 'none' &&
      snackbarSelector.message !== undefined
    ) {
      enqueueSnackbar(snackbarSelector.message, {
        variant: snackbarSelector.snackbarType,
      });
    }
  }, [snackbarSelector]);

  return <span />;
};

export default SnackbarComponent;
