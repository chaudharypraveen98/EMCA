let a=["abhi","shek"]

//spread operator is a operator that takes an javascript expression and spread it in individual element and treat it as we want
console.log(...a);

let b=[2,3,4]
function add(d,b,c){
    console.log(d+b+c);
}
add(...b);
