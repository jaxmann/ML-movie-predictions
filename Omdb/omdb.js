const imdb = require('imdb-api');
var fs = require('fs');
var os = require("os");
// var lineReader = require('line-reader');
var LineReader = require('linereader');


var apikey = '3c95f10a'

function getLastLine(callback) {

	fs.readFile('data.csv', 'utf-8', function(err, data) {
		if (err) {
			callback([]); //empty array
		} else {
			callback(data.trim().split('\n')); //array of movies done so far	
		}

	
	});

}

function getMovieArray(callback) {

	var titles = [];
	
	getLastLine(function(moviesDone) {
		
		var lr = new LineReader('../Data/Title_Total.txt', {encoding: 'utf8'});

		lr.on('line', function (lineno, line) {
			titles.push(line.trim());
		});

		lr.on('end', function () {
			callback(titles, moviesDone)
		});

	});
}

function getIMDBData(numToDo) {

	getMovieArray(function(movArr, moviesDone) {

		movArr.forEach(function(mov, i) {
			if (i >= moviesDone.length && i < (numToDo + moviesDone.length)) {
				imdb.get(movArr[i], {apiKey: apikey, timeout: 300000}).then(function(d) { 
					console.log(d.title)
					if (d.response === 'True') {
			     		var arr = [];
			     		for (var attr in d) {
			     			if (Array.isArray(d[attr])) {
			     				//do nothing -skip the ratings since its repeated in the "metascore" field anyway		
			     			} else {
			     				if (d[attr]) {
			     					if (attr !== 'title') {
			     						d[attr] = d[attr].toString().replace(/[,]/g, ";").trim(); //replace commas with semicolons
			     					} else {
			     						d[attr] = '"' + d[attr].toString().replace(/["]/g, "") + '"';
			     					}
				     			}
				     		}
				     	}

				     	if (d.plot) {
			     			d.plot = d.plot.replace(/[;,'\."]+/g,""); //remove commas, apostrophes, and periods from plot field
			     		}
			     		
			     		var imdbRating = 'N/A'; //out of 10
			     		var rottenTomatoesRating = 'N/A' //out of 100
			     		var metacriticRating = 'N/A' //out of 100

			     		if (Array.isArray(d.ratings)) {
			     			d.ratings.forEach(function(src) {
			     				if (src.Source === 'Internet Movie Database') {
			     					imdbRating = src.Value;
			     				} else if (src.Source === 'Rotten Tomatoes') {
			     					rottenTomatoesRating = src.Value;
			     				} else if (src.Source === 'Metacritic') {
			     					metacriticRating = src.Value;
			     				}
			     			})
			     			
			     		}

			     		if (d.awards) {
			     			d.awards = d.awards.replace(/\./g,"") //replace trailing period
			     		}
			     		if (d.boxoffice) {
			     			d.boxoffice = d.boxoffice.replace(/[;,'\.]/g,""); //remove commas, apostrophes, and periods from plot field
			     		}

			     		arr.push(d.title, d.year, d.rated, d.released, d.runtime, d.genres, d.director, d.actors, d.plot, d.languages, d.country, d.awards, imdbRating, 
			     			rottenTomatoesRating, metacriticRating, d.metascore, d.rating, d.type, d.boxoffice, d.production);
			     		// console.log(arr)

			     		fs.appendFile('data.csv', arr + os.EOL, 'utf8', function(d) {});
			     		// fs.appendFile('data.csv', '\n', 'utf8', function(d) {});


			     	} else {
				    	// fs.appendFile('data.csv', '\n', 'utf8', function(d) {});
				    }
				}).catch(console.log);

			}
		});
		
	});

}	


getIMDBData(950);




