import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {UserReducer} from './slices/user.slice';
import {LoaderReducer} from './slices/loader.slice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    loaders: LoaderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<String>
>;
