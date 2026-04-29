import os
import re

def fix_links():
    root_dir = '.'
    article_dir = 'article'
    
    # Files in root that might link to articles
    root_files = ['index.html', 'implants.html', 'about.html', 'contact.html', 'aesthetics.html', 'clear-aligners.html', 'oral-surgery.html']
    
    # Article filenames
    article_filenames = [
        'article-bone-graft.html',
        'article-candidate.html',
        'article-comparison.html',
        'article-cost.html',
        'article-sedation.html',
        'article-timeline.html'
    ]

    for filename in root_files:
        filepath = os.path.join(root_dir, filename)
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Add article/ prefix to article links if not present
        changed = False
        for art in article_filenames:
            # Match href="article-filename.html" but NOT href="article/article-filename.html"
            pattern = f'href="{art}"'
            replacement = f'href="article/{art}"'
            if pattern in content:
                content = content.replace(pattern, replacement)
                changed = True
        
        if changed:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed links in {filename}")

if __name__ == "__main__":
    fix_links()
