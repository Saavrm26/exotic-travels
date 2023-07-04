/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert.mjs';
export const updateAccountData = async (data, type) => {
  try {
    const url =
      type === 'Password'
        ? '/api/v1/users/updatePassword'
        : '/api/v1/users/updateMe';
    const res = await axios({
      method: 'patch',
      url,
      data,
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type} updated successfully`);
    }
  } catch (err) {
    showAlert('error', 'Something went wrong, please try again');
  }
};
