import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export type Tokens = {
  refreshToken: string;
  accessToken: string;
};

export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  emailAddress: string;
  phoneNumber: string;
  address: {
    addressId: number;
    city: {
      cityId: number;
      cityName: string;
      country: number;
      state: number;
    };
    addressLineOne: string;
  };
  gender: string;
  roles: {
    id: number;
    roleName: string;
  }[];
};

export type UserState = {
  tokens: Tokens;
  userData: UserData;
};

const INITIAL_STATE: UserState = {
  tokens: {
    refreshToken: '',
    accessToken: '',
  },
  userData: {
    id: 0,
    firstName: '',
    lastName: '',
    password: '',
    username: '',
    emailAddress: '',
    phoneNumber: '',
    address: {
      addressId: 0,
      city: {
        cityId: 0,
        cityName: '',
        country: 0,
        state: 0,
      },
      addressLineOne: '',
    },
    gender: '',
    roles: [],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setTokens: (state, action: PayloadAction<Tokens>) => {
      state.tokens = action.payload;
    },
    unsetTokens: state => {
      state.tokens = INITIAL_STATE.tokens;
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    unsetUserData: state => {
      state.userData = INITIAL_STATE.userData;
    },
    logoutUser: state => {
      state.tokens = INITIAL_STATE.tokens;
      state.userData = INITIAL_STATE.userData;
    },
  },
});

export const {setTokens, unsetTokens, setUserData, unsetUserData, logoutUser} =
  userSlice.actions;
export const getTokens = (state: RootState) => state.user.tokens;
export const getUserData = (state: RootState) => state.user.userData;
export const UserReducer = userSlice.reducer;
