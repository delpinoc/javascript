'use strict';

// DOM Elements
const domModal = document.querySelector('.modal');
const domBtnExitModal = document.querySelector('.close-modal');
const domBtnsShowModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

// funciones
const displayModal = function () {
    domModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    domModal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let numberBtn = 0; numberBtn < domBtnsShowModal.length; numberBtn++) {
    domBtnsShowModal[numberBtn].addEventListener('click', displayModal);
}

domBtnExitModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (kbEvent) {
    if (kbEvent.key === 'Escape' && !domModal.classList.contains("hidden")) {
        closeModal();
    }
});
