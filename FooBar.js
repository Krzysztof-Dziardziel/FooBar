/* The first thing I noticed is that you are not using automatic formatting for your code.
While this is not a mistake per say it just doesn't look neat. So let's fix that.
I am using Visual Studio Code with IntelliJ keymap. ctrl+alt+l formats all my code to look neat and tidy.
*/
var fs = require('fs'),
    string = fs.readFileSync('a.txt', 'utf8'),
    //    array_string = [],
    array = [],
    arrayOutput = [];
/*
array_string = string.split(';');
array = array_string.map(Number);
*/
array = string.split(';').map(Number);


for (var i = 0; i < array.length; i++) {
    if (array[i] % 4 == 0 && array[i] % 7 == 0) {
        arrayOutput.push('FooBar');
    } else if (array[i] % 4 == 0) {
        arrayOutput.push('Foo');
    } else if (array[i] % 7 == 0) {
        arrayOutput.push('Bar');
    } else {
        arrayOutput.push(array[i]);
    }
}

fs.writeFile('out.txt', arrayOutput.join(';'), function (err) {
    if (err) throw err;
});

console.log(arrayOutput.join(';'));