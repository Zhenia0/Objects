let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130
}

let sum = 0;

for(let name in salaries){
    if(name in salaries){
        sum += salaries[name];
    }
    else{
        return 0;
    }
}

console.log(sum);