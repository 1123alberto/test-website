import re

with open('/home/angelo/Gemini/dentplant/css/ismile.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Prefix container
css = re.sub(r'\.container\b', '.ismile-scope .container', css)

# Write back
with open('/home/angelo/Gemini/dentplant/css/ismile.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Scoped container in ismile.css")
