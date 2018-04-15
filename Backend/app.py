import os
from flask import Flask, render_template, request, json, jsonify
from flask_cors import CORS
from sklearn.externals import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

min_age_map = {"18385330": 1,
               "-5851569": 17,
               "9899276": 13,
               "8133748": 17,
               "12706625": 7}


@app.route('/ols', methods=['GET'])
def getLinRegPrediction():
    rating = request.args.get('rating')
    runtime = request.args.get('runtime')
    genre = request.args.get('genre')
    critic = request.args.get('critic')
    year = request.args.get('year')
    month = request.args.get('month')
    budget = request.args.get('budget')
    youtube = request.args.get('youtube')
    plot = request.args.get('plot')

    # regression_training_features = training_data[
    #     ["Production Budget", "ratingAR", "runtime(min)", "genreAR", "metacriticRating", "year", "MonthReleased",
    #      "likeCount"]]

    query_array = pd.DataFrame([[budget, rating, runtime, genre, critic, year, month, youtube]])
    query_array = query_array.as_matrix().astype(np.float)
    response_arr = lin_reg.predict(query_array)
    response = response_arr[0][0]

    return json.dumps({'prediction': response})


@app.route('/svm', methods=['GET'])
def getSVMPrediction():
    rating = request.args.get('rating')
    runtime = request.args.get('runtime')
    genre = request.args.get('genre')
    critic = request.args.get('critic')
    year = request.args.get('year')
    month = request.args.get('month')
    budget = request.args.get('budget')
    youtube = request.args.get('youtube')
    plot = request.args.get('plot')

    # training_data = training_data[
    #     ["year", "min_age", "runtime(min)", "metacriticRating", "YearReleased", "MonthReleased", "viewCount",
    #      "commentCount", "likeCount", "dislikeCount", "Production Budget", "polarity_confidence",
    #      "subjectivity_confidence", "actorAR", "directorAR", "languageAR", "countryAR", "genreAR", "ratingAR",
    #      "productionAR", "distributionAR"]]

    query_array = np.array([[year, min_age_map[str(rating)], runtime, critic, year, month,
                            feature_avgs["viewCount"], feature_avgs["commentCount"], youtube,
                            feature_avgs["dislikeCount"], budget, feature_avgs["polarity_confidence"],
                            feature_avgs["subjectivity_confidence"], feature_avgs["actorAR"],
                            feature_avgs["directorAR"], feature_avgs["languageAR"], feature_avgs["countryAR"],
                            genre, rating, feature_avgs["productionAR"], feature_avgs["distributionAR"]]])

    prediction = lin_svm_clf.predict(query_array)
    if prediction == 0:
        response = "No"
    else:
        response = "Yes"

    return json.dumps({'prediction': response})


@app.route('/knn/5', methods=['GET'])
def getKnn5Prediction():
    rating = request.args.get('rating')
    runtime = request.args.get('runtime')
    genre = request.args.get('genre')
    critic = request.args.get('critic')
    year = request.args.get('year')
    month = request.args.get('month')
    budget = request.args.get('budget')
    youtube = request.args.get('youtube')
    plot = request.args.get('plot')

    # training_data = training_data[
    #     ["year", "min_age", "runtime(min)", "metacriticRating", "YearReleased", "MonthReleased", "viewCount",
    #      "commentCount", "likeCount", "dislikeCount", "Production Budget", "polarity_confidence",
    #      "subjectivity_confidence", "actorAR", "directorAR", "languageAR", "countryAR", "genreAR", "ratingAR",
    #      "productionAR", "distributionAR"]]

    query_array = np.array([[year, min_age_map[str(rating)], runtime, critic, year, month,
                            feature_avgs["viewCount"], feature_avgs["commentCount"], youtube,
                            feature_avgs["dislikeCount"], budget, feature_avgs["polarity_confidence"],
                            feature_avgs["subjectivity_confidence"], feature_avgs["actorAR"],
                            feature_avgs["directorAR"], feature_avgs["languageAR"], feature_avgs["countryAR"],
                            genre, rating, feature_avgs["productionAR"], feature_avgs["distributionAR"]]])

    prediction = knn_5_clf.predict(query_array)
    if prediction == 0:
        response = "No"
    else:
        response = "Yes"

    return json.dumps({'prediction': response})


@app.route('/knn/10', methods=['GET'])
def getKnn10Prediction():
    rating = request.args.get('rating')
    runtime = request.args.get('runtime')
    genre = request.args.get('genre')
    critic = request.args.get('critic')
    year = request.args.get('year')
    month = request.args.get('month')
    budget = request.args.get('budget')
    youtube = request.args.get('youtube')
    plot = request.args.get('plot')

    query_array = np.array([[year, min_age_map[str(rating)], runtime, critic, year, month,
                            feature_avgs["viewCount"], feature_avgs["commentCount"], youtube,
                            feature_avgs["dislikeCount"], budget, feature_avgs["polarity_confidence"],
                            feature_avgs["subjectivity_confidence"], feature_avgs["actorAR"],
                            feature_avgs["directorAR"], feature_avgs["languageAR"], feature_avgs["countryAR"],
                            genre, rating, feature_avgs["productionAR"], feature_avgs["distributionAR"]]])

    prediction = knn_10_clf.predict(query_array)
    if prediction == 0:
        response = "No"
    else:
        response = "Yes"

    return json.dumps({'prediction': response})


@app.route('/knn/20', methods=['GET'])
def getKnn20Prediction():
    rating = request.args.get('rating')
    runtime = request.args.get('runtime')
    genre = request.args.get('genre')
    critic = request.args.get('critic')
    year = request.args.get('year')
    month = request.args.get('month')
    budget = request.args.get('budget')
    youtube = request.args.get('youtube')
    plot = request.args.get('plot')

    query_array = np.array([[year, min_age_map[str(rating)], runtime, critic, year, month,
                            feature_avgs["viewCount"], feature_avgs["commentCount"], youtube,
                            feature_avgs["dislikeCount"], budget, feature_avgs["polarity_confidence"],
                            feature_avgs["subjectivity_confidence"], feature_avgs["actorAR"],
                            feature_avgs["directorAR"], feature_avgs["languageAR"], feature_avgs["countryAR"],
                            genre, rating, feature_avgs["productionAR"], feature_avgs["distributionAR"]]])

    prediction = knn_20_clf.predict(query_array)
    if prediction == 0:
        response = "No"
    else:
        response = "Yes"

    return json.dumps({'prediction': response})


@app.route('/knn/50', methods=['GET'])
def getKnn50Prediction():
    rating = request.args.get('rating')
    runtime = request.args.get('runtime')
    genre = request.args.get('genre')
    critic = request.args.get('critic')
    year = request.args.get('year')
    month = request.args.get('month')
    budget = request.args.get('budget')
    youtube = request.args.get('youtube')
    plot = request.args.get('plot')

    query_array = np.array([[year, min_age_map[str(rating)], runtime, critic, year, month,
                            feature_avgs["viewCount"], feature_avgs["commentCount"], youtube,
                            feature_avgs["dislikeCount"], budget, feature_avgs["polarity_confidence"],
                            feature_avgs["subjectivity_confidence"], feature_avgs["actorAR"],
                            feature_avgs["directorAR"], feature_avgs["languageAR"], feature_avgs["countryAR"],
                            genre, rating, feature_avgs["productionAR"], feature_avgs["distributionAR"]]])

    prediction = knn_50_clf.predict(query_array)
    if prediction == 0:
        response = "No"
    else:
        response = "Yes"

    return json.dumps({'prediction': response})


@app.route('/hello', methods=['GET'])
def hello():
    return 'Hello'

if __name__ == "__main__":
    # Load the classifiers & regressor
    knn_5_clf = joblib.load("../Models/5 KNN.pkl")
    knn_10_clf = joblib.load("../Models/10 KNN.pkl")
    knn_20_clf = joblib.load("../Models/20 KNN.pkl")
    knn_50_clf = joblib.load("../Models/50 KNN.pkl")
    lin_svm_clf = joblib.load("../Models/Linear SVM.pkl")
    lin_reg = joblib.load("../Models/LinearRegression.pkl")
    feature_avgs = joblib.load("../Models/features_avgs.pkl")
    # print feature_avgs
    app.run()
