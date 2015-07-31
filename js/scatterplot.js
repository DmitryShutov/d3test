var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];
              
var w = 600;
var h = 300;

var svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
            
svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return d[0];
    })
    .attr('cy', function(d){
        return d[1];
    })
    .attr('r', function(d)  {
        return Math.sqrt(h-d[1]);
    })
    .attr('fill', 'blue');

svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d)  {
        return d[0] + ',' + d[1];
    })
    .attr('x', function(d)  {
        return d[0]+17;
    })
    .attr('y', function(d)  {
        return d[1]+7;
    })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '11px')
    .attr('fill', 'red');
    