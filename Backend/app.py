import os
from flask import Flask, render_template, request, json

# set the template directory to the Frontend folder
template_dir = os.path.abspath('../Frontend/')
# not sure if next line is necessary...
# static_dir = os.path.abspath('static/')
app = Flask(__name__, template_folder=template_dir)  #, static_folder=static_dir)


@app.route("/ourURL")
def main():
    # url_for('static', filename='popper.min.js')
    # url_for('static', filename='awesomplete.js')
    # url_for('static', filename='awesomplete.css')
    return render_template('index.html')


@app.route('/ourURL/ols', methods=['GET'])
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


@app.route('/ourURL/svm', methods=['GET'])
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
    app.run()
