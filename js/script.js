var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
     
//New SVG
var w = 500;
var h = 200;
var barPadding = 1;

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
            
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr('x', function(d,i){
        return i*(w/dataset.length-barPadding);
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
    
