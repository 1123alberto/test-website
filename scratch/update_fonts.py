import os
import re

# List all html files in the current directory
files = [f for f in os.listdir('.') if f.endswith('.html')]

style_tag_el = """    html[lang="el"] h1, html[lang="el"] h2, html[lang="el"] h3, html[lang="el"] h4, html[lang="el"] h5, html[lang="el"] h6 {
        font-family: 'Nunito', sans-serif !important;
    }
"""

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        changed = False
        # Update fonts link to include Nunito if not already present
        if 'fonts.googleapis.com' in content and 'Nunito' not in content:
            content = re.sub(r'(family=[^"]*)', r'\1%7CNunito:400,700', content)
            changed = True
        
        # Add style override if style tag exists and Nunito rule doesn't
        if '</style>' in content and 'html[lang="el"] h1' not in content:
            # Insert before the closing style tag
            content = content.replace('</style>', style_tag_el + '  </style>')
            changed = True
            
        if changed:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated {f}")
    except Exception as e:
        print(f"Error processing {f}: {e}")
