'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden'); // Ensure the overlay is also shown when the modal is opened
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Manipulating classses

//ClassList = Element property in js used to interact
//            with an element's list of classes (CSS classes)
//            Allows you to make reusable classes for many elements
//            across your webpage

//add()
//remove()
//toggle(Remove if present, add if not) - used intead of add an remove.
//replace(old class, new class) - replaces old class with new class     ('enabled', 'disabled')
//contains() like bolean if element contain a class it returns true if not it returns false

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
