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
//console.log('Process', process.argv);
console.log('Yargs', argv);
var command = argv._[0];


if (command === 'add'){
    //console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log("Note Created");
        console.log("--");
        console.log("Title: " + note.title);
        console.log("Body: " + note.body);
    } else {
        console.log("Note title already used");
    }
} else if (command === 'list'){
    //console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read'){
    //console.log('Fetching Notes');
    //notes.getNote(argv.title);
    var noteRead = notes.getNote(argv.title);
    var message = noteRead ? 'Note was read' : 'Note not found';
    console.log(message);
    /*if (note){
        console.log("Note Found");
        console.log("--");
        console.log("Title: " + note.title);
        console.log("Body: " + note.body);
    } else {
        console.log("Note not found with title: " + argv.title);
    }
    */
} else if (command === 'remove'){
    //console.log('Deleting Notes');
    //notes.removeNote(argv.title, argv.body);
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}