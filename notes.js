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

    var notes = fetchNotes();

    var note = {
        title,
        body
    };
    
    console.log("Title: " + note.title + " body: " + note.body);
    var duplicateNotes = notes.filter((note) => note.title === title);
    console.log("Length of Notes = " + duplicateNotes.length);
    if (duplicateNotes.length === 0){
        console.log("No Duplicates Found");
        notes.push(note);
        saveNotes(notes);
        return note;
    };
};

var getAll = () => {
    console.log('Getting all the notes');
};

var getNote = (title) => {
    console.log('Getting note: ', title);
};

var removeNote = (title, body) => {
    console.log('Removing note: ', title);
    //fetch notes
    var notes = fetchNotes();
    //filter notes
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);

}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var fetchNotes = () => {
    console.log("inside of FetchNotes");
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch (e){
        return [];
    }
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};