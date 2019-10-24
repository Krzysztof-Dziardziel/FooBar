var fs = require('fs'),
    array = [],
    entries_num = 1000,
    minnum = 1,
    maxnum = Number.MAX_SAFE_INTEGER;

for(true; array.length < entries_num;){
    array.push(Math.floor(Math.random()*maxnum)+minnum);
}
fs.writeFile('a.txt', array.join(';'), function (err) {
    if (err) throw err;
});
console.log(array);