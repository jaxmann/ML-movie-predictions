var svg = d3.select("body").append("svg")
  .attr("class", "network");

fileLoad(drawGraph);

function fileLoad(callback) {
  d3.csv("actorGraph.csv", function (d) {
    console.log("loaded");
    return {
      actor1: d.actor1,
      actor2: d.actor2
    };
  }, function (error, rows) {
    callback(rows);
  });
}




var drag = d3.behavior.drag()
        .on("drag", function(d,i) {
            d.x += d3.event.dx
            d.y += d3.event.dy
            d3.select(this).attr("transform", function(d,i){
                return "translate(" + [ d.x,d.y ] + ")"
            })
        });

function tick() {
  links.attr("x1", function(d) {
        console.log("yo");
        console.log(d.source);
        return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  nodes.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

var maxDegree;

function drawGraph(actorEdges) {
  //var results = getActors(actorEdges);
  //var actors = results[0], actorMap = results[1];
  var results = getEdges(actorEdges);
  var actors = results[0], edges = results[1], degMap = results[2];
  console.log(results[0]);
  console.log(actors.size);
  console.log("here");

  console.log(actors);
  console.log(edges);
  var forceSim = d3.layout.force()
                          .nodes(actors)
                          .links(edges)
                          .size([50,50])
                          .charge(-20)
                          .on("tick", tick)
                          .start();
  console.log("here");

  links = svg.append("g")
    .attr("class", "edges")
    .selectAll("line")
    .data(edges)
    .enter().append("line")
      .attr("stroke-width", "1px");
  console.log("here");

  var size = d3.scale.linear()
              .domain([1, maxDegree])
              .range([1,20]);
  console.log("here");

  nodes = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(actors)
      .enter().append("circle")
        .attr("r", function (d) {
          //console.log(d.weight);
          return 5;
        })
        .attr("fill", "black");
  console.log("here");
}

function getActors(actorEdges) {
  //need set
  console.log("ActorSet");
  var actorSet = new Set();
  actorEdges.forEach(function(edge) {
    actorSet.add({"name":edge.actor1});
    actorSet.add({"name":edge.actor2});
  });
  console.log(actorSet);
  var actors = new Set();
  var actorMap = new Map();
  var i = 0;
  actorSet.forEach(function(actor) {
    actors.add({"id": i, "name":actor.name, "group":1});
    actorMap.set(actor.name, i++);
  });
  return [Array.from(actors), actorMap];
}

function getEdges(actorEdges) {
  var actorSet = new Set();
  var dummySet = new Set();
  var actorMap = new Map();
  var newEdges = new Set();
  console.log(newEdges);
  //edges.add({"source":0, "target":0});
  var degMap = new Map();
  var i = 0;
  var num = 0;
  console.log("Adding edges");
  actorEdges.forEach(function(edge) {
    var actor1, actor2;
    if (actorMap.has(edge.actor1)) {
      actor1 = actorMap.get(edge.actor1);
    } else {
      actor1 = i++;
      actorSet.add({"value": actor1, "name":edge.actor1})
      actorMap.set(edge.actor1, actor1);
    };
    if (actorMap.has(edge.actor2)) {
      actor2 = actorMap.get(edge.actor2);
    } else {
      actor2 = i++;
      actorSet.add({"value": actor2, "name":edge.actor2})
      actorMap.set(edge.actor2, actor2);
    }
    var temp = {"source":actor1, "target":actor2};

    if (num < 3) {
      console.log(actor1 + " " + actor2);
      console.log("BLOWING MY MIND: { source: " + actor1 + ", target: " + actor2 + " }");
      console.log(temp);
      console.log({"source":actor1, "target":actor2});
      console.log("^^^^^^^^^^^^^^^ LOOK AT THIS ^^^^^^^ HOW IS IT UNDEFINED!!!!!!!");
    }


    newEdges.add(temp);

    if (num++ < 3) {
      console.log(newEdges);
      console.log(temp);
    }

    // Calculate degree for 1st
    var temp = 0;
    if (degMap.has(actor1)) {
      temp = degMap.get(actor1);
    }
    if (temp > maxDegree) {
      maxDegree = temp+1;
    }
    degMap.set(actor1, temp+1);


    // Calculate degree for 2nd
    temp = 0;
    if (degMap.has(actor2)) {
      temp = degMap.get(actor2);
    }
    if (temp > maxDegree) {
      maxDegree = temp+1;
    }
    degMap.set(actor2, temp+1);
  });
  console.log("THIS PLACE");
  console.log(actorSet);
  console.log(degMap);
  console.log(newEdges);

  var edgeArray = Array.from(newEdges);
  var temp = edgeArray.shift();
  console.log("next");
  console.log(edgeArray);
  edgeArray.push(temp);
  console.log("then");
  console.log(edgeArray);
  return [actorSet, edgeArray, degMap];
}

function startdrag(d) {

}

function drag(d) {
  d.x = d.event.x;
  d.y = d.event.y;
}

function enddrag(d) {
}
