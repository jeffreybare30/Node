console.log('Starting App');

//adding modules
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
console.log(user);
var uname = user.username;
var years = notes.age;

var res = notes.addNote();
console.log(res);

var sum = notes.math(3,4);
console.log(sum);

console.log ('year = ' + years);

/*fs.appendFile('greetings.txt', 'Hello ' + user.username + ' Your age is ' + years, function (err) {
    if (err) {
            console.log('Unable to write to file');
    }
});
*/

/*fs.appendFile('greetings.txt', 'Hello ${user.username}! You are ${notes.age}!', function (err) {
    if (err) {
            console.log('Unable to write to file');
    }
});
*/