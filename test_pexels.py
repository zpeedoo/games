import urllib.request
import re

queries = ['toaster', 'crayons', 'inventor', 'cotton candy', 'telescope']

for q in queries:
    url = f"https://www.pexels.com/search/{q.replace(' ', '%20')}/"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'src="(https://images.pexels.com/photos/[^"]+)"', html)
        if match:
            print(f"Found {q}: {match.group(1)}")
        else:
            print(f"No image found for {q}")
    except Exception as e:
        print(f"Error for {q}: {e}")
