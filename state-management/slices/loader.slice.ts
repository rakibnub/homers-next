import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export type SnackbarTypes =
  | 'none'
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export type SnackbarProps = {
  snackbarType: SnackbarTypes;
  message: string | undefined;
};

export type LoaderState = {
  topScreenLoaderState: boolean;
  showSnackbar: SnackbarProps;
};

const INITIAL_STATE: LoaderState = {
  topScreenLoaderState: false,
  showSnackbar: {
    snackbarType: 'none',
    message: undefined,
  },
};

export const loaderSlice = createSlice({
  name: 'loaders',
  initialState: INITIAL_STATE,
  reducers: {
    setTopScreenLoaderActive: state => {
      state.topScreenLoaderState = true;
    },
    setTopScreenLoaderUnActive: state => {
      state.topScreenLoaderState = false;
    },
    setTopScreenLoader: (state, action: PayloadAction<boolean>) => {
      state.topScreenLoaderState = action.payload;
    },
    showSnackBar: (state, action: PayloadAction<SnackbarProps>) => {
      state.showSnackbar = action.payload;
    },
    enqueueSnackBar: (state, action: PayloadAction<SnackbarProps>) => {
      state.showSnackbar = action.payload;
    },
  },
});

export const {
  setTopScreenLoaderActive,
  setTopScreenLoaderUnActive,
  setTopScreenLoader,
  showSnackBar,
  enqueueSnackBar,
} = loaderSlice.actions;
export const getTopScreenLoaderState = (state: RootState) =>
  state.loaders.topScreenLoaderState;
export const LoaderReducer = loaderSlice.reducer;
