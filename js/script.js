 var dataset = [];
 for(var i=0; i<5; i++) {
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

    
