import { createSlice } from '@reduxjs/toolkit';

import { ISettingsState } from '@/models/settings';
import { ThemeMode } from '@/constants/theme';

const initialState: ISettingsState = {
  themeMode: ThemeMode.DARK,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleThemeMode(state) {
      state.themeMode = state.themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;
    },
  },
});

export const { toggleThemeMode } = settingsSlice.actions;

export default settingsSlice.reducer;
