/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert.mjs';
export const redirectToCheckOut = async (tourId) => {
  try {
    const res = await axios({
      method: 'get',
      url: `/api/v1/bookings/checkout-session/${tourId}`,
    });
    if (res.data.status === 'success') window.location = res.data.data.url;
  } catch (err) {
    console.log(err);
    showAlert('error', 'Something went wrong');
  }
};
