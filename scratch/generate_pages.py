import os
import re

dp_dir = '/home/angelo/Gemini/dentplant'
ismile_dir = '/home/angelo/Gemini/whitening-updated-site'

def extract_main(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r'<main.*?>(.*?)</main>', content, re.DOTALL)
    return match.group(1) if match else ''

def update_file(filename, title_key, desc_key, new_main_content=None):
    filepath = os.path.join(dp_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update title and description keys
    content = re.sub(r'<title data-i18n="[^"]+">', f'<title data-i18n="{title_key}">', content)
    content = re.sub(r'data-i18n-content="[^"]+"', f'data-i18n-content="{desc_key}"', content)
    
    # Also update the canonical link
    content = re.sub(r'<link rel="canonical" href="https://www.dentplant.gr/services.html">', f'<link rel="canonical" href="https://www.dentplant.gr/{filename}">', content)
    
    # Update active nav state
    content = re.sub(r'<a class="text-yellow-300 transition-colors" href="services.html"', r'<a class="hover:text-gray-200 transition-colors" href="services.html"', content)

    # Replace <main> content if provided
    if new_main_content:
        content = re.sub(r'<main class="[^"]*">.*?</main>', f'<main class="flex-grow container mx-auto px-6 py-12 max-w-6xl">{new_main_content}</main>', content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# aesthetics.html (combine whitening and veneers)
whitening_main = extract_main(os.path.join(ismile_dir, 'whitening.html'))
veneers_main = extract_main(os.path.join(ismile_dir, 'veneers.html'))
aesthetics_main = whitening_main + "\n<hr class='my-16 border-gray-200'>\n" + veneers_main

# Clear Aligners
aligners_main = extract_main(os.path.join(ismile_dir, 'aligners.html'))

update_file('aesthetics.html', 'title.aesthetics', 'desc.aesthetics', aesthetics_main)
update_file('clear-aligners.html', 'title.aligners', 'desc.aligners', aligners_main)
update_file('implants.html', 'title.implants', 'desc.implants')
update_file('oral-surgery.html', 'title.surgery', 'desc.surgery')

print("Files generated successfully!")
