import re
import sys
import urllib.request

# Open data file
with open("Title_Total.txt") as f:
    titles = f.readlines()

results = []
for title in titles:
    # Sanitize
    title = re.sub(r'[^\w\s]', lambda m: '-' if m.group(0) == '-' else '', title)   # Remove punctuation
    title = title.replace(" ", "-")     # Convert spaces to tacs
    title = title.replace("&", "and")   # Replace & with and
    title = title[:-1]                  # Remove newline character
    try:
        contents = urllib.request.urlopen("http://api.marcalencc.com/metacritic/search/" + title + "/movie").read()
        results.append(contents)
    except Exception:
        print("Failed on " + title)

print(results)
# TODO: Put the contents in someplace and process them