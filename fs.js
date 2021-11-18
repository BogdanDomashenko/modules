const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'notes',), err => {
    if (err) throw err;
    console.log('created');
});
fs.appendFile(path.join(__dirname, 'notes', 'note.txt'), 'Hello world!', err => {
    if (err) throw err;
    console.log('Saved!');
});