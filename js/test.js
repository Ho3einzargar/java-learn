"use strict";

///////new

let result = [];   

async function U() {
    try{
        let response = await fetch('https://api.github.com/users');
        result = await response.json();        
        
        for(let i=0;i<= Object.keys(result).length;i++) {
            //console.log(result[i].login);
            document.write(`<a href=${result[i].url}>${result[i].login}</a><br>`);
            
            }
          
    }
    catch (err){
        console.error('error is:', err);
    }
    
}
U();