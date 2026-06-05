import urllib.request
import re
try:
    html = urllib.request.urlopen('https://www.pinterest.com/pin/1056375656336831603/').read().decode('utf-8')
    match = re.search(r'property=\"og:image\" name=\"og:image\" content=\"([^\"]+)\"', html)
    if match:
        print(match.group(1))
    else:
        print('Not found')
except Exception as e:
    print(e)
