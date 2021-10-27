"use strict";
// let x;
// alert(typeof x);
// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'OK' );
//   } else {
//     alert( 'Nope' );
//   }
// function createItem() {
//     sessionStorage.setItem("test1", "Lorem ipsum");
//     sessionStorage.removeItem("test1");

//   }
  
//   function readValue() {
//     var x = sessionStorage.getItem("test1");

//     // document.getElementById("demo").innerHTML = x;
// alert("jj");
// alert(x);
//   }
//   sessionStorage.setItem("test1" , "lorem");
//   var x = sessionStorage.getItem("test1");
//   document.getElementById("demo").innerHTML = x;
//   alert(x);
// let x=10  ;
// let e=8;

// if(x!=12 , e!=5){
//   alert("salam");
// }
// salam.style.background='red';
// alert(salam.innerHTML);
// let elements=document.querySelectorAll('ul>li:last-child');
// document.querySelectorAll(':hover')
// elem.innerHTML;
// for (let elem of elements){
//     alert(elem.innerHTML);
// }
// let kk,jj;
// kk=document.getElementById("aa").innerHTML="hey";
// setTimeout(() => document.getElementById("ss").innerHTML="ss",1000);
// document.body.innerHTML="heeeeee";
// elem1.innerHTML="alooo";
// elem2.textContent="alooo22";

// setInterval(() => aa.hidden=!aa.hidden, 1000);
// let arr=["apple","banana","potato"];    
// alert(arr.indexOf("potato"));

///////new
alert("hey");
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

let response = await fetch(url);

let commits = await response.json(); 

alert(commits[0].author.login);
