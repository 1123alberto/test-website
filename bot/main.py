import os
from generator import generate_blog_post
from publisher import publish_blog_post
from scraper import fetch_dental_news


import json

def main():
    print("[1] Fetching latest dental journal news...")
    news_items = fetch_dental_news()

    if not news_items:
        print("No news found. Exiting.")
        return

    # Load existing posts to avoid duplicates
    try:
        from publisher import WEBSITE_DATA_PATH
        with open(WEBSITE_DATA_PATH, "r", encoding="utf-8") as f:
            existing_posts = json.load(f)
            existing_titles = [p["en"]["title"].lower() for p in existing_posts]
    except Exception:
        existing_titles = []

    # Filter out duplicates (simple title match)
    original_count = len(news_items)
    news_items = [item for item in news_items if item["title"].lower() not in existing_titles]
    
    if len(news_items) < original_count:
        print(f"Filtered out {original_count - len(news_items)} already published articles.")

    if not news_items:
        print("All fetched news items have already been published. Try again later.")
        return

    # Combine news for the AI, including image URLs for selection
    news_data = ""
    for i, item in enumerate(news_items):
        news_data += (
            f"--- Article {i} ---\n"
            f"Title: {item['title']}\n"
            f"Source: {item['source']}\n"
            f"Date: {item['date']}\n"
            f"Summary: {item['summary']}\n"
            f"ImageURL: {item['image']}\n\n"
        )

    print("[2] Generating blog post with AI...")
    blog_markdown = generate_blog_post(news_data, practice_name="Dentplant")

    if blog_markdown.startswith("Error:"):
        print(blog_markdown)
        return

    print(f"[3] Publishing to output folder...")
    file_path = publish_blog_post(blog_markdown)

    if file_path:
        filename = os.path.basename(file_path)
        print(f"\n" + "="*50)
        print(f"🚀 SUCCESS!")
        print(f"📄 Post: {filename}")
        print(f"📍 Path: {file_path}")
        print("="*50 + "\n")
    else:
        print("❌ Failed to publish blog post.")


if __name__ == "__main__":
    main()
