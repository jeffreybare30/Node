console.log('Starting notes.js');
//console.log(module);

//module.exports.age = 33;

/*module.exports.addNote = ()=>{
    console.log('addNote');
    return 'New note';
};
*/
const fs = require('fs');

var addNote = (title, body) => {
    //console.log('Title: ', title);
    //console.log('Note: ', body);
    //console.log('Adding note', title, body);

    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    

    var notes = [];
    var note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
    console.log('Getting all the notes');
};

var getNote = (title) => {
    console.log('Getting note: ', title);
};

var removeNote = (title) => {
    console.log('Removing note: ', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};