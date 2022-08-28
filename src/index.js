import "./js/swiper-slider";

// MODAL
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        openModalBtn1: document.querySelector('[data-modal-open1]'),
        openModalBtn2: document.querySelector('[data-modal-open2]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
    }
})();

// MODAL-2
(() => {
    const refs = {
        openModal2Btn: document.querySelector('[data-modal2-open]'),
        closeModal2Btn: document.querySelector('[data-modal-close2]'),
        modal: document.querySelector('[data-modal]'),
        modal2: document.querySelector('[data-modal2]'),
        modal3: document.querySelector('[data-modal-appear]'),
    };

    refs.closeModal2Btn.addEventListener('click', toggleModal);
    refs.openModal2Btn.addEventListener('click', toggleModal2);
    refs.openModal2Btn.addEventListener('click', toggleModal3);

    function toggleModal() {
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
        refs.modal2.classList.toggle('is-close');
        refs.modal3.classList.toggle('is-open');
    }
    function toggleModal2() {
        refs.modal2.classList.toggle('is-close');
    }
    function toggleModal3() {
        refs.modal3.classList.toggle('is-open');
    }
})();
