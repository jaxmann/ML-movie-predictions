DESCRIPTION

This package is a web server connected to a Flask backend. The backend runs the OLS, SVM, and KNN models, and also makes a call to Aylien Sentiment Analysis - it is not a full version of our models, but only a sample. The frontend shows a background of our project, as well a tab for each module that we created. These modules are: regression models (linear regression and logistic regression, along with graphs and charts about accuracy and feature selection), SVM (with confusion matrices and description of how we use SVM), KNN (with varying Ks), an interactive custom movie form that allows a user to enter custom features and see what our model will return (on a subset of the full features), scatter plots showing the correlation between rating and time, for instance, an actor graph showing the relationship between actors, including scaling by size and color for how much value any particular actor adds, a choropleth map to disply every movie's popularity by country, as a percentage of the most popular country, and finally a time-bar chart to display movie statistics over time with a sliding selector.
INSTALLATION

npm modules needed (install with "npm install <module-name>"):
- http-server

pip modules (install with "pip install <module-name>"):
- Flask
- flask_cors
- numpy
- pandas
- scikit-learn
- scipy
- sklearn
- requests

EXECUTION

open two windows of the terminal:
in one, navigate to Frontend/ and run "http-server" (after running "npm install http-server") - you can run any http server, as well, such as "python -m SimpleHttpServer"
in the other, navigate to Backend/ and run "python app.py" (after installing any python imports with "pip install <module-name>")
the web page should be running on 127.0.0.1:8080 which is best viewed in Chrome
You can click on each tab to view the contents

