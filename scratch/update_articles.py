import os
import glob

article_dir = "/home/angelo/Gemini/dentplant/article"
back_arrow_html = """<body class="p-4 md:p-10 flex justify-center relative">
    <!-- Discreet Back Arrow -->
    <a href="../blog.html" class="fixed top-6 left-6 text-gray-400 hover:text-blue-600 transition-colors z-50 group" title="Back to Blog">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
    </a>"""

for file_path in glob.glob(os.path.join(article_dir, "*.html")):
    with open(file_path, "r") as f:
        content = f.read()
    
    # Replace body tag
    content = content.replace('<body class="p-4 md:p-10 flex justify-center">', back_arrow_html)
    
    # Remove back button div - match different indentation or spacing
    import re
    button_pattern = r'<div class="mt-12 pt-8 border-t border-gray-100 flex justify-center">\s*<a href="\.\./blog\.html" class="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all">Back to Blog Hub</a>\s*</div>'
    content = re.sub(button_pattern, "", content, flags=re.DOTALL)
    
    with open(file_path, "w") as f:
        f.write(content)
print("Updated all articles.")
