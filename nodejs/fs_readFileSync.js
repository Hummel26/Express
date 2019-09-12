//blocking-code

// var fs = require("fs");

// console.log("------Program Start------");
// var data = fs.readFileSync("myfile3.txt");
// console.log(data.toString());
// console.log("------Program End------");

//non blocking-code

var fs = require("fs");

console.log("------Program Start------");
fs.readFile("myfile3.txt", (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("------Program End------");