import os
import glob

article_dir = "/home/angelo/Gemini/dentplant/article"

for file_path in glob.glob(os.path.join(article_dir, "*.html")):
    with open(file_path, "r") as f:
        content = f.read()
    
    # Replace aspect-video w-full with h-[400px] w-full
    content = content.replace('<div class="aspect-video w-full">', '<div class="h-[400px] w-full">')
    
    with open(file_path, "w") as f:
        f.write(content)
print("Updated all articles to fixed h-[400px] height.")
