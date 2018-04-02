var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "ebf48a90",
  application_key: "a361dcf16a15317234bc3df4cbd75f95"
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
	call(plot, 576);	
}


function call(plot, i) {
	console.log(i);
	console.log(plot[i]);
	textapi.sentiment({
	  'text': plot[i].toString()
	}, function(error, response) {
	  if (error != null) {
		console.log(error);
	  } else {
		var arr = [];
		arr.push(response.polarity);
		arr.push(response.subjectivity);
		arr.push(response.polarity_confidence);
		arr.push(response.subjectivity_confidence);
		arr.push(response.text);
		fs.appendFile('sentiment.csv', arr + os.EOL, 'utf8', function(d) {})
	  }
	});
	if (i < 1560) {
		setTimeout(function() { call(plot, i + 1) }, 1005);		
	}
}