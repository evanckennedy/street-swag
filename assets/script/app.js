'use strict';

// This app requires a server to handle import statements
// and CORS issues
import * as utils from './utils.js';


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Organizer                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const modal = document.querySelector('.modal');
const openLoginModal = document.querySelector('.open-login-modal');
const closeLoginModal = document.querySelector('.close-modal-button');

openLoginModal.addEventListener('click', () => {
  modal.showModal();
})
