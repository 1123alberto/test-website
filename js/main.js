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
  window.openModal = openModal;

  function closeModal(modal) {
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
  window.closeModal = closeModal;

  // Sync Heights Implementation using Card 1 as reference
  const syncArticleHeights = () => {
    const slots = document.querySelectorAll('.article-slot');
    if (slots.length > 0) {
      // Reset heights first to measure natural height
      slots.forEach(slot => slot.style.minHeight = 'auto');
      
      // Card 1 is the reference
      const referenceHeight = slots[0].offsetHeight;
      slots.forEach(slot => {
        slot.style.minHeight = `${referenceHeight}px`;
      });
    }
  };

  // Initial sync and event listeners
  window.addEventListener('load', () => {
    setTimeout(syncArticleHeights, 200); // Wait for fonts/layout
  });
  window.addEventListener('resize', syncArticleHeights);
  document.addEventListener('languageChanged', syncArticleHeights);

  // Alternating Articles Logic
  const articleSlots = document.querySelectorAll('.article-slot');
  articleSlots.forEach((slot, index) => {
    let currentIdx = 0;
    const items = slot.querySelectorAll('.article-item');
    if (items.length < 2) return;

    const rotate = () => {
      const currentItem = items[currentIdx];
      currentIdx = (currentIdx + 1) % items.length;
      const nextItem = items[currentIdx];

      // Fade out current
      currentItem.classList.remove('active-article');
      currentItem.classList.add('inactive-article');

      // Fade in next
      nextItem.classList.remove('inactive-article');
      nextItem.classList.add('active-article');
    };

    // Staggered start: First change happens at 4s + stagger
    setTimeout(() => {
      rotate();
      // Subsequent rotations every 12 seconds
      setInterval(rotate, 12000);
    }, 4000 + (index * 1500));
  });
});
