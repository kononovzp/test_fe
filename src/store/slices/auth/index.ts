import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '@/models';

interface IAuthState {
  token: string | null;
  user: IUser | null;
}

const initialState: IAuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.clear();
      sessionStorage.clear();
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
