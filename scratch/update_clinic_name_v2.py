import os

path = r'c:\Users\angel\.gemini\antigravity\scratch\dentplant'
replacements = [
    ('Dental Implant & Aesthetics Clinic', 'Dental Implants & Aesthetics Clinic'),
    ('Dentplant Clinic', 'Dental Implants & Aesthetics Clinic')
]

for root, dirs, files in os.walk(path):
    for file in files:
        if file.endswith(('.html', '.js')):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements:
                    new_content = new_content.replace(old, new)
                
                if content != new_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f'Updated: {filepath}')
            except Exception as e:
                print(f'Error in {file}: {e}')
