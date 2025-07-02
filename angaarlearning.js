// console.log("PRAGATI");
// input

// let a = prompt("hi sharad write something");
// console.log(a);

// alert(a);

// let a=1;
// let b ='hi';
// let c = true;
// console.log(a,b,c);



// let look=123;

// let n = 123;

// null,"",undefined,0=not a number,NAN-not a number
// if(look == "good"){
//     console.log("pretty");

// }
// else{
//     console.log("ugly");
// }

// strict equality story of triple equality
// if(look === n){
//     console.log("pretty");
// }

// let a = (20 > 10)?"yes":"no";
// console.log(a);

// wednesday
//  let first="sharad";
//  let last = "chauhuan";
//  let full = first +" "+ last;
//  console.log(full);

//  multiple concat krne
// 3rdd way
// let middle = "singh";
// let c = `Sharad ${middle} agrawal`;
// console.log(c);

// functions-
// 1. Default function


// prompt("please enter your name");
// let a=24;
// console.log(a); 
// // let first = "pragati";
// // let second = "Bansal";
// // let fullname = first +" "+ second;
// // console.log(fullname);

// let middle = "bansal";
// let c = `pragati ${middle} bansal`;
// console.log(c);

// let b = (20>10)?"yes":"no";
// console.log(b);

// let string1 = "sharad"
// let string2 = 'sharad'
// let string3 = `sharad`
// console.log(string1,string2,string3);


// concatination
// let ans = `my name is ${string1} ${string2} ${string3} thanku}`
// console.log(ans);

//normal functions
// function shello(){
//     console.log("hi");
// }
// shello();

// parametrised function
// function jprgti(say){
//     console.log(say);
// }
// jprgti("hiiii");

// function jovac(num,say){
//     console.log(num,say);
//     return num+say;
// }
// let res = jovac("Hi Mohit",100);

// console.log(res);


// function sayHi(say=20,num){

//     console.log(say);
//     console.log(num);

//     console.log(say+num);

// }
// sayHi();

// Power of Function
// let angaar = function (say){
//     console.log(say);
// }
// angaar("Good morning");


// thursday lecture************************************************
// let greetings =function (say){

//     console.log(say);

// }

// greetings("Good morning");


// let a = [a[2],a[1],a[3]()];

// let a = [1,2,3,4,[50,[500,600],70],8,9];
// console.log(a[4][1][0]);


// accessing index -0 ---length of array
// console.log(a[0]);
// let arr=["sharad",["lokesh",["mohit",["dk"],"rohit"],"rahul","adwait"]];
// console.log(arr[1][1][1]);

// OBJECT:-********************************
// collection of key and value
// {key:value} key should be unique
// {name:"pragati"}; dont have duplicate roll no
// non -linear - hota hae-unorder 


// every key stored as a string
// let obj = {
//     names:"pragati",
//     age:19,
//     canDrive:true,
//     address:{
//         state:"UP",
//         city:"kosi kalan"
//     },
//     marks:[86,90],
//     say:function(){
//         console.log("hi");
//     }
// }

// two ways to access object
// dot notation*******************always work for object

// console.log(obj.canDrive);
// console.log(obj.address.state);

// // console.log(obj.say()); - gives output undefine because 2 console statemeny
// say();
// console.log(obj.marks[1]);

// function inside a object - called method
// always remember-everthing inside js is object

// window - global - top pr rhti h***
// abc here is key



// var abc = 5;
// console.log(window.abc);
// console.log(abc);

// 2nd method to acces is string*****
// let val = "names"; 
// ->so that we use bracket notation ******
// console.log(obj.names);


// console.log(obj[val]);
// console.log(obj["age"]);
// console.log(obj["address"]["state"]);

// let arr=[1,2,3,4,5,6];

// push**********-return length
// arr.push(7);
// console.log(arr);
// console.log(arr.push(7,8,9,10));

// pop************return removed value
// console.log(arr.pop(4));
// console.log(arr);

// shift-remove element from 1st and return remove value
// output - 1st elemny dedeta h
// console.log(arr.shift(0));
// // unshift lengh return lrta h add krn k baad
// console.log(arr.unshift(-2,-1,0));


// loops - 2 - two for loops-(for in - object iterate-multiple iteration)

// let obj = {
//     names:"pragati",
//     age:19,
//     canDrive:true,
//     address:{
//         state:"UP",
//         city:"kosi kalan"
//     },
//     marks:[86,90],
//     say:function(){
//         console.log("hi");
//     }
// }
// *******************************
// for(let value in obj){
//     // console.log(value);
//     console.log(obj[value]);
// }
// array k liye of
// let arr=[1,2,3,4,5,6];
// for(let val of arr){
//     console.log(val);
// }

//of-array and in-object



// map,filter,reduce
// map****
// let arr=[1,2,3,4,5,6];
// let newarr =arr.map(function work(val,idx){
//     // kaam
//     let n = val*2;
//     let final= n+1;
//     return final;

//     // console.log(val,idx);
//     // return val*2;
// })


// new tarika


// let guh = function(val,idx){
//     let n = idx-2;
//     return n;
// }
// let newr = arr.map(guh);
// console.log(newr);

// let myfn = function(val,idx){
//     let n = val*2;
//     return n;
// }
// let newr = arr.map(myfn);
// console.log(newr);
// // console.log(newarr);
// console.log(arr);


// filter************************
// filter krke dega 

// let arr=[1,2,3,4,5,6];
// let newarr = arr.filter(function(val,idx){
//     // return;
    
//     return val%2 == 0;
// })
// console.log(newarr);
// console.log(arr);

// let nerw = function (val,idx){
//     return val%2 ==0;
// }
// let newarr = arr.filter(nerw);
// console.log(newarr);


// reduce***********************
// arrays ko utata aur 1 ko prev 2nd ko current

// like return 2 toh voh previuos hojayega-mtlb previous ki value 2 hojayegi

// let arr=[1,2,3,4,5,6];

// let ans = arr.reduce(function(prev,curr){
//     console.log(prev,curr);
//     // return prev+curr;
//     return 2;

// })
// console.log(ans);





// friday
// high
// higher order function and callback function
// recivs another function as a arguemet-higher order

// let greet = function(kuchtohbol){
//     kuchtohbol();
//     return arguments;
// }
// function say(){
//     console.log("hi");
// }
// greet(say);

// 2nd condition
// let func1 = function(){
//     function sayHi(){
//         console.log("hi");
//     }
//     return sayHi();//jb function sayHi k ander return ni krte toh undefine degA 
// }
// let ans = func1();
// console.log(ans);//UNDEFINE ISSE AYEGA

// GEC-GLOBAL EXECUTION CENTRE-STACK-RUN KRTE HI BROWSER VARIBALE EK PAPER M LIKHNA CHALU KREGA
// MCP-FOCUS ON VARIABLE NAME AND FUNCTION NAME-page/stack m name likhna shuru krenge
// cep-function ko value di 
// whnenever a fuc is call a new global execution with name of function -dusre wala function jo has same phase

// 1.MCP-MEMORY CREATION PHASEE.2.CODE EXECUTION PHASE
// new learning
// times
// array stored-sequential manner
// let greeting = function(){
//     console.log("hii");
// }
// let a = [123,"sharad",true,greeting,];
// console.log(a[2],a[1],a[3]());//it gives undefine why-output-true 'sharad' undefined-jb bhi hm function m return ni krte toh voh undefine hi dega

// ***************************************************************************************
// higher order function-map,reduce
// callback function
// higher-a function that takes another function as a arguemnt and also u have to execute it
// callback-function that is being pass in another function
// callback-2- you have to execute this function


/*let greet = function(kuchtohbol){
    kuchtohbol();
}*/


// ***************
// here greet is higher order function
// and say is call back*******

/*function say(){
    console.log("say hi");
} 
greet(say);*/

// two condition
// 2nd one


// function func1(){
//     function sayHi(){
//         console.log("hi"); 
//     }
//         return sayHi;//undefine
//     // return sayHi;
// }

// let ans = func1();//undefine
// ans();//undefine() //error
// console.log(ans);

// tuesday******************
// promise-object
// asychronos task perform-resolving-rejecting(incomplete)
// application-asynchronos->calling api/third parties

// how to create a promise**************

// let prom = new Promise(function(resolve,reject){
//     // task 5000=5sec

//     /* resolve(); */

//     setTimeout(function(){
//         resolve("Promise resolved");
//     },5000);
// });
// state - pending,fulfilled,rejected**********

// data
// console.log(prom);

// function myPromise(paise){
//     // bhai promise kr
//     return new Promise(function(resolve,reject){
//         // setTimeout(function(){
//         //      if(paise>100){
//         //     resolve("bhai yeh le tere paise");
//         //     }
//         //     else{
//         //         reject("bhai main ni derha");
//         //     }
//         // },3000);


//         if(paise>100){
//             resolve("bhai yeh le tere paise");
//         }
//         else{
//             reject("bhai main ni derha");
//         }
//     })
// };
// let ans = myPromise(9);
// // console.log(ans);

// // then-resolve and catch-error
// ans.then(function(data){
//     // result data
//     console.log(data);
//     // kaam
//     console.log("thanks bhai");
// })

// // catch-catch the error
// .catch(function(err){
//     // result errror
//     console.log(err);
//     console.log("sorry bhai");
// })


// *****Arraw functions

// let a = ()=>{
//     console.log("hi");
//     return 2;
// }

// let a = ()=>2;
// a();

// let a = (num)=> num*2;//this keyword different behavr krta hae
// let b = ()=>"hi";
// console.log(a(3));
// console.log(b());

// ******PROTOTYPE-its an object-fallback source-dont need to create again a prototype
// prototype include-push pop map etc


// let arr=[1,2,3,4,5];
// console.log(arr.length);
// let obj={
//     name:"pragati",
//     age:21,
// };
// console.log(obj);

// async function dosomething(){
//     // api calling and db queries
//     let a = dosomething();
// }
// a.then-incomplete

const url = "https://images.dog.ceo/breeds/terrier-fox/n02095314_3217.jpg";
let ans = fetch(url);
console.log(ans);
// ans.then((data)=>{
//     // console.log(data.);
//     // console.log("got the answer");

//     console.log(data);
//     return data.json();

// })
// .then((data2)=>{
//     console.log(data2.message);
// })   

// 2nd way

async function getdata(){
    let a = await fetch(url);//-promise get handed
    let b = await a.json();//-promise
    console.log(b);
 
}
getdata();




































