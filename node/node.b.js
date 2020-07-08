// let a = 20 ; 
// let b = 30 ; 
// let c = a + b ; 
// console.log(c);
// console.log("Hello Node js !!") ; 


// const fs = require('fs') ;

// for(let i = 0 ; i < 20 ; i ++ ){
//     fs.readFile('codecamp.txt' , 'utf-8' , ( err , data) => {
//         console.log(data)
//     }) ; 
//     fs.readFile('codecamp2.txt' , 'utf-8' , ( err , data) => {
//         console.log(data)
//     }) ; 
// }


// console.log("Reading file ...");



// function addSync(a, b) {
//     return a + b;
// }
// let sum = addSync(1, 2);
// console.log(sum) ; 

// function add(a, b, callbackFunction) {
//     for(let i = 0 ; i < 500 ; i ++){
//         console.log(i)
//     }
//     callbackFunction(null, a + b);
// }
// let sum2;
// add(1, 2, (err, returnValue) => {
//     for(let i = 1000 ; i < 500 ; i ++){
//         console.log(i)
//     }
//     sum2 = returnValue;
// });

// console.log(sum2);




// fs.readFile('file1.txt', 'utf-8', (err, data) => {
//     console.log(data);
//     fs.readFile(`${data}`, 'utf-8', (err, data) => {
//         console.log(data);
//         fs.readFile(`${data}`, 'utf-8', (err, data) => {
//             console.log(data);
//             fs.readFile(`${data}`, 'utf-8', (err, data) => {
//                 console.log(data)
//             })
//         })
//     })
// })

// setTimeout(() => {
//     console.log('a')
//     setTimeout(() => {
//         console.log('b')
//         setTimeout(() => {
//             console.log('c')
//             setTimeout(() => {
//                 console.log('d')
//                 setTimeout(() => {
//                     console.log('e')
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


//var fs = require('fs'); 

// function readMessage() {
//   return new Promise(function (fulfill, reject) {
//     fs.readFile('file1.txt', 'utf8', function (err, res) {
//       if (err) reject(err);
//       else fulfill(res);
//     });
//   });
// }
// function writeMessage(dat) {
//   return new Promise(function (fulfill, reject) {
//     fs.writeFile('file2.txt', dat, function (err, res) {
//       if (err) reject(err);
//       else fulfill(res);
//     });
//   });
// }
// readMessage().then(writeMessage).then(function () {
//   console.log('success');
// });


// async function doEvent() {
//   const a = await doA();
//   const b = await doB(a);
//   const c = await doC(b);
// }
// doEvent();

// async function printChar(str = '', millisec) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (str == 'C') reject('MY TRUE')
//       console.log(str)
//       resolve()
//     }, millisec);
//   }).then(() => {
//     console.log('HAHA');
//   }).catch((error)=>{
//     console.log(error);
//   }) ;
// }

// function printCharNoPromise(str = '', millisec) {
//   setTimeout(() => {
//     console.log(str)
//   }, millisec)
// }

// async function printCharMain() {

//   try {
//     await printChar('A', 1000);
//     await printChar('B', 1000);
//     await printChar('C', 1000);
//     await printChar('D', 1000);
//   } catch (exception) {
//     console.log(exception);
//   }



// }

// function printCharNomal() {
//   printCharNoPromise("A", 1000);
//   printCharNoPromise("B", 1000);
//   printCharNoPromise("C", 1000);
//   printCharNoPromise("D", 1000);
// }

//printCharMain();



//printCharNomal();


// const myConst = 1;
// try {
//   myConst = 2;
// } catch (exception) {
//   console.error(exception.message);
// }