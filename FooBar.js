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


for (var i = 0; i < array.length; i++){
    if (array[i] % 4 == 0 && array[i] % 7 ==0){
        arrayOutput.push('FooBar');
    } else if (array[i] % 4 == 0){
        arrayOutput.push('Foo');
    } else if (array[i] % 7 == 0){
        arrayOutput.push('Bar');
    } else{
        arrayOutput.push(array[i]);
    }
}

fs.writeFile('out.txt', arrayOutput.join(';'), function (err) {
    if (err) throw err;
});

console.log(arrayOutput.join(';'));