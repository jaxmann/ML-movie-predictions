var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "ebf48a90",
  application_key: "a361dcf16a15317234bc3df4cdb75f95"
});

var fs = require('fs');
var os = require('os');

fs.readFile('plot.csv', 'utf-8', function(err, data) {
	if (err) {
		console.log(err);
		plot = [];
	} else {
		plot = data.trim().split('\n');
		api(plot);
	}
});


function api(plot) {
	for (var i = 0; i < plot.length; i++) {
		textapi.sentiment({
		  'document': plot[i].toString()
		}, function(error, response) {
		  if (error === null) {
			console.log("made it");
			results = JSON.parse(response);
			var arr = [];
			arr.push(results.polarity);
			arr.push(results.subjectivity);
			arr.push(results.polarity_confidence);
			arr.push(results.subjectivity_confidence);
			arr.push(results.text);
			fs.appendFile('sentiment.csv', arr + os.EOL, 'utf8', function(d) {})
		  } else {
			  console.log(error);
		  }
		});
	}	
}
