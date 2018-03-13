import csv
import json
import requests
import sys
import time
import urllib.request
from urllib.parse import urlparse
from urllib.parse import quote


SEARCH_MOVIES_URL = "https://api.themoviedb.org/3/search/movie?api_key={}&language=en-US&query={}&page=1&include_adult=false"
GET_MOVIE_VIDEO_URL = "https://api.themoviedb.org/3/movie/{}/videos?api_key={}&language=en-US"
api_key = ""

with open("credentials.txt", "r") as apiFile:
    api_key = apiFile.readline().rstrip()

titles = []
titleFile = open("../Data/Title_Total.txt", "r")
for line in titleFile:
    titles.append(line)
titleFile.close()

def buildSearchMoviesURL(query):
    query = quote(query)
    return SEARCH_MOVIES_URL.format(api_key, query)

def buildGetMovieVideoURL(query):
    return GET_MOVIE_VIDEO_URL.format(query, api_key)

def request(url):
    response = requests.get(url)
    if (response.status_code == 429):
        wait = response.headers["Retry-After"]
        print("wait {}".format(wait))
        time.sleep(int(wait) + 1)
        return request(url)
    if (response.status_code != 200):
        print("status code {}".format(response.status_code))
        return None, None
    contents = response.json()

    results = contents["results"]
    if (len(results) == 0):
        return None
    return results[0]


def getMovie(url):
    result = request(url)
    movieId = None
    if result is not None:
        movieId = result["id"]

        # Flatten results
        result["genre_ids"] = None

    return result, movieId

def getMovieVideo(url):
    result = request(url)
    if result is not None:
        return result["key"]
    return None

entries = []
count = 0
for title in titles:
    searchUrl = buildSearchMoviesURL(title)
    result, movieId = getMovie(searchUrl)
    if (result == None):
        print("Could not find movie {}".format(title))
        continue

    videoUrl =  buildGetMovieVideoURL(movieId)
    videoKey = getMovieVideo(videoUrl)
    result["videoKey"] = videoKey
    entry = {"title" : title.strip(), "result" : result}
    entries.append(entry)
    count += 1

with open("results.csv", "w") as outfile:
    csv_file = csv.writer(outfile)
    csv_file.writerow(["common_title"] + list(entries[0]["result"].keys()))
    for entry in entries:
        title = entry["title"]
        result = entry["result"]
        csv_file.writerow([title] +   list(result.values()))
