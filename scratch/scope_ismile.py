import re

with open('/home/angelo/Gemini/dentplant/css/ismile.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Remove * reset
css = re.sub(r'\*\s*\{\s*margin:\s*0;\s*padding:\s*0;\s*box-sizing:\s*border-box;\s*\}', '', css)

# Remove html reset
css = re.sub(r'html\s*\{\s*scroll-behavior:[^}]+\}', '', css)
css = re.sub(r'html::-webkit-scrollbar\s*\{\s*display:\s*none;\s*\}', '', css)

# Prefix body, h1-h6, a, ul
css = re.sub(r'body\s*\{', '.ismile-scope {', css)
css = re.sub(r'h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6\s*\{', '.ismile-scope h1, .ismile-scope h2, .ismile-scope h3, .ismile-scope h4, .ismile-scope h5, .ismile-scope h6 {', css)
css = re.sub(r'^a\s*\{', '.ismile-scope a {', css, flags=re.MULTILINE)
css = re.sub(r'^ul\s*\{', '.ismile-scope ul {', css, flags=re.MULTILINE)

# Write back
with open('/home/angelo/Gemini/dentplant/css/ismile.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Add ismile-scope class to main tag in HTML files
def scope_main(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('<main class="flex-grow pb-12">', '<main class="flex-grow pb-12 ismile-scope">')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

scope_main('/home/angelo/Gemini/dentplant/clear-aligners.html')
scope_main('/home/angelo/Gemini/dentplant/aesthetics.html')

print("Scoped ismile.css and HTML updated!")
