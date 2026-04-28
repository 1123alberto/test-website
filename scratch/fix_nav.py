import re

def fix_file(filename, active_href):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Reset all links to inactive in desktop nav
    content = re.sub(
        r'<a class="text-yellow-300 transition-colors" href="([^"]+)"',
        r'<a class="hover:text-gray-200 transition-colors" href="\1"',
        content
    )
    
    # Set the active link
    content = re.sub(
        rf'<a class="hover:text-gray-200 transition-colors" href="{active_href}"',
        f'<a class="text-yellow-300 transition-colors" href="{active_href}"',
        content
    )
    
    # Also add css/ismile.css to aesthetics and clear-aligners
    if filename in ['aesthetics.html', 'clear-aligners.html']:
        if 'css/ismile.css' not in content:
            content = content.replace(
                '<link rel="stylesheet" href="css/output.css?v=11">',
                '<link rel="stylesheet" href="css/output.css?v=11">\n  <link rel="stylesheet" href="css/ismile.css">'
            )
            
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_file('/home/angelo/Gemini/dentplant/implants.html', 'implants.html')
fix_file('/home/angelo/Gemini/dentplant/oral-surgery.html', 'oral-surgery.html')
fix_file('/home/angelo/Gemini/dentplant/aesthetics.html', 'aesthetics.html')
fix_file('/home/angelo/Gemini/dentplant/clear-aligners.html', 'clear-aligners.html')
print("Fixed files")
