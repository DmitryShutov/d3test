var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
     
//New SVG
var w = 600;
var h = 250;
var barPadding = 1;

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var xScale = d3.scale.ordinal()
                .domain(d3.range(dataset.length))
                .rangeRoundBands([0,w], 0.05)
                
                            
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr('x', function(d,i){
        return xScale(i);
    })
    .attr('y', function(d){
        return h-d*4;
    })
    .attr('width', 20)
    .attr('height', function(d){
        return d*4;
    })
    .attr("fill", function(d){
        return "rgb(0, 0, "+ (d*10) + ")";
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
			   		return (xScale(i)+10);
			   })
			   .attr("y", function(d) {
			   		return h - (d * 4) + 14;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "white");
			   
			   
			   

    
//Old SVG
/*
dataset = [5, 10, 15, 20, 30];
var w = 500;
var h = 100;
var svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);
    
var circles=svg.selectAll("circle")
                .data(dataset)
                .enter()
                .append("circle");
                
                
circles.attr('cx', function(d, i){
    return (i*50)+25;
    
})
    .attr('cy', h/2)
    .attr('r', function(i){
        return i;
    })
    .attr("fill", "yellow")
    .attr("stroke", "orange")
    .attr("stroke-width", function(d){
        return d/2;
    });
*/
    
