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

    # box_office_mojo.get_all_movies()
    box_office_mojo.get_all_weekly()