import os
import re
import json
from datetime import datetime
import markdown

# Environment-aware paths
# Defaults to local structure, but can be overridden in GitHub Actions
BASE_DIR = os.getenv("WEBSITE_PATH", os.path.expanduser("~/Gemini/dentplant"))
OUTPUT_DIR = os.path.join(BASE_DIR, "article")
WEBSITE_DATA_PATH = os.path.join(BASE_DIR, "data", "posts.json")

def clean_field(text):
    if not text: return ""
    text = text.replace("**", "").strip()
    return text

def parse_bilingual_content(markdown_content):
    data = {
        "source": "Dental News",
        "date": datetime.now().strftime("%B %d, %Y"),
        "image_url": "",
        "en": {"title": "", "teaser": "", "content": ""},
        "el": {"title": "", "teaser": "", "content": ""}
    }

    def get_field(marker, text):
        # Flexible regex: handles [MARKER], **[MARKER]**, [MARKER]: with or without spaces
        pattern = rf"(?:\*\*|__)?\[{marker}\](?:\*\*|__)?\s*:\s*(.*?)(?=\n\s*(?:---|\*\*|__|\[)|$)"
        match = re.search(pattern, text, re.IGNORECASE | re.DOTALL)
        return clean_field(match.group(1)) if match else ""

    # Extract Common Fields
    data["source"] = get_field("SOURCE", markdown_content) or "Dental News"
    data["date"] = get_field("DATE", markdown_content) or datetime.now().strftime("%B %d, %Y")
    data["image_url"] = get_field("IMAGE_URL", markdown_content)

    # Extract English Fields
    data["en"]["title"] = get_field("EN_TITLE", markdown_content)
    data["en"]["teaser"] = get_field("EN_TEASER", markdown_content)
    data["en"]["content"] = markdown.markdown(get_field("EN_CONTENT", markdown_content))

    # Extract Greek Fields
    data["el"]["title"] = get_field("EL_TITLE", markdown_content)
    data["el"]["teaser"] = get_field("EL_TEASER", markdown_content)
    data["el"]["content"] = markdown.markdown(get_field("EL_CONTENT", markdown_content))

    return data

def publish_blog_post(markdown_content):
    data = parse_bilingual_content(markdown_content)
    
    # CRITICAL: Prevent publishing empty files if parsing failed
    if not data["en"]["title"] and not data["el"]["title"]:
        print("❌ ERROR: No content could be parsed from AI output.")
        print("--- START OF AI OUTPUT ---")
        print(markdown_content)
        print("--- END OF AI OUTPUT ---")
        
        # Save a debug file of the failed output
        debug_path = os.path.join(OUTPUT_DIR, f"debug-failed-{datetime.now().strftime('%Y%m%d-%H%M%S')}.md")
        with open(debug_path, "w") as f:
            f.write(markdown_content)
        print(f"Failed output saved to {debug_path} for debugging.")
        return None
    
    # Generate Standalone Filename
    date_str = datetime.now().strftime("%Y-%m-%d")
    base_name = f"news-{date_str}"
    file_name = f"{base_name}.html"
    file_path = os.path.join(OUTPUT_DIR, file_name)
    
    counter = 0
    while os.path.exists(file_path):
        counter += 1
        file_name = f"{base_name}-{counter}.html"
        file_path = os.path.join(OUTPUT_DIR, file_name)

    # Use selected image or fallback for OG/Twitter
    seo_image = data["image_url"] if data["image_url"] else "https://www.dentplant.gr/images/dental-implant-circle-256-torqued.webp"
    
    # On-page display fallback (gradient div as per original bot logic)
    image_html = f'<img src="{data["image_url"]}" alt="Dental News" class="w-full h-full object-cover">' if data["image_url"] else \
                 '<div class="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>'

    # Create Bilingual Standalone Page
    html_card = f"""<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{data['el']['title']} | {data['en']['title']}</title>
    <meta name="description" content="{data['el']['teaser']} | {data['en']['teaser']}">
    <link rel="canonical" href="https://www.dentplant.gr/article/{{file_name}}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://www.dentplant.gr/article/{{file_name}}">
    <meta property="og:title" content="{data['el']['title']} | {data['en']['title']}">
    <meta property="og:description" content="{data['el']['teaser']} | {data['en']['teaser']}">
    <meta property="og:image" content="{seo_image}">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{data['el']['title']} | {data['en']['title']}">
    <meta name="twitter:description" content="{data['el']['teaser']} | {data['en']['teaser']}">
    <meta name="twitter:image" content="{seo_image}">

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body {{ font-family: 'Inter', sans-serif; background-color: #f3f4f6; }}
        [lang="en"] .lang-el, [lang="el"] .lang-en {{ display: none; }}
        .prose h3 {{ font-weight: 700; color: #111827; margin-top: 1.5rem; font-size: 1.25rem; }}
        .prose p {{ margin-bottom: 1rem; color: #4b5563; }}
        .prose ul {{ list-style-type: disc; padding-left: 1.25rem; margin-bottom: 1rem; color: #4b5563; }}
        .prose li {{ margin-bottom: 0.25rem; }}
    </style>
</head>
<body class="p-4 md:p-10 flex justify-center relative">
    <!-- Discreet Back Arrow -->
    <a href="../blog.html" class="fixed top-6 left-6 text-gray-400 hover:text-blue-600 transition-colors z-50 group" title="Back to Blog">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
    </a>

    <div class="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div class="h-[400px] w-full">{image_html}</div>
        <div class="p-8 md:p-12">
            <div class="flex justify-between items-center mb-6">
                <span class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase rounded-full">Breakthrough News</span>
                <button onclick="toggleLang()" class="text-xs font-bold text-gray-400 hover:text-blue-600">EN / ΕΛ</button>
            </div>
            
            <div class="lang-en">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">{data['en']['title']}</h1>
                <p class="text-sm text-gray-400 mb-8">{data['source']} • {data['date']}</p>
                <div class="prose">{data['en']['content']}</div>
            </div>

            <div class="lang-el">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">{data['el']['title']}</h1>
                <p class="text-sm text-gray-400 mb-8">{data['source']} • {data['date']}</p>
                <div class="prose">{data['el']['content']}</div>
            </div>
        </div>
    </div>
    <script>
        function toggleLang() {{
            const html = document.documentElement;
            html.lang = html.lang === 'el' ? 'en' : 'el';
            localStorage.setItem('lang', html.lang);
        }}
        // Apply saved language
        const savedLang = localStorage.getItem('lang') || 'el';
        document.documentElement.lang = savedLang;
    </script>
</body>
</html>"""

    try:
        if not os.path.exists(OUTPUT_DIR): os.makedirs(OUTPUT_DIR)
        with open(file_path, "w") as f: f.write(html_card)

        # REDUNDANCY: Also save a copy in the local bot folder
        local_output = os.path.join(os.path.dirname(__file__), "output")
        if not os.path.exists(local_output): os.makedirs(local_output)
        local_file_path = os.path.join(local_output, file_name)
        with open(local_file_path, "w") as f: f.write(html_card)

        # Update Website posts.json
        if os.path.exists(WEBSITE_DATA_PATH):
            with open(WEBSITE_DATA_PATH, "r") as f:
                posts = json.load(f)
            
            new_post = {
                "id": datetime.now().timestamp(),
                "date": data["date"],
                "source": data["source"],
                "image": data["image_url"],
                "url": f"article/{file_name}", # Path relative to blog.html
                "en": data["en"],
                "el": data["el"]
            }
            posts.insert(0, new_post) # Newest first
            with open(WEBSITE_DATA_PATH, "w") as f:
                json.dump(posts, f, indent=2, ensure_ascii=False)

        print(f"Bilingual post published to: {file_path}")
        return file_path
    except Exception as e:
        print(f"Error publishing: {e}")
        return None
