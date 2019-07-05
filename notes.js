console.log('Starting notes.js');
//console.log(module);

module.exports.age = 33;

/*module.exports.addNote = ()=>{
    console.log('addNote');
    return 'New note';
};
*/

var addNote = (title, body) => {
    //console.log('Title: ', title);
    //console.log('Note: ', body);
    console.log('Adding note', title, body);
};

module.exports = {
    addNote: addNote
};

