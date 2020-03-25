// "=>" is known as Fat arrow or arrow function in emca

function Circle1(r){
    var pi = 3.14;
    return pi*r*r
}

//whenever there is any variable
let Circle2=(r)=> {
    const pi= 3.14;
    return pi*r*r;
}

// whenever there is a only a single parameter we dont use the parenthesis and same with return , we dont need the return declaration
let Circle3=r=> 3.14*r*r

console.log(Circle1(3));
console.log(Circle2(3));
console.log(Circle3(3));
