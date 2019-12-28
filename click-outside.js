const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');

  // grab the img src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  console.log(button.closest('.card'));


  // populate the modal with the new info
  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
  `
  modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.inner-modal');
  if (isOutside) {
    closeModal()
  }
})

window.addEventListener('keydown', event => {
  if (event.key === "Escape") {
    closeModal();
  }
})