/*console.log('Hello World !! ')
let a = 1;
let b = 2;
let c = a + b;
console.log('a + b = ', c);

var message = "message #5";
console.log(message);

let message2 = "Hello";
message2 = "World !!";
console.log(message2);

var var1 = 'name', var2 = 176, var3 = 'hello world';

const message3 = "Hello World";
// message3 = "TEST" ;  
let message4 = "Hello World";
message4 = "TEST";

let human ; 
const name = "WASURAT THAMPANYA";
human = name;
console.log(human);

let myMoney = 200 ; 
let myFatherName = 'father and mother' ;  
let myAddress  = 'chiang mai' ; 
let ageOfUniverse = 100 ; 
console.log('myMoney = ' , myMoney );
console.log('myFatherName = ' , myFatherName );
console.log('myAddress = ' , myAddress );
console.log('ageOfUniverse = ' , ageOfUniverse );

let v = `${ageOfUniverse} `;
console.log(v);

let str1 = "Code Camp" ; 
console.log(`Hello ${1} `);
console.log(`Hello ${"World"} `);
console.log(`Hello ${str1}`);
*/


// let studentName = 'Wasurat'  ; 
// let studentAge = '15'  ; 
// let studentAddress = 'Change Mai'  ; 
// const studentProfile = `Student Profile \nName : ${studentName} \nAge : ${studentAge} \nAddress : ${studentAddress}`  ; 
// console.log(studentProfile) ; 

/*
let v = "9"/"10" ; 
console.log(v);
*/


// let num1 = Number(undefined);
// let num2 = Number(null);
// let num3 = Number(true);
// let num4 = Number(false);
// let num5 = Number("");
// let num6 = Number("   154    ");
// let num7 = Number("   1 5 4   ");
// let num8 = Number("240z");
// let num9 = Number("240.24");

// console.log("undefined is  " , num1 , "typeof" , typeof num1 );
// console.log("null is  " , num2 , "typeof"  , typeof num2 );
// console.log("true is  " , num3 , "typeof"  , typeof num3 );
// console.log("false is  " , num4 , "typeof"  , typeof num4 );
// console.log("\"\" is  " , num5 , "typeof"  , typeof num5 );
// console.log("\"   154    \" is  " , num6 , "typeof"  , typeof num6 );
// console.log("\"   1 5 4   \" is  "  , num7 , "typeof" , typeof num7 );
// console.log("240z is  " , num8 , "typeof"  , typeof num8 );
// console.log("240.24 is  " , num9 , "typeof"  , typeof num9 );

// let str1 = "coede" + "camp" ; 
// console.log(str1)

// let str = prompt('ชื่อของฉัน : ') ;
// if(str == 'yes' ){
//     alert('well well');
// } 

// let score = Number(prompt('Score : ')) ;
// if(score >=  80 ){
//     console.log("A"); 
// }else if(score >=  70 ){
//     console.log("B"); 
// }else if(score >=  60 ){
//     console.log("C"); 
// }else if(score >=  50 ){
//     console.log("D"); 
// }else{
//     console.log("F"); 
// } 

// let age = prompt("How old are you?");
// let price = age < 18 ? 2000 : 3500 ; 
// console.log(price);

// let currentUser = null;
// let defaultUser = 'John';

/* 
ถ้ามี currentUser จะใช้ currentUser
ถ้าไม่มี currentUser จะใช้ defaultUser แทน
ถ้าไม่มี currentUser จะใช้เป็น String ที่มีค่า 'Unknown'
*/
// let userName = currentUser || defaultUser || 'Unknown'
// console.log(userName)



// let user = prompt('คุณคือใคร : ') ;
// if(user === 'admin' ){
//     let password = prompt('รหัสผ่านคืออะไร : ') ;
//     if(password === 'codecamp#5' ){
//         console.log('ยินดีต้อนรับ');
//     }else if(password === ''){

//     }else{
//         console.log('รหัสผ่านผิด')

//     }

// }else if(user === ''){

// }else{
//     console.log("ฉันไม่รู้จักคุน");
// }


// let x;

// false || (x = 1);

// alert(x); // undefined, เพราะว่า OR จบก่อนที่จะรันคำสั่ง x = 1
// let x = 0;

// (x > 0) && alert( 'Greater than zero!' );

// let str = Number(prompt('age : '));

// if(str >= 18 && str <= 60 ){
//     console.log("yes") ; 
// }else{
//     console.log("NO") ;
// }


// let sum = 0 ; 
// while(true){
//     let value = +prompt("ใส่เลข" , '' );
//     console.log(!value)  

//     if(!value) break ; 
//     sum += value ;  

// }

// alert('Sum : ' + sum );
/*let i = 0 ; 
while(i < 10 ){
    console.log(`${i}`)
    i ++ ;
}

*/

/*
let num1 = 0 

num1 = +prompt('กรุณาใส่ตัวเลขตั้งต้น' , '' ) ; 

if(num1 >= 1 && num1 <= 100 ){
    let num2 = 0 ; 
    while( num1 !== num2 ){
        num2 = +prompt('ตัวเลขทาย' , '' ) ; 
        if(num1 === num2 ){
            alert('ถูกต้อง');
         } else if(num2 > num1 ){
            alert('มากไป');
        } else if(num2 < num1 ){
            alert('นอยไป');
        }
    
    }
}else{
    alert('1-100 ');
}
*/



// let browser  ; 
// if(browser == 'Edage' ){
//     alert('You got the Edage');
// }else if(browser === 'Chrome' || browser === 'Firefox' ||  browser === 'Safari' ||  browser === 'Opera'  ){
//     alert('Okay we Soup');
// }

// let a = +prompt('a?' , '');

// switch( a ){
//     case 0 :  
//         alert(0) ; 
//         break ; 
//     case 1 :  
//         alert(1) ; 
//         break ; 
//     case 2 :  
//     case 3 :
//         alert('2,3');  
//         break ; 
//     default : 
//     break ; 

// }


// let printStar = function(n = 0 ){


//     let star = '' ; 
//     for(i = 0 ; i < n ; i ++ ) star += '*' ;
//     console.log(star);
//     return ;

// }

// function ask(question , yes , no ){
//     if(confirm(question) ) yes() 
//     else no(); 
// }

// function showOk(){
//     alert("Your Agreed.");
// }

// function showCancel(){
//     alert("You Canceked the execution .");

// }

// ask("Do your agree ?" , showOk , showCancel );


// let ask = (question , yes , no ) => confirm(question) ? yes() : no() ;
// ask("Do you agree ?" , () => alert("You Agreed.") , () => alert("You cancel the execution"));

// let human = {
//     name : '',
//     age : 0 ,
//     address : '',
//     single: true , 


// }
// let obj = {} ; 
// while(true){
//     let key = prompt('KEY : ');
//     if (key === 'stop')  break  
//     let val = prompt('VALUE : ');

//     obj[key] = val ; 
// }
// console.log(obj)


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   for (let key in user) {
//     // ตั้งชื่อ key เป็นตัวแทนของค่า key ทั้งหมดใน object
//     alert( key );  // key = name, age, isAdmin
//     alert( user[key] ); // value = John, 30, true
//   }






// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into u(user, permissions1, permissions2);
// user = { ...user , ...permissions1 , ...permissions2} 
// console.log(user) ; 


// let multiplyNumeric = (obj, items ) => {
//     for(let key in obj)
//         if( typeof obj[key] === 'number')
//             obj[key] = obj[key] * items ; 


// }

// let obj = {
//     width: 200,
//     height: 300,
//     index : 3 ,
//     title: "My menu"
//   };

// multiplyNumeric(obj , 3 ); 
// console.log(obj) ;

// let user = {
//     name: "John",
//     age: 30
//   };

//   user.sayHi = function() {
//     alert("Hello!");
//   };

//   user.sayHi();
// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// let user = {
//     name: "John",
//     ref: function (){
//         return this ; 
//     }
//   };

// console.log( user.ref().name );

// let calculator = {
//     x : 0 ,
//     y : 0 , 
//     read : function(){
//         this.x = Number(prompt('x : ' , 0 )) ;
//         this.y = Number(prompt('y : ' , 0 )) ; 
//     } , 

//     sum : function(){
//         return this.x +this.y ; 
//     },
//     mul : function(){
//         return this.x * this.y ; 
//     }
// };


// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul()) ; 

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this ; 
//     },
//     down() {
//         this.step--;
//         return this ; 
//     },
//     showStep: function () { // shows the current step
//         alert(this.step);
//     }
// };


// ladder.up().up().down().showStep(); // 1
// let str = "Hello";

// alert( str.toUpperCase() );
// function random(min ,max ){
//     return min + (Math.random() * (max - min)) ; 
// }

// for(i = 0 ; i < 100 ; i ++ ){
//     console.log( random(1, 5)) ;
// }


function ucFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
}

function checkSpam(str) {
  let chk = ['xxx', 'viagra'];
  for (let n = 0; n < chk.length; n++) {
    if (str.indexOf(chk[n]) !== -1) {
      return true;
    }
  }
  return false;
}

let extractCurrencyValue = (str, rate) => {
  return Number(str.slice(1, str.length)) * rate;
}

let extractCurrencyValue2 = (str, rate) => {
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      index = i;
      break;
    }
  }


  return Number(str.slice(index, str.length)) * rate;
}

//console.log(extractCurrencyValue2('THB120', 30 ) === 3600 );

//console.log(checkSpam('dasdasd viagra sdadas dasd asdasdads'))

// console.log(ucFirst('dasdadcasddasd world'))





let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


// let fruits = ['apples' , 'pear' , 'orange'] ; 

// let shoppingCart = fruits ; 

// shoppingCart.push("Banana");

// console.log(shoppingCart.join(','));
// console.log(fruits.join(','));


// let styles = ['Jazz' , 'Blues'] ; 
// styles.push('Rock-n-Roll') ;
// styles[1] = 'Classics' ; 
// styles.shift();
// styles.unshift('Rap' , 'Reggae') ;

// console.log(styles.join(','))

let sumInput = () => {
  let inputs = [];
  let sum = 0;

  while (true) {
    let num = +prompt('Input : ');
    if (Number.isNaN(num)) break;
    inputs.push(num);
  }

  for (let i of inputs) {
    sum += i;
  }
  return sum;
}


// alert(sumInput());

// const reducer = () => {} 
// let getMaxSubSum = (arr) => {

//      console.log(arr.reduce ()) ; 

// }

// getMaxSubSum([-1, 2, 3, -9]) // == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) // == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) // == 11
// getMaxSubSum([-2, -1, 1, 2]) // == 3
// getMaxSubSum([100, -9, 2, -3, 5]) // == 100
// getMaxSubSum([1, 2, 3]) // == 6 (take all)

// let studentsList = ["Bilbo", "Gandalf", "Nazgul"]
// let strLength = studentsList.map(item => item.length);
// alert(strLength);

let array1;
let array2;

array1 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
// array2 ["apple London", "banana Bangkok", "watermelon Singapore"]

/*
array2 = array1.map( item => item.name + ' ' + item.surname ) ; 
console.log(array2);

array1 = [1,3,4,5,6,7,8] ; 
array2 = array1.map( item => item % 2 == 1 ? "odd" : "even" );
console.log(array2);

array1 = [1, -3, 2, 8, -4, 5]
array2 = array1.map( item => 0 < item ? item  : item * -1 );
console.log(array2);


array1 = [100, 200.25, 300.84, 400.3]
array2 = array1.map( item => item.toFixed(2) );
console.log(array2);
*/

// function unique(arr ){
//     return new Set(arr);
//  }



const students = [{ id: 1, name: 'bean', age: 14 }, { id: 2, name: 'ken', age: 15 }]
const studentsClone = [...students];
console.log(studentsClone);

const fruits = ['apple', 'banana', 'orange']
const fruitsClone = [...fruits];
console.log(fruitsClone);

function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
let currentUser = true;
if (currentUser) {
  test = () => {
    console.log('Nope.');
  }
}
// FIXME: Fix This
// TODO :  DO this 

[1, 2, 3, 4, 5].reduce((total, n) => { // Arrow functions ที่ซับซ้อนมากขึ้นควรใส่ {} และ ()
  console.log(total);
  return total + (n * 2);
}, 0);

if ([]){
  return false ;
}

return false ;