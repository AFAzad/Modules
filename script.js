export{ message, user, abc ,test};
let message = "JS Module";

function user(name){
    console.log(`Hello ${name}`)
}


class abc {
    constructor(){
        console.log("it is constructor Method");
    }
}

//using Default Function

export default function(){
    console.log("Hello Default");
}


//aggregate Module

function test(){
    console.log("it is combining");
}

