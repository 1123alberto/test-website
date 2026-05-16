import feedparser
import time

import requests
from bs4 import BeautifulSoup

FEEDS = [
    "https://www.dentistrytoday.com/feed/",
    "https://bmcoralhealth.biomedcentral.com/articles/most-recent/rss.xml",
    "https://www.dentistryiq.com/rss",
    "https://www.sciencedaily.com/rss/health_medicine/dentistry.xml",
    "https://www.dental-tribune.com/news/feed/",
    "https://www.beckersdental.com/feed/",
]


def fetch_dental_news():
    articles = []
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    })

    for url in FEEDS:
        print(f"Fetching from {url}...")
        feed = feedparser.parse(url)
        for entry in feed.entries[:5]:  # Get latest 5 from each
            image_url = None

            # 1. Try to find image in media content
            if "media_content" in entry and len(entry.media_content) > 0:
                image_url = entry.media_content[0]["url"]
            # 2. Try enclosures
            elif "enclosures" in entry and len(entry.enclosures) > 0:
                for enc in entry.enclosures:
                    if enc.get("type", "").startswith("image/"):
                        image_url = enc.get("url")
                        break
            # 3. Try parsing HTML fields (summary, description, content) for <img> tag
            if not image_url or "bacteria-on-tooth-surface.webp" in image_url:
                image_url = None # Reset if it was the generic one
                html_fields = [
                    entry.get("summary", ""),
                    entry.get("description", ""),
                ]
                if "content" in entry:
                    for c in entry.content:
                        html_fields.append(c.get("value", ""))

                for html_content in html_fields:
                    if not html_content:
                        continue
                    soup = BeautifulSoup(html_content, features="html.parser")
                    img_tag = soup.find("img")
                    if img_tag:
                        image_url = img_tag.get("src")
                        if image_url:
                            break

            # 4. Fallback: Fetch the actual article page and look for meta images
            if not image_url and entry.link:
                try:
                    resp = session.get(entry.link, timeout=5)
                    if resp.status_code == 200:
                        soup = BeautifulSoup(resp.text, features="html.parser")
                        # Look for OpenGraph image
                        og_img = soup.find("meta", property="og:image")
                        if og_img and og_img.get("content"):
                            image_url = og_img.get("content")
                        # Look for Twitter image
                        if not image_url:
                            tw_img = soup.find("meta", name="twitter:image")
                            if tw_img and tw_img.get("content"):
                                image_url = tw_img.get("content")
                        # Look for first large image if still nothing
                        if not image_url:
                            # This is a bit risky but can work as a last resort
                            for img in soup.find_all("img"):
                                src = img.get("src")
                                if src and src.startswith("http") and not any(x in src.lower() for x in ["icon", "logo", "avatar", "ads"]):
                                    image_url = src
                                    break
                except Exception as e:
                    print(f"Error fetching article page for image: {e}")

            articles.append(
                {
                    "title": entry.title,
                    "link": entry.link,
                    "summary": clean_html(
                        entry.get("summary", entry.get("description", ""))
                    ),
                    "image": image_url,
                    "source": feed.feed.get("title", "Dental Journal"),
                    "date": time.strftime("%b %d, %Y", entry.published_parsed) if entry.get("published_parsed") else entry.get("published", "Recently"),
                }
            )
    return articles


def clean_html(html):
    if not html:
        return ""
    soup = BeautifulSoup(html, features="html.parser")
    return soup.get_text()


def scrape_article_from_url(url):
    """
    Scrapes a single article URL and returns a news item dictionary.
    """
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    })

    try:
        resp = session.get(url, timeout=10)
        if resp.status_code != 200:
            print(f"Failed to fetch {url}: {resp.status_code}")
            return None
        
        soup = BeautifulSoup(resp.text, features="html.parser")
        
        # Extract title
        title = ""
        og_title = soup.find("meta", property="og:title")
        if og_title:
            title = og_title.get("content")
        else:
            title = soup.title.string if soup.title else "News Article"

        # Extract image
        image_url = None
        og_img = soup.find("meta", property="og:image")
        if og_img:
            image_url = og_img.get("content")
        if not image_url:
            tw_img = soup.find("meta", name="twitter:image")
            if tw_img:
                image_url = tw_img.get("content")
        if not image_url:
            for img in soup.find_all("img"):
                src = img.get("src")
                if src and src.startswith("http") and not any(x in src.lower() for x in ["icon", "logo", "avatar", "ads"]):
                    image_url = src
                    break

        # Extract summary
        summary = ""
        og_desc = soup.find("meta", property="og:description")
        if og_desc:
            summary = og_desc.get("content")
        else:
            # Fallback to first few paragraphs
            paragraphs = soup.find_all("p")
            summary = " ".join([p.get_text() for p in paragraphs[:3]])

        # Extract source from domain
        from urllib.parse import urlparse
        domain = urlparse(url).netloc
        source = domain.replace("www.", "")

        return {
            "title": title.strip(),
            "link": url,
            "summary": clean_html(summary),
            "image": image_url,
            "source": source,
            "date": datetime.now().strftime("%b %d, %Y")
        }
    except Exception as e:
        print(f"Error scraping URL {url}: {e}")
        return None


from datetime import datetime
import sys
import argparse

def search_dental_news(query):
    """
    Searches for dental news based on a query using DuckDuckGo.
    """
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    })
    
    search_url = f"https://html.duckduckgo.com/html/?q={query}+dentistry+news"
    try:
        resp = session.get(search_url, timeout=10)
        if resp.status_code != 200:
            print(f"Search failed with status {resp.status_code}")
            return []
        
        soup = BeautifulSoup(resp.text, "html.parser")
        results = soup.find_all("a", class_="result__a")
        
        articles = []
        for res in results[:3]: # Get top 3
            url = res.get("href")
            if url:
                print(f"Found URL: {url}. Scraping...")
                item = scrape_article_from_url(url)
                if item:
                    articles.append(item)
        return articles
    except Exception as e:
        print(f"Error during search: {e}")
        return []


def fetch_trending_news():
    """
    Discovers trending dental news by performing broad searches.
    """
    trending_queries = [
        "latest dental breakthroughs 2026",
        "new dentistry research",
        "revolutionary dental technology",
        "dental industry trends 2026"
    ]
    
    all_trending = []
    seen_links = set()
    
    for query in trending_queries:
        print(f"Searching for trending: {query}...")
        results = search_dental_news(query)
        for item in results:
            if item["link"] not in seen_links:
                all_trending.append(item)
                seen_links.add(item["link"])
        
        if len(all_trending) >= 5: # Limit to top 5 unique trending items
            break
            
    return all_trending[:5]


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Dental News Scraper")
    parser.add_argument("--url", help="Scrape a specific article URL")
    parser.add_argument("--search", help="Search for a specific topic")
    
    parser.add_argument("--trending", action="store_true", help="Fetch trending dental news")
    
    args = parser.parse_args()

    if args.url:
        print(f"Scraping specific URL: {args.url}...")
        item = scrape_article_from_url(args.url)
        if item:
            print(f"Title: {item['title']}")
            print(f"Image: {item['image']}")
            print(f"Summary: {item['summary'][:100]}...")
        else:
            print("Failed to scrape URL.")
    elif args.search:
        print(f"Searching for: {args.search}...")
        results = search_dental_news(args.search)
        for item in results:
            print(f"Title: {item['title']}")
            print(f"Image: {item['image']}")
            print("-" * 20)
    elif args.trending:
        print("Fetching trending dental news...")
        results = fetch_trending_news()
        for item in results:
            print(f"Title: {item['title']}")
            print(f"Source: {item['source']}")
            print(f"Image: {item['image']}")
            print("-" * 20)
    else:
        news = fetch_dental_news()
        for item in news:
            print(f"Title: {item['title']}")
            print(f"Image: {item['image']}")
            print("-" * 20)
