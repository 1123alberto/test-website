import os
import re

directory = '/home/angelo/Gemini/dentplant'

def update_files():
    html_files = [f for f in os.listdir(directory) if f.endswith('.html')]

    for filename in html_files:
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update JSON-LD schema
        content = re.sub(
            r'"medicalSpecialty":\s*"Dentistry"',
            r'"medicalSpecialty": ["Dentistry", "Cosmetic Dentistry", "Orthodontics"]',
            content
        )

        # Update Desktop Nav
        # Match <a ... href="services.html" data-i18n="nav.services">Υπηρεσιες</a>
        # Keep the exact class it had
        def desktop_replacer(match):
            original_class = match.group(1)
            return f'''<a class="{original_class}" href="implants.html" data-i18n="nav.implants">Εμφυτεύματα</a>
        <a class="hover:text-gray-200 transition-colors" href="oral-surgery.html" data-i18n="nav.surgery">Χειρουργική</a>
        <a class="hover:text-gray-200 transition-colors" href="aesthetics.html" data-i18n="nav.aesthetics">Αισθητική</a>
        <a class="hover:text-gray-200 transition-colors" href="clear-aligners.html" data-i18n="nav.aligners">Clear Aligners</a>'''
        
        content = re.sub(
            r'<a\s+class="([^"]+)"\s+href="services\.html"\s+data-i18n="nav\.services">\s*Υπηρεσιες\s*</a>',
            desktop_replacer,
            content
        )

        # Update Mobile Nav
        # Match <a href="services.html" data-i18n="nav.services" class="hover:text-yellow-300 transition-colors">Υπηρεσιες</a>
        def mobile_replacer(match):
            return f'''<a href="implants.html" data-i18n="nav.implants" class="hover:text-yellow-300 transition-colors">Εμφυτεύματα</a>
        <a href="oral-surgery.html" data-i18n="nav.surgery" class="hover:text-yellow-300 transition-colors">Χειρουργική</a>
        <a href="aesthetics.html" data-i18n="nav.aesthetics" class="hover:text-yellow-300 transition-colors">Αισθητική</a>
        <a href="clear-aligners.html" data-i18n="nav.aligners" class="hover:text-yellow-300 transition-colors">Clear Aligners</a>'''

        content = re.sub(
            r'<a\s+href="services\.html"\s+data-i18n="nav\.services"\s+class="hover:text-yellow-300 transition-colors">\s*Υπηρεσιες\s*</a>',
            mobile_replacer,
            content
        )

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
    print("Files updated successfully!")

if __name__ == '__main__':
    update_files()
