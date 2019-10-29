// var fs = require('fs'), 
// Usually const is used instead of var, to show that this is a special non reassignable
// variable. IE. It can't be given a different value. That prevents mistakes.
const fs = require('fs')
// string = fs.readFileSync('a.txt', 'utf8')
//     //    array_string = [],
// array = [],
// arrayOutput = [];

//For reading a file you have two options, the readFileSync as you can guess
//a synchronous operation. And plain old readFile which is asynchronous
//and since this is JS we <3 asyc.
//This means basically read a.txt as a utf8 file
let numbers = []
let output = []
fs.readFile('a.txt', { encoding: 'utf8', flag: 'r' },
    // Below I embedded a function. An embedded function is called a lambda or a closure
    // Notice that your other question - about err stems from not using the IDE to its full
    // extent. Your IDE will hint to you all the arguments and their types essentially telling
    // you what you can do and can not.
    (err, txt) => {
        if (err) throw err;
        output = txt.split(';')
            .map(Number)
            .map(numbr => applyRules(numbr))
        console.log(output) // Just a control thing
        writeTo('out.txt', output)
    })

/*
It is often a good idea to use intermediate variables when writing your code
But tests are better! We are going to learn about test first thing after break.
You can also console.log them though.
But if your fingers itch read up on jasmine orjest
array_string = string.split(';');
array = array_string.map(Number);
*/

//Oh I like that use of map! I really like it!
// array = string.split(';').map(Number);

// That's ok. But there is a better for loop in JS.
// Also notice how our conditions do not exclude one another
// Here I have declared our rules. Notice how the condition is a function and note the use
// of dictionaries which are actually super simple objects
let rules = [
    {
        condition: (numbr) => numbr % 4 == 0,
        result: 'Foo'
    },
    {
        condition: (numbr) => numbr % 7 == 0,
        result: 'Bar'
    },
    {
        condition: (numbr) => true,
        result: ''
    }
]
// For a first attempt this is very well done. I like the use of else ifs to provide execution
// for only one rule. However the FooBar being printed upon both conditions is no accident at all.
// Look below to find a slightly different approach. Above you will notice the rules which are much 
// like yours only declared in a way somewhat different from yours. Below see the usage.
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 4 == 0 && array[i] % 7 == 0) {
//         arrayOutput.push('FooBar');
//     } else if (array[i] % 4 == 0) {
//         arrayOutput.push('Foo');
//     } else if (array[i] % 7 == 0) {
//         arrayOutput.push('Bar');
//     } else {
//         arrayOutput.push(array[i]);
//     }
// }

// Function applies all our foo bar rules to a number passed to it
// I suggest loking up all these neat functions I used here: filter, map, reduce - they were not picked on accident ;)
function applyRules(numbr) {
    return rules.filter((rule) => rule.condition(numbr))
        .map((rule) => rule.result)
        .reduce((prev, curr) => prev + curr);
}
function writeTo(filename, numbers) {
    fs.writeFile(filename, numbers.join(';'), function (err) {
        if (err) throw err;
    });
}
