import { createSlice } from '@reduxjs/toolkit';
import { authOperation } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoadind: false,
  error: null,
  isRefreshing: false,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperation.register.pending, handlePending)
      .addCase(authOperation.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.register.rejected, handleRejected)
      .addCase(authOperation.logIn.pending, handlePending)
      .addCase(authOperation.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.logIn.rejected, handleRejected)
      .addCase(authOperation.logOut.pending, handlePending)
      .addCase(authOperation.logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperation.logOut.rejected, handleRejected)
      .addCase(authOperation.refreshUser.pending, (state) => {
        state.isRefreshing = true;
        handlePending(state);
      })
      .addCase(authOperation.refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        handleRejected(state, action);
      });
  },
});

const { reducer: authReducer } = authSlice;
export default authReducer;
