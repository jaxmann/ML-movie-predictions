import pandas as pd
import numpy as np

data = pd.read_csv('movies.csv')
new = data.ix[:, 2::2]

countries = data.ix[1, 1::2]

data.to_csv('countries.csv', sep = ",")

countries.to_csv('newmovies.csv', sep = ",")