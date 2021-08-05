const buyBtns = document.querySelectorAll('.js-buy-btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

function showBuyTicket() {
    modal.classList.add('open');
}

function closeBuyTicketModal() {
    modal.classList.remove('open');
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket);
}
closeModal.addEventListener('click', closeBuyTicketModal);
modal.addEventListener('click', closeBuyTicketModal);
modalContainer.addEventListener('click', function(even) {
    even.stopPropagation();
});