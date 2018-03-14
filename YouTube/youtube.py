import csv
import json
import pandas
import requests
import sys
import time
import urllib.request
from urllib.parse import urlparse
from urllib.parse import quote


GET_VIDEO_URL = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id={}&key={}"
api_key = ""
with open("credentials.txt", "r") as apiFile:
    api_key = apiFile.readline().rstrip()

def buildGetVideoURL(query):
    return GET_VIDEO_URL.format(query, api_key)

def request(url):
    response = requests.get(url)
    if (response.status_code == 429):
        wait = response.headers["Retry-After"]
        print("wait {}".format(wait))
        time.sleep(int(wait) + 1)
        return request(url)
    if (response.status_code != 200):
        print("status code {}".format(response.status_code))
        print(response.headers)
        print(response.content)
        return None, None
    contents = response.json()

    results = contents["items"]
    if (len(results) == 0):
        return None
    return results[0]

def getVideo(url):
    result = request(url)
    if result is not None:
        return result["statistics"]
    return None


movies_csv = pandas.read_csv("../TMDb/results.csv")
movies = movies_csv[["common_title", "videoKey"]]

entries = []
for index, movie in movies.iterrows():
    title = movie["common_title"]
    videoKey = movie["videoKey"]
    if videoKey != videoKey:
        continue
    videoUrl = buildGetVideoURL(videoKey)
    result = getVideo(videoUrl)
    if result is None:
        print("Could not find video {} key={} \nurl={}".format(title, videoKey, videoUrl))
        continue
    entry = {"title" : title.strip(), "result" : result}
    entries.append(entry)

with open("data.csv", "w") as outfile:
    csv_file = csv.DictWriter(outfile,
                        fieldnames=(["common_title"] + list(entries[0]["result"].keys())),
                        restval=None)
    csv_file.writeheader()
    for entry in entries:
        title = entry["title"]
        result = entry["result"]
        result["common_title"] = title
        csv_file.writerow(result)
