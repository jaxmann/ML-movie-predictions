import csv
import itertools

class Node:
    def __init__(src, dst):
        self.src = src
        self.dst = dst

with open("../Data/fullData-1332-with-sentiment.tsv", "rb") as tsvfile:
    read_data = csv.reader(tsvfile, delimiter="\t")
    print read_data

    # Find actor column
    actorIndex = 0
    theRow = 0
    for row in read_data:
        for col in row:
            if col == "actors":
                theRow = row
                break
            actorIndex += 1
        break

    # Find revenue
    revenueIndex = 0
    print "hi"
    print theRow
    for col in theRow:
        if col == "Domestic Total Gross":
            break
        revenueIndex += 1



    # Get actors for each movie
    actorList = []
    actorMap = {}
    for row in read_data:
        print row
        if len(actorMap) == 0:
            print row
        actors = row[actorIndex]
        actorList.append(actors)
        print row[revenueIndex]
        revenue = float(row[revenueIndex])
        for actor in actors.split('; '):
            if actor in actorMap:
                revenue += actorMap[actor]["Revenue"]
            actorMap[actor] = {'Id': actor, 'Label': actor, "Revenue": revenue}
    print actorMap

    # Get the edges
    edges = []
    for movie in actorList:
        actors = movie.split('; ')
        combs = itertools.combinations(actors, 2)
        for comb in combs:
            edges.append(comb)

    # Write to file
    output_file = open("actorGraph.csv", 'w')
    output_file.write("Source,Target,Type\n")
    for edge in edges:
        output_file.write(edge[0] + "," + edge[1] + "," + "Undirected" + "\n")
    output_file.close()


    output_file2 = open("actors.csv", 'w')
    output_file2.write("Id,Label,Revenue\n")
    for value in actorMap.values():
        output_file2.write(value["Id"] + "," + value["Label"] + "," + str(value["Revenue"]) + "\n")
    output_file2.close()
