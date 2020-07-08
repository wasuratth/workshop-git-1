// const fetch = require('node-fetch');
// const fs = require('fs');
// (async () => {
//     try {
//         const response = await fetch('https://mdn.github.io/fetch-examples/basic-fetch/');
//         const data = await response ;


//         console.log(response.status);
//         console.log(data);
//     } catch (err) {
//         console.log('Error' + err)
//     }
// })();

// fetch(`https://api.darksky.net/forecast/5b0669fa2b50528e6e0cd5f1c8d81d45/13.8413261,100.5784031`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     }) 
// // 13.8413261 100.5784031 

const fs = require('fs');

const myJSON = '{"name": "Kate", "pet": {"dog": "Corgi", "cat": "Persian"}}';
const myObj = JSON.parse(myJSON);

JSON.stringify(myObj);

myObj.name = 'Peter';
console.log(myObj.name);
console.log(JSON.stringify(myObj));

fs.writeFile('file2.txt', 'dasdasd asdkasdiasdpoaksd' , function(){
    
}) ;