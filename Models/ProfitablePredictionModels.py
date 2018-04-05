import numpy as np
import pandas as pd

from sklearn import svm
from sklearn.neighbors import KNeighborsClassifier

from sklearn.metrics import accuracy_score

def is_positive(row):
    if row > 0:
        return 1
    else:
        return 0

if __name__ == "__main__":

	knn_clf = KNeighborsClassifier()

	svm_clf = svm.SVC(kernel='linear', max_iter=1000000)

	training_data = pd.read_csv("../Data/outTrain.tsv", sep="\t")
	testing_data = pd.read_csv("../Data/outTest.tsv", sep="\t")

	training_profit = training_data["Domestic Total Gross"] - training_data["Production Budget"]
	testing_profit = testing_data["Domestic Total Gross"] - testing_data["Production Budget"]

	training_labels = training_profit.apply(is_positive)
	testing_labels = testing_profit.apply(is_positive)

	training_data = training_data[["year", "min_age", "runtime(min)", "metacriticRating", "YearReleased", "MonthReleased", "viewCount", "commentCount", "likeCount", "dislikeCount", "Production Budget", "polarity_confidence", "subjectivity_confidence", "actorAR", "directorAR", "languageAR", "countryAR", "genreAR", "ratingAR", "productionAR", "distributionAR" ]]
	testing_data = testing_data[["year", "min_age", "runtime(min)", "metacriticRating", "YearReleased", "MonthReleased", "viewCount", "commentCount", "likeCount", "dislikeCount", "Production Budget", "polarity_confidence", "subjectivity_confidence", "actorAR", "directorAR", "languageAR", "countryAR", "genreAR", "ratingAR", "productionAR", "distributionAR" ]]

	training_data = training_data.fillna(value=0)
	testing_data = testing_data.fillna(value=0)

	# Data with our added features

	knn_clf.fit(training_data, training_labels)
	train_predicted_labels = knn_clf.predict(training_data)
	test_predicted_labels = knn_clf.predict(testing_data)

	training_accuracy = accuracy_score(training_labels, train_predicted_labels)
	testing_accuracy = accuracy_score(testing_labels, test_predicted_labels)

	print "KNN Training accuracy: " + str(training_accuracy)
	print "KNN Testing accuracy: " + str(testing_accuracy)

	svm_clf.fit(training_data, training_labels)
	train_predicted_labels = svm_clf.predict(training_data)
	test_predicted_labels = svm_clf.predict(testing_data)

	training_accuracy = accuracy_score(training_labels, train_predicted_labels)
	testing_accuracy = accuracy_score(testing_labels, test_predicted_labels)

	print "SVM Training accuracy: " + str(training_accuracy)
	print "SVM Testing accuracy: " + str(testing_accuracy)

	# Data without our added features

	training_data_common_feaures = training_data[["min_age", "runtime(min)", "metacriticRating", "YearReleased", "MonthReleased", "Production Budget"]]
	testing_data_common_features = testing_data[["min_age", "runtime(min)", "metacriticRating", "YearReleased", "MonthReleased", "Production Budget"]]

	knn_clf.fit(training_data_common_feaures, training_labels)
	train_predicted_labels = knn_clf.predict(training_data_common_feaures)
	test_predicted_labels = knn_clf.predict(testing_data_common_features)

	training_accuracy = accuracy_score(training_labels, train_predicted_labels)
	testing_accuracy = accuracy_score(testing_labels, test_predicted_labels)

	print "KNN Training accuracy: " + str(training_accuracy)
	print "KNN Testing accuracy: " + str(testing_accuracy)

	svm_clf.fit(training_data_common_feaures, training_labels)
	train_predicted_labels = svm_clf.predict(training_data_common_feaures)
	test_predicted_labels = svm_clf.predict(testing_data_common_features)

	training_accuracy = accuracy_score(training_labels, train_predicted_labels)
	testing_accuracy = accuracy_score(testing_labels, test_predicted_labels)

	print "SVM Training accuracy: " + str(training_accuracy)
	print "SVM Testing accuracy: " + str(testing_accuracy)
