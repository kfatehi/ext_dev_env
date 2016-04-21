/*jshint esversion: 6, node: true*/

/*
  - add all the logic that is responsible for layouting and rendering your
    visualization to ./lib folder. Only use render function to append you svg
    tag and call visualization rendering function
*/

import props from './properties.json';
import d3 from 'd3';
import parseSchema from '../../util/parse-schema';

// apply your css styling to the page
require('./css/styles.css');

/*
  this module returns an objecct with two attributes set:
    - properties - object that represents your properties.json file
    - render - function that renders your visualization
*/
export const properties = props;

// first parameter is a div container that will hold your vesialization
// second parameter is a configuration object that you should use to
// build your visualization
// config = {
//    width: num,
//    height: num,
//    props: {...}, properites that were parsed according to your schema
//    data: [{...}, {...}, ...] an array of json object that were parsed
//    according to what user selected and defined by you bucket mapping
// }
export const render = ( div, config ) => {

  var svg = d3.select(div).append('svg')
    .attr({
      width: config.width,
      height: config.height
    });

  svg.append('rect')
      .attr({
        width: 300,
        height: 200
      })
      .style('fill', 'green');
};
