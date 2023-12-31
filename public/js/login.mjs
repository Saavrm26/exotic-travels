/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert.mjs';
export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success')
      showAlert('success', 'Logged in successfully');
    window.setTimeout(() => {
      location.assign('/');
    });
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
