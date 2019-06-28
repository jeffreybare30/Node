console.log('Starting notes.js');
//console.log(module);

module.exports.age = 33;

module.exports.addNote = ()=>{
    console.log('addNote');
    return 'New note';
};

module.exports.math = (a, b) => {
    var sum = a + b;
    return sum;
}