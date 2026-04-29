import os

path = r'c:\Users\angel\.gemini\antigravity\scratch\dentplant'
for root, dirs, files in os.walk(path):
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                # Replace exact matches of href="faq.html"
                new_content = content.replace('href="faq.html"', 'href="implants.html"')
                if content != new_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f'Updated: {filepath}')
            except Exception as e:
                print(f'Error in {file}: {e}')
