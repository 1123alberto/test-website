import os

# 1. Create ismile-components.js
js_content = """
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
"""

with open('/home/angelo/Gemini/dentplant/js/ismile-components.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

# 2. Update HTML files
fonts_html = """
  <!-- i-smile Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Passions+Conflict&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cal-sans@1.0.1/dist/index.min.css">
"""

def fix_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Inject fonts if not there
    if 'family=Inter' not in content:
        content = content.replace('</head>', fonts_html + '\n</head>')

    # Inject js if not there
    if 'ismile-components.js' not in content:
        content = content.replace('<script src="js/main.js"></script>', '<script src="js/ismile-components.js"></script>\n  <script src="js/main.js"></script>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_html('/home/angelo/Gemini/dentplant/clear-aligners.html')
fix_html('/home/angelo/Gemini/dentplant/aesthetics.html')
print("Fixed JS and Fonts!")
