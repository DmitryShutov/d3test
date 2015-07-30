 var dataset = [];
 for(var i=0; i<25; i++) {
     var newNumber = Math.floor(Math.random()*30);
     dataset.push(newNumber);
 }
              d3.select("body").selectAll("div")
                .data(dataset)
                .enter()
                .append("div")
                .attr("class", "bar")
                .style("height", function(d){
                    var barHeight = d*10;
                   return barHeight+'px'; 
                });
                
var w = 500;
var h = 100;
var svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);
