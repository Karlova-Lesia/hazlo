import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    token: null,
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.token = payload.token;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
