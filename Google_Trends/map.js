// Set up the queue
var queue = d3.queue();

// Initial variables
var margin = {top: 100, right: 90, bottom: 30, left: 50};
	w = 1500 - margin.left - margin.right;
	h = 600 - margin.top - margin.bottom;
	legendwidth = 50;
	legendheight = 30;

	
// Colors from http://colorbrewer2.org/#type=sequential&scheme=OrRd&n=9
var colors = ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"];
var search_range = [0, 10, 20, 30, 50, 70, 90, 100];

// Set up the map
var svg = d3.select("body")
		.append("svg")
		.attr("width", w + margin.left + margin.right)
		.attr("height", h + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Title
svg.append("text")
	.attr("x", w/2)
	.attr("y", 10)
	.text("Google Trends")
	.style("font-size", "30px");
		
var search = d3.map();
var path = d3.geo.path();
var projection = d3.geo.mercator()
                   .scale(110)
                  .translate( [w / 2, h / 1.5]);

var path = d3.geo.path().projection(projection);

// Tooltip
var tooltip = d3.tip()
	.offset([-10, 0])
	.html(function(d) {
		return "<strong>Country: </strong>" + d.id;
	});
		
svg.call(tooltip);

function onChange() {
	var sect = document.getElementById("inds");
	var select_movie = sect.options[sect.selectedIndex].value;
	update(select_movie);
}

//Defer until we have read all the files
queue.defer(d3.csv, "movies.csv")
	.defer(d3.json, "world_countries.json")
	.await(main);

var countries;
var search;

// Now that we have our data, draw the choropleth
function main(error, search_data, countries_data) {
	if (error) throw error;
	
	countries = countries_data;
	search = search_data;
	update("Aliens of the Deep");
	
}

function update(movie_name) {
	// Find the row corresponding to the selected movie
	var movie = {};
	var movies = [];
	search.forEach(function(d) {
		if (d.Name == movie_name) {
			console.log(d.Name);
			movie = d;
		}
		movies.push(d.Name);
	});
	
	for (var i = 0; i<= movies.length; i++){
		var opt = document.createElement('option');
		opt.value = movies[i];
		opt.innerHTML = movies[i];
		document.getElementById('inds').appendChild(opt);
	}
	
	var values = {};
	// Put the search result in each country feature
	countries.features.forEach(function(d) {
		values[d.properties.name] = movie[d.properties.name];
	});
	console.log(values);
	
	// The x scale
	var x = d3.scale.linear()
		.domain([1, 10])
		.rangeRound([600, 860]);

	// Use heatmap colors
	var color = d3.scale.threshold()
		.domain(search_range)
		.range(colors);

	var g = svg.append("g")
		.attr("class", "key")
		.attr("transform", "translate(0,40)");
	
	// draw the map
	svg.selectAll("path").remove();
	svg.selectAll("path")
		.data(countries.features)
		.enter()
		.append("path")
		.attr("d", path)
		.style("fill", function(d) {
			console.log(d.properties.name, values[d.properties.name]);
			return color(values[d.properties.name]);
		})
		.style("stroke", "grey")
		// tooltips
        .on('mouseover',function(d){
          tooltip.show(d);

          d3.select(this)
            .style("opacity", 0.8)
            .style("stroke","white")
            .style("stroke-width",3);
        })
        .on('mouseout', function(d){
          tooltip.hide(d);

          d3.select(this)
            .style("opacity", 1)
            .style("stroke","black")
            .style("stroke-width",0.3);
        });
	
	// Make the legend rectangles
	 var legend = g.selectAll("rect")
		.data(search_range)
		.enter();
	
	legend.append("rect")
			.attr("height", legendheight)
			.attr("y", h - 70)
			.attr("x", function(d, i) { return i * legendwidth + 700; })
			.attr("width", legendwidth)
			.attr("fill", function(d) { return color(d); });


	// Add labels for the legend
	legend.append("text")
		.text(function(d) {
			return d;
		})
		.attr("x", function(d, i) {return i * legendwidth + 700; })
		.attr("y", h - 80);
}