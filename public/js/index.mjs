/* eslint-disable */
import { login } from './login.mjs';
import { logout } from './logout.mjs';
import { redirectToCheckOut } from './stripe.mjs';
import { updateAccountData } from './updateAccountData.mjs';

const loginForm = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.nav__el--logout');
const updateAccountInfoForm = document.querySelector('.form-user-data');
const updateAccountPasswordForm = document.querySelector('.form-user-password');
const bookTour = document.querySelector('.book-tour');

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logoutBtn) logoutBtn.addEventListener('click', logout);

if (updateAccountInfoForm)
  updateAccountInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', updateAccountInfoForm.querySelector('#name').value);
    formData.append(
      'email',
      updateAccountInfoForm.querySelector('#email').value
    );
    formData.append(
      'photo',
      updateAccountInfoForm.querySelector('.form__upload').files[0]
    );

    updateAccountData(formData, 'Information');
  });

if (updateAccountPasswordForm)
  updateAccountPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let oldPassword =
      updateAccountPasswordForm.querySelector('#password-current').value;
    let newPassword =
      updateAccountPasswordForm.querySelector('#password').value;
    let newPasswordConfirm =
      updateAccountPasswordForm.querySelector('#password-confirm').value;
    await updateAccountData(
      { oldPassword, newPassword, newPasswordConfirm },
      'Password'
    );
    updateAccountPasswordForm.querySelector('#password-current').value = '';
    updateAccountPasswordForm.querySelector('#password').value = '';
    updateAccountPasswordForm.querySelector('#password-confirm').value = '';
  });

if (bookTour)
  bookTour.addEventListener('click', (e) => {
    e.preventDefault();

    redirectToCheckOut(bookTour.dataset.tourId);
  });
