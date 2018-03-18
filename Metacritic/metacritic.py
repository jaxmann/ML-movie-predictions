import csv
import json
import re
import sys
import urllib.request
from dateutil.parser import parse

# Open data file
with open("../Data/Title_Total.txt") as f:
   titles = f.readlines()

results = []
for title in titles[0:10]:
    # Sanitize
    title = re.sub(r'[^\w\s]', lambda m: '-' if m.group(0) == '-' else '', title)   # Remove punctuation except tacs
    title = title.replace(" ", "-")     # Convert spaces to tacs
    title = title.replace("&", "and")   # Replace & with and
    title = title[:-1]                  # Remove newline character
    try:
        contents = urllib.request.urlopen("http://api.marcalencc.com/metacritic/search/" + title + "/movie").read()
        results.append(contents)
    except Exception:
        print("Failed on " + title)

# Make a CSV file
fh = open("metacritic.csv", mode="w", newline="")

# Add headers
headers = ["Title","ReleaseDate","Genre","Rating"]
wr = csv.DictWriter(fh, fieldnames=headers)
wr.writeheader()

for elem in results:
    items = json.loads(elem)

    # Check for duplicates/multiple returns
    title = items[0]["SearchItems"][0]["Title"]
    date = parse(items[0]["SearchItems"][0]["ReleaseDate"])
    ind = 0
    iterItems = iter(items[0]["SearchItems"])
    next(iterItems)
    for i, item in enumerate(iterItems):
        if title == item["Title"]:
            # Compare dates
            if (parse(item["ReleaseDate"]) > date):
                ind = i + 1
                date = parse(item["ReleaseDate"])

    item = items[0]["SearchItems"][ind]

    # Compress into a clean dict
    clean = {"Title": item["Title"], "ReleaseDate": item["ReleaseDate"], "Genre": item["Genre"], "Rating": item["Rating"]["CriticRating"]}

    # Add item to array
    wr.writerow(clean)

# Close the file
fh.close()