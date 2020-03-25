class Person {
    constructor(name,age,weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    calName(){
        console.log(this.name);
    }
    calAge(){
        console.log(this.age);
    }
    calWeight(){
        console.log(this.weight);
    }
}
class Engineer extends Person{
    constructor(name,age,weight,language){
        super(name,age,weight);
        this.language=language;
    }
    displayLanguage(){
        console.log(this.language);
    }
}
let prav = new Person("praveen",45,6700);
prav.calName();
prav.calAge();
console.log("------");
let sally = new Engineer("RAGHAV",67,8900,"PYTHON");
sally.displayLanguage();