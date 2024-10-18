// src/store/accounts/accountsActions.js
import { setLoading, login } from './accountsSlice';
import axios from 'axios';

// Example action for logging in
export const loginUser = (credentials) => async (dispatch) => {
    console.log(credentials, '________cred__________');
  dispatch(setLoading(true));
  try {
    const { access_token, verified, role } = credentials;
    dispatch(login({ access_token, verified, role }));
  } catch (error) {
    console.error('Login failed:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

// Example action for logging out
export const logoutUser = () => (dispatch) => {
  // Perform any necessary cleanup (e.g., removing tokens from storage)
//   dispatch(logout());
};
