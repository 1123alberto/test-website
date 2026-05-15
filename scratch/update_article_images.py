import os
import glob

article_dir = "/home/angelo/Gemini/dentplant/article"

for file_path in glob.glob(os.path.join(article_dir, "*.html")):
    with open(file_path, "r") as f:
        content = f.read()
    
    # Replace h-64 with aspect-video w-full
    content = content.replace('<div class="h-64">', '<div class="aspect-video w-full">')
    
    with open(file_path, "w") as f:
        f.write(content)
print("Updated all articles image containers.")
