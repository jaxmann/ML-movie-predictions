import pandas
import csv

fd = pandas.DataFrame.from_csv('../Data/fullData-1332-with-sentiment.tsv', sep='\t', header=0)

train = fd.iloc[:1000]
test = fd.iloc[1000:]


print('it might have worked')

# print(train)
# print(test)

train.to_csv('train.tsv', sep='\t', encoding='utf-8')

test.to_csv('test.tsv', sep='\t', encoding='utf-8')






# print(directorDict)
# print(directorDict['Steven Spielberg'])

# print(languageDict['English'])

