import csv
import itertools

class Node:
    def __init__(src, dst):
        self.src = src
        self.dst = dst

with open("Data/fullData-1332-with-sentiment.tsv", "rb") as tsvfile:
    read_data = csv.reader(tsvfile, delimiter="\t")
    print read_data

    # Find actor column
    index = 0
    for row in read_data:
        for col in row:
            if col == "actors":
                break
            index += 1
        break

    # Get actors for each movie
    actorList = []
    for row in read_data:
        actorList.append(row[index])

    # Get the edges
    edges = []
    for movie in actorList:
        actors = movie.split('; ')
        combs = itertools.combinations(actors, 2)
        for comb in combs:
            edges.append(comb)

    # Write to file
    output_file = open("actorGraph.csv", 'w')
    output_file.write("actor1,actor2\n")
    for edge in edges:
        output_file.write(edge[0] + "," + edge[1] + "\n")
