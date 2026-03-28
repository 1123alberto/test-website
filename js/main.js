document.addEventListener('DOMContentLoaded', () => {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modals = document.querySelectorAll('.modal');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      const target = document.getElementById(targetId);
      if (target) {
        openModal(target);
      }
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-close')) {
        closeModal(modal);
      }
    });

    const closeBtns = modal.querySelectorAll('.modal-close');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(modal);
      });
    });
  });

  function openModal(modal) {
    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
});
