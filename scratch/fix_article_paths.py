import os
import re

article_dir = 'article'
root_files = ['index.html', 'about.html', 'implants.html', 'oral-surgery.html', 'aesthetics.html', 'clear-aligners.html', 'contact.html', 'privacy.html', 'disclaimer.html']
root_dirs = ['js/', 'css/', 'images/']

for filename in os.listdir(article_dir):
    if filename.endswith('.html'):
        filepath = os.path.join(article_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace root files
        for root_file in root_files:
            content = re.sub(f'href="{root_file}"', f'href="../{root_file}"', content)
        
        # Replace root directories
        for root_dir in root_dirs:
            content = re.sub(f'src="{root_dir}', f'src="../{root_dir}', content)
            content = re.sub(f'href="{root_dir}', f'href="../{root_dir}', content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filename}")
