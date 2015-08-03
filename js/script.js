var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
//New SVG
var w = 1200;
var h = 750;
var barPadding = 1;
var padding = 20;

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var xScale = d3.scale.ordinal()
                .domain(d3.range(dataset.length))
                .rangeRoundBands([0,w], 0.05)
                
var yScale = d3.scale.linear()
                .domain([0, d3.max(dataset)])
                .range([h,0]);
    
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr('x', function(d,i){
        return xScale(i);
    })
    .attr('y', function(d){
        return (yScale(d));
    })
    .attr('width', xScale.rangeBand())
    .attr('height', function(d){
        return h-(yScale(d));
    })
    .attr("fill", function(d){
        return "rgb("+ (d*10) + ", 0, 0)";
    });

svg.selectAll("text")
			   .data(dataset)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return (xScale(i)+xScale.rangeBand()/2);
			   })
			   .attr("y", function(d) {
			   		return yScale(d)+w/30;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "17px")
			   .attr("fill", "white");
console.log("It works!");

window.onload = function(){			   
d3.select("p")
    .on("click", function() {
           dataset = [11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
                    5, 10, 13, 19, 21, 25, 22, 18, 15, 13 ];
        svg.selectAll("rect")
            .data(dataset)
            .attr("y", function(d)  {
                return yScale(d);
            })
            .attr('height', function(d){
                return h-yScale(d);
            })
            .attr("fill", function(d) {   // <-- Down here!
            return "rgb(0, 0, " + (d * 10) + ")";
            });
        svg.selectAll("text")
           .data(dataset)
           .text(function(d) {
                return d;
           })
           .attr("x", function(d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
           })
           .attr("y", function(d) {
                return yScale(d)+25;
           });
    });
    
};