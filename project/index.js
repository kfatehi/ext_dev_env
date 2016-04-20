/*jshint esversion: 6, node: true*/
const props = require('./properties.json'),
  d3 = require('d3'),
  parseSchema = require('./util/parseSchema.js');

require('./css/styles.css');

module.exports = ( div, config ) => {

  console.log(config, props);

  parseSchema(props.schema);

  var svg = d3.select(div).append('svg')
    .attr({
      width: 400,
      height: 300
    });

  svg.append('rect')
      .attr({
        width: 300,
        height: 200
      })
      .style('fill', 'green');
};
