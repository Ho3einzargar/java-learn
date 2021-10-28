"use strict";

///////new

let result = [];   

async function U() {
    try{
        let response = await fetch('https://api.github.com/users');
        result = await response.json();        
        
        for(let i=0;i<= Object.keys(result).length;i++) {
            document.write(`<a  href="C:/Users/Ho3einz/Desktop/java%20learn/java-learn/java-learn/java-learn/userinfo.html?user=${result[i].login}&id=${result[i].id}">${result[i].login}</a><br>`);
            }
          
    }
    catch (err){
        console.error('error is:', err);
    }
    
}
U();

////////////////////new


// let result = [];   

// async function getUser() {
//     try{
//         let response = await fetch('https://api.github.com/users');
//         result = await response.json();         
//     }
//     catch (err){
//         console.error('error is:', err);
//     }
    
// }

// async function finaluser(){
//     let user = await getUser();
//     for(let i=0;i<Object.keys(result).length;i++){

//     }


// }
