class miClase{
    a;
    constructor(a = 3){
        this.a = a;
    }

    f = ()=>{};
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

mc = new miClase();
console.log(mc.a);
mc.a = 3;
mc.a = 5;
console.log(mc.a);
console.log(person.age);