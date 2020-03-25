//generators are the special functions which executes code untill it finds "yield" then pause untill it finds again next and returns undefined if it is unable to find next.
function* Fruits() {
    console.log("hey fruits are");
    yield "apples";
    yield "oramges";
    console.log("see you after oranges");
    yield "mango";
}
let abhi = Fruits();
console.log(abhi.next());
console.log(abhi.next().value);
console.log(abhi.next().value);
console.log(abhi.next().value);


function* getNextId(){
    var card=0;
    while (card<3)
    yield card++;
}
let abhis = getNextId();
console.log(abhis.next());
console.log(abhis.next().value);
console.log(abhis.next().value);
console.log(abhis.next().value);
