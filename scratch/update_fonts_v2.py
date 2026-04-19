import os
import re

# List all html files in the current directory
files = [f for f in os.listdir('.') if f.endswith('.html')]

# We want Nunito 300, 400, 700
new_fonts_part = 'Nunito:300,400,700'

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        changed = False
        # Update fonts link
        if 'fonts.googleapis.com' in content:
            # Replace existing Nunito weights or add Nunito if missing
            if 'Nunito' in content:
                content = re.sub(r'Nunito:[0-9,]*', new_fonts_part, content)
            else:
                content = re.sub(r'(family=[^"]*)', r'\1%7C' + new_fonts_part, content)
            changed = True
        
        # Update the weight in the CSS rule
        if 'html[lang="el"] h1' in content:
            content = re.sub(r'(html\[lang="el"\] h1.*\{[^}]*font-family: \'Nunito\', sans-serif !important;)(\s*)(\})', 
                             r'\1\2    font-weight: 300 !important;\2\3', content)
            # If font-weight already exists, replace it
            content = re.sub(r'font-weight: [0-9]* !important;', 'font-weight: 300 !important;', content)
            changed = True
            
        if changed:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated {f}")
    except Exception as e:
        print(f"Error processing {f}: {e}")
