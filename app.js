console.log('Starting App');

//adding modules
const fs = require('fs');


const _ = require('lodash');


const notes = require('./notes.js');


console.log(_.isString('Gary'));

var filteredArray = _.uniq(['Mike', 'Jeff', 'Jeff2', 1, 2, 3, 4]);
console.log('Unique elements in our Array: ' + filteredArray);



var res = notes.addNote();
console.log(res);


