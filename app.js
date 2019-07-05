console.log('Starting App');

//adding modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

console.log(process.argv);
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);


if (command === 'add'){
    //console.log('Adding new note');
    notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
    console.log('Listing all notes');
} else if (command === 'read'){
    console.log('Fetching Notes');
} else if (command === 'remove'){
    console.log('Deleting Notes');
} else {
    console.log('Command not recognized');
}