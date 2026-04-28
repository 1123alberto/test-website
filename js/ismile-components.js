
document.addEventListener("DOMContentLoaded", () => {
    // ── Scroll Reveal Animation ──
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 50;
        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ── CTA Banner Parallax ──
    const ctaBanners = document.querySelectorAll('.cta-banner');
    if (ctaBanners.length > 0) {
        ctaBanners.forEach(banner => {
            if (!banner.querySelector('.cta-bg-image')) {
                const bgDiv = document.createElement('div');
                bgDiv.className = 'cta-bg-image';
                banner.insertBefore(bgDiv, banner.firstChild);
            }
        });

        const bgElements = document.querySelectorAll('.cta-bg-image');
        const parallax = () => {
            bgElements.forEach(bg => {
                const banner = bg.parentElement;
                const rect = banner.getBoundingClientRect();
                const windowH = window.innerHeight;
                if (rect.bottom > -200 && rect.top < windowH + 200) {
                    const progress = (windowH - rect.top) / (windowH + rect.height);
                    const translateY = (progress - 0.5) * 60;
                    bg.style.transform = `translateY(${translateY}px)`;
                }
            });
        };
        window.addEventListener('scroll', parallax, { passive: true });
        parallax();
    }

    // ── FAQ Accordion ──
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isOpen = item.classList.contains('open');

            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                openItem.classList.remove('open');
            });

            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // ── Initialize Before/After Sliders ──
    const sliders = document.querySelectorAll('.ba-slider');
    sliders.forEach(slider => {
        const overlay = slider.querySelector('.ba-overlay');
        const handle = slider.querySelector('.ba-handle');
        
        let isDragging = false;

        const updateSlider = (e) => {
            if (!isDragging && e.type !== 'mousemove' && e.type !== 'touchmove') return;
            
            const rect = slider.getBoundingClientRect();
            const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
            let percent = (x / rect.width) * 100;
            
            if (percent < 0) percent = 0;
            if (percent > 100) percent = 100;
            
            overlay.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
            handle.style.left = `${percent}%`;
        };

        const startDragging = () => isDragging = true;
        const stopDragging = () => isDragging = false;

        slider.addEventListener('mousedown', startDragging);
        slider.addEventListener('touchstart', startDragging);
        window.addEventListener('mouseup', stopDragging);
        window.addEventListener('touchend', stopDragging);
        
        slider.addEventListener('mousemove', (e) => {
            if (isDragging) updateSlider(e);
        });
        slider.addEventListener('touchmove', (e) => {
            if (isDragging) updateSlider(e);
        });

        slider.addEventListener('click', (e) => {
            isDragging = true;
            updateSlider(e);
            isDragging = false;
        });

        overlay.style.clipPath = 'inset(0 50% 0 0)';
        handle.style.left = '50%';
    });
});
