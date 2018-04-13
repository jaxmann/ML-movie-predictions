import os
from flask import Flask, render_template, request, json
from sklearn.externals import joblib

app = Flask(__name__)


@app.route('/ols', methods=['GET'])
def getLinRegPrediction():
    rating = request.form['rating']
    runtime = request.form['runtime']
    genre = request.form['genre']
    critic = request.form['critic']
    year = request.form['year']
    month = request.form['month']
    budget = request.form['budget']
    youtube = request.form['youtube']
    plot = request.form['plot']
    return json.dumps({'status': 'OK',
                       'rating': rating,
                       'runtime': runtime,
                       'genre': genre,
                       'critic': critic,
                       'year': year,
                       'month': month,
                       'budget': budget,
                       'youtube': youtube,
                       'plot': plot})


@app.route('/svm', methods=['GET'])
def getSVMPrediction():
    rating = request.form['rating']
    runtime = request.form['runtime']
    genre = request.form['genre']
    critic = request.form['critic']
    year = request.form['year']
    month = request.form['month']
    budget = request.form['budget']
    youtube = request.form['youtube']
    plot = request.form['plot']
    return json.dumps({'status': 'OK',
                       'rating': rating,
                       'runtime': runtime,
                       'genre': genre,
                       'critic': critic,
                       'year': year,
                       'month': month,
                       'budget': budget,
                       'youtube': youtube,
                       'plot': plot})

if __name__ == "__main__":
    # Load the classifiers & regressor
    knn_5_clf = joblib.load("../Models/5 KNN.pkl")
    knn_10_clf = joblib.load("../Models/10 KNN.pkl")
    knn_20_clf = joblib.load("../Models/20 KNN.pkl")
    knn_50_clf = joblib.load("../Models/50 KNN.pkl")
    lin_svm_clf = joblib.load("../Models/Linear SVM.pkl")
    lin_reg = joblib.load("../Models/LinearRegression.pkl")
    app.run()
