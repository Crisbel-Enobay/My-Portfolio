const toggle = document.getElementById('toggle');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

// Toggle Nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

// Show Modal
openBtn.addEventListener('click', () => modal.classList.add('show-modal'));
// close modal
closeBtn.addEventListener('click', () => modal.classList.remove('show-modal'));
// hide modal
window.addEventListener('click', (e) =>
  e.target === modal ? modal.classList.remove('show-modal') : false
);
