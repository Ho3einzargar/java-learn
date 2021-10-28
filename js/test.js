"use strict";

///////new


try {
alert("hey");
let url = 'Ho3einz';

let response = await fetch(url);

let commits = await response.json(); 

alert(commits[0].author.login);
}
catch (err){
    alert(err);

}

// async function userinfo() {
//     let url = `https://api.github.com/users/${user}`;
//     try {
//         let result = await fetch(url);
//         let userInfo =  await result.json();
//         document.write(`<h3> Login: ${userInfo.login}</h3> <br> 
//                          <strong> Site Admin:</strong> ${userInfo.id}<br> 
//                          <strong> Node Id: </strong> ${userInfo.node_id}`) ;
//      } catch (err) {
//     console.log(err);
//     }
//     }
 
//    userinfo();