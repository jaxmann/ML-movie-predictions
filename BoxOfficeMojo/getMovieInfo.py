import boxofficemojoAPI as bom
import pickle
import os
import csv
import json

if __name__ == "__main__":

    if os.path.isfile('bom_obj'):
        print "Opening box_office_mojo from file"
        with open('bom_obj') as f:
            box_office_mojo = pickle.load(f)
    else:
        print "Getting box_office_mojo from internet"
        box_office_mojo = bom.BoxOfficeMojo()
        box_office_mojo.crawl_for_urls()
        with open('bom_obj', 'w') as f:
            pickle.dump(box_office_mojo, f)

    with open('../CSE-6242-Project/Data/Title_Total.txt') as f:
        all_movies = f.readlines()

    """
    Reverse index to lookup 2201 of the movies:
    """
    # strip away any potential white space at the end of the lines
    all_movies = [x.strip() for x in all_movies]

    # reverse the movie titles with the keys for reverse lookup, able to get 2201 movies
    reverse_dict = {y:x for x,y in box_office_mojo.movie_urls.iteritems()}
    # print reverse_dict.keys()

    count = 0
    error_movies = []

    # open a file for writing
    # movie_data = open('box_office_mojo_summary_data.csv', 'w')

    # create the csv writer object
    # csvwriter = csv.writer(movie_data)

    for movie in all_movies:
        try:
            url = reverse_dict[movie]
            # print url
        except KeyError:
            continue

            # summary = box_office_mojo.get_movie_summary(url)
            # summary.clean_data()
            # summary_json = json.loads(summary.to_json())
            # print summary_json

            # if count == -1:
            #     header = summary_json.keys()
            #     csvwriter.writerow(header)
            #     count += 1

            # csvwriter.writerow(summary_json.values())

        try:
            weekly = box_office_mojo.get_weekly_summary(movie)
            # # weekly.clean_data()
            print weekly.to_json()
            count += 1

        except AttributeError:
            error_movies.append(movie)
            continue


    # movie_data.close()
    print "Total movies not found correctly (weekly): " + str(len(error_movies))
    print "Total movies found correctly (weekly): " + str(count)

    # print error_movies
    #
    # error_movies = [x.strip().lower() .replace(" ", "")
    #                                   .replace("'", "")
    #                                   .replace(":", "")
    #                                   .replace("-", "")
    #                                   .replace("/", "")
    #                                   .replace("+", "")
    #                                   .replace(",", "")
    #                                   .replace(".", "") for x in all_movies]
    # print error_movies
