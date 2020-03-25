//Classes are used when we have a bit of codes which need to be self aware. It means that the it has a memory and has a special purpose to do whereas a standlone function are those which run only we doesn't need to do anything
//this is used to make attributes specific to that object
 class Person {
     constructor(name,age,weight){
         this.name = name;
         this.age = age;
         this.weight = weight;
     }
     calWeight(){
         console.log(this.weight);
     }
 }
 let prav = new Person("praveen",45,6700);
prav.calWeight();