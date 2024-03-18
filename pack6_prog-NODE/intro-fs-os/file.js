// const fs = require("fs");
//Crete text file in node:-
//syncronus
// fs.writeFileSync("./test.txt", 'Hay there');

//Asyncronus:-
// fs.writeFile("./test.txt", "Hay there Asyncrunus", (err) => {console.log(err)});


//Read text file in node:-

// const ss = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(ss);

// fs.readFile('./contact.txt', 'utf-8', (err, result) => {
//     if(err){
//         console.log('Error:-', err)
//     }else(
//          console.log(result)
//     )
// });


//File me or text add karene ke liye:-
// fs.appendFileSync('./test.txt', `Jai Shree Ram\n`);

// Opreating Ststem start = OS
const os = require('os');
console.log(os.cpus());