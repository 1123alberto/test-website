import os
import re

# List all html files in the current directory
files = [f for f in os.listdir('.') if f.endswith('.html')]

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        changed = False
        # Update the global heading rule to use :not(.keep-style)
        if 'html[lang="el"] h1' in content and ':not(.keep-style)' not in content:
            content = content.replace('html[lang="el"] h1', 'html[lang="el"] h1:not(.keep-style)')
            content = content.replace('html[lang="el"] h2', 'html[lang="el"] h2:not(.keep-style)')
            content = content.replace('html[lang="el"] h3', 'html[lang="el"] h3:not(.keep-style)')
            content = content.replace('html[lang="el"] h4', 'html[lang="el"] h4:not(.keep-style)')
            content = content.replace('html[lang="el"] h5', 'html[lang="el"] h5:not(.keep-style)')
            content = content.replace('html[lang="el"] h6', 'html[lang="el"] h6:not(.keep-style)')
            changed = True
            
        if changed:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated {f}")
    except Exception as e:
        print(f"Error processing {f}: {e}")
