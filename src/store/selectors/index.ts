import { RootState } from '..';

// common
export const settings = (state: RootState) => state.settings;
// Auth
export const getIsAuthSelector = (state: RootState) => state.authState.token;
// User
export const getUserDataSelector = (state: RootState) => state.authState.user;
