var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [600,150]
                ]
              
var w = 800;
var h = 400;
var padding = 20;
              
var xScale = d3.scale.linear()
                .domain([0, d3.max(dataset, function(d) { 
                    return d[0];
                })])
                .range([padding, w-padding*2]);
                
var yScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                     .range([h-padding*2, padding]);
                     
                     
var rScale = d3.scale.linear()
                        .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                        .range([2,5]);
                
var svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h)
            
svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return xScale(d[0]);
    })
    .attr('cy', function(d){
        return yScale(d[1]);
    })
    .attr('r', function(d)  {
        return rScale(d[1]);
    })
    .attr('fill', 'blue')

svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d)  {
        return d[0] + ',' + d[1];
    })
    .attr('x', function(d)  {
        return xScale(d[0]);
    })
    .attr('y', function(d)  {
        return yScale(d[1]);
    })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '11px')
    .attr('fill', 'red')