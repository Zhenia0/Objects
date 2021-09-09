let schedule = {};

function isEmpty(obj){
    for(let prop in obj){
        return false;
    }

    return true;
}

console.log(isEmpty(schedule));
schedule["9.50"] = "sleep";
console.log(isEmpty(schedule));

