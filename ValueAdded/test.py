import pandas
import csv

fd = pandas.DataFrame.from_csv('train.tsv', sep='\t', header=0)
fdTest = pandas.DataFrame.from_csv('test.tsv', sep='\t', header=0)


actorDict = {}
directorDict = {}
languageDict = {}
countryDict = {}
genreDict = {}
ratingDict = {}
productionDict = {}
distributionDict = {}

#using only training set
for movieName, row in fd.iterrows():
    budg = 0
    gross = 0
    if row['Production Budget'] > 0:
        budg = row['Production Budget']
    if row['Domestic Total Gross'] > 0:
        gross = row['Domestic Total Gross']
    revenue = gross - budg

    actorArr = row['actors'].split(";");
    for actor in actorArr:
        actor = actor.strip()

        if actor not in actorDict:
            actorDict[actor] = []
            actorDict[actor].append(revenue)
        else:
            actorDict[actor].append(revenue)

    directorArr = row['director'].split(";");
    for director in directorArr:
        director = director.strip()

        if director not in directorDict:
            directorDict[director] = []
            directorDict[director].append(revenue)
        else:
            directorDict[director].append(revenue)

    languageArr = row['languages'].split(";");
    for language in languageArr:
        language = language.strip()

        if language not in languageDict:
            languageDict[language] = []
            languageDict[language].append(revenue)
        else:
            languageDict[language].append(revenue)

    countryArr = row['country'].split(";");
    for country in countryArr:
        country = country.strip()

        if country not in countryDict:
            countryDict[country] = []
            countryDict[country].append(revenue)
        else:
            countryDict[country].append(revenue)

    genreArr = row['genres'].split(";");
    for genre in genreArr:
        genre = genre.strip()

        if genre not in genreDict:
            genreDict[genre] = []
            genreDict[genre].append(revenue)
        else:
            genreDict[genre].append(revenue)

    rating = row['rated']
    rating = rating.strip()
    if rating not in ratingDict:
        ratingDict[rating] = []
        ratingDict[rating].append(revenue)
    else:
        ratingDict[rating].append(revenue)

    production = row['production']
    production = str(production).strip()
    if production not in productionDict:
        productionDict[production] = []
        productionDict[production].append(revenue)
    else:
        productionDict[production].append(revenue)

    distribution = row['Distributor']
    distribution = distribution.strip()
    if distribution not in distributionDict:
        distributionDict[distribution] = []
        distributionDict[distribution].append(revenue)
    else:
        distributionDict[distribution].append(revenue)


#average value added for each category
for act in actorDict:
    actorDict[act] = sum(actorDict[act])/float(len(actorDict[act]))

for dir in directorDict:
    directorDict[dir] = sum(directorDict[dir])/float(len(directorDict[dir]))

for lang in languageDict:
    languageDict[lang] = sum(languageDict[lang])/float(len(languageDict[lang]))

for cou in countryDict:
    countryDict[cou] = sum(countryDict[cou])/float(len(countryDict[cou]))

for gen in genreDict:
    genreDict[gen] = sum(genreDict[gen])/float(len(genreDict[gen]))

for rat in ratingDict:
    ratingDict[rat] = sum(ratingDict[rat])/float(len(ratingDict[rat]))

for prod in productionDict:
    productionDict[prod] = sum(productionDict[prod])/float(len(productionDict[prod]))

for dist in distributionDict:
    distributionDict[dist] = sum(distributionDict[dist])/float(len(distributionDict[dist]))


# AR = average revenue (i.e. sum of average revenue for all actors/directors/languages/etc in the movie based on other
# movies those actors/directors/languages/etc are in

#writing into TRAIN set
fd['actorAR'] = 0
fd['directorAR'] = 0
fd['languageAR'] = 0
fd['countryAR'] = 0
fd['genreAR'] = 0
fd['ratingAR'] = 0
fd['productionAR'] = 0
fd['distributionAR'] = 0

for movieName, row in fd.iterrows():

    actorArr = row['actors'].split(";");
    for actor in actorArr:
        actor = actor.strip()

        if actor not in actorDict:
            pass
        else:
            fd.at[movieName,'actorAR'] += actorDict[actor]

    directorArr = row['director'].split(";");
    for director in directorArr:
        director = director.strip()

        if director not in directorDict:
            pass
        else:
            fd.at[movieName,'directorAR'] += directorDict[director]

    languageArr = row['languages'].split(";");
    for language in languageArr:
        language = language.strip()

        if language not in languageDict:
            pass
        else:
            fd.at[movieName,'languageAR'] += languageDict[language]

    countryArr = row['country'].split(";");
    for country in countryArr:
        country = country.strip()

        if country not in countryDict:
            pass
        else:
            fd.at[movieName,'countryAR'] += countryDict[country]

    genreArr = row['genres'].split(";");
    for genre in genreArr:
        genre = genre.strip()

        if genre not in genreDict:
            pass
        else:
            fd.at[movieName,'genreAR'] += genreDict[genre]

    rating = row['rated']
    rating = rating.strip()
    if rating not in ratingDict:
        pass
    else:
        fd.at[movieName,'ratingAR'] += ratingDict[rating]

    production = row['production']
    production = str(production).strip()
    if production not in productionDict:
        pass
    else:
        fd.at[movieName,'productionAR'] = productionDict[production]

    distribution = row['Distributor']
    distribution = distribution.strip()
    if distribution not in distributionDict:
        pass
    else:
        fd.at[movieName,'distributionAR'] = distributionDict[distribution]

# writing into TRAIN set
fdTest['actorAR'] = 0
fdTest['directorAR'] = 0
fdTest['languageAR'] = 0
fdTest['countryAR'] = 0
fdTest['genreAR'] = 0
fdTest['ratingAR'] = 0
fdTest['productionAR'] = 0
fdTest['distributionAR'] = 0

for movieName, row in fdTest.iterrows():

    actorArr = row['actors'].split(";");
    for actor in actorArr:
        actor = actor.strip()

        if actor not in actorDict:
            pass
        else:
            fdTest.at[movieName, 'actorAR'] += actorDict[actor]

    directorArr = row['director'].split(";");
    for director in directorArr:
        director = director.strip()

        if director not in directorDict:
            pass
        else:
            fdTest.at[movieName, 'directorAR'] += directorDict[director]

    languageArr = row['languages'].split(";");
    for language in languageArr:
        language = language.strip()

        if language not in languageDict:
            pass
        else:
            fdTest.at[movieName, 'languageAR'] += languageDict[language]

    countryArr = row['country'].split(";");
    for country in countryArr:
        country = country.strip()

        if country not in countryDict:
            pass
        else:
            fdTest.at[movieName, 'countryAR'] += countryDict[country]

    genreArr = row['genres'].split(";");
    for genre in genreArr:
        genre = genre.strip()

        if genre not in genreDict:
            pass
        else:
            fdTest.at[movieName, 'genreAR'] += genreDict[genre]

    rating = row['rated']
    rating = rating.strip()
    if rating not in ratingDict:
        pass
    else:
        fdTest.at[movieName, 'ratingAR'] += ratingDict[rating]

    production = row['production']
    production = str(production).strip()
    if production not in productionDict:
        pass
    else:
        fdTest.at[movieName, 'productionAR'] = productionDict[production]

    distribution = row['Distributor']
    distribution = distribution.strip()
    if distribution not in distributionDict:
        pass
    else:
        fdTest.at[movieName, 'distributionAR'] = distributionDict[distribution]

# print(fd.at['This Means War','genreAR'])

print('it might have worked')
fd.to_csv('outTrain.tsv', sep='\t', encoding='utf-8')
fdTest.to_csv('outTest.tsv', sep='\t', encoding='utf-8')






# print(directorDict)
# print(directorDict['Steven Spielberg'])

# print(languageDict['English'])

