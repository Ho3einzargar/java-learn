let result = [];   

const urlParams = new URLSearchParams(location.search);

console.log(urlParams);

async function U() {
    try{
        let response = await fetch(`https://api.github.com/users/${urlParams.get("user")}`);
        result = await response.json();
        document.write(result.site_admin);      
    }
    catch (err){
        console.error('error is:', err);
    }
    
}
U();

for (const [key, value] of urlParams) {
    console.log(`${key}:${value}`);
    document.write(`${key} : ${value}<br>`);
}
