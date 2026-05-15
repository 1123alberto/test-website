/**
 * blog.js - Dynamic bilingual blog renderer for Dentplant
 */
(function() {
    const blogGrid = document.getElementById('blog-grid');
    const loadingIndicator = document.getElementById('loading-indicator');
    const errorMessage = document.getElementById('error-message');

    let allPosts = [];

    async function init() {
        try {
            const response = await fetch('data/posts.json?v=' + Date.now());
            if (!response.ok) throw new Error('Failed to fetch posts');
            
            allPosts = await response.json();
            
            // Sort by ID (timestamp) descending - newest first
            allPosts.sort((a, b) => b.id - a.id);
            
            renderPosts();
            
            if (loadingIndicator) loadingIndicator.style.display = 'none';
        } catch (error) {
            console.error('Blog Error:', error);
            if (loadingIndicator) loadingIndicator.style.display = 'none';
            if (errorMessage) {
                errorMessage.classList.remove('hidden');
                if (window.location.protocol === 'file:') {
                    errorMessage.innerHTML = 'Failed to load blog posts.<br><span class="text-sm text-gray-500 font-normal">Note: Opening this file directly (file://) blocks data loading due to browser security. Please run a local web server (e.g., <code>python -m http.server</code>) or view on the live site.</span>';
                }
            }
        }
    }

    function renderPosts() {
        if (!blogGrid) return;
        
        const lang = (window.i18n && typeof window.i18n.getCurrentLang === 'function') 
            ? window.i18n.getCurrentLang() 
            : 'el';
            
        blogGrid.innerHTML = '';
        
        if (allPosts.length === 0) {
            blogGrid.innerHTML = '<div class="col-span-full text-center py-20 text-gray-400 italic">No posts found.</div>';
            return;
        }

        allPosts.forEach(post => {
            const content = post[lang] || post['el'] || post['en'];
            if (!content) return;

            const card = document.createElement('article');
            card.className = 'blog-card bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col';
            
            const readMoreText = (window.i18n && typeof window.i18n.t === 'function') 
                ? window.i18n.t('blog.read_more') 
                : (lang === 'el' ? 'ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ' : 'READ MORE');

            card.innerHTML = `
                <div class="relative h-56 overflow-hidden bg-gray-200">
                    <img src="${post.image}" alt="${content.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy">
                    <div class="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        ${post.source}
                    </div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <div class="text-xs text-gray-400 mb-2 font-medium uppercase tracking-tighter">
                        ${post.date}
                    </div>
                    <h2 class="text-xl font-noto font-bold text-brand-blue mb-3 line-clamp-2 leading-tight hover:text-blue-600 transition-colors">
                        <a href="${post.url}">${content.title}</a>
                    </h2>
                    <p class="text-sm text-gray-600 font-open line-clamp-3 flex-grow">
                        ${content.teaser}
                    </p>
                </div>
            `;
            blogGrid.appendChild(card);
        });
    }

    // Listen for language changes
    document.addEventListener('languageChanged', (e) => {
        renderPosts();
    });

    // Initialize on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
