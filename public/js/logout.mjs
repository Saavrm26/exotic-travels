/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert.mjs';

export const logout = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: '/api/v1/users/logout',
    });
    if (res.data.message === 'success') window.location.reload(true);
  } catch (err) {
    console.log(err);
    showAlert('error', 'Trouble logging out');
  }
};
