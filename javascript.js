//Prohibido usar var 
/* var c = "Hola var";
console.log(c); */
//90% const 10% let
/* const a = {};
a = {};
console.log(a);
let b = "Hola let";
b = "Mundo";
console.log(b); */

/* const arreglo = ["uno", "dos", 6];
console.log(arreglo);
arreglo[1] = "tres";
console.log(arreglo);
let r = 10;
console.log(r); */

//Funciones
/* function suma(a, b){
    const c = a + b;
    return c;
} */

/* const suma = (a, b) =>  a + b;
const resultado = suma(3,4);
console.log(`El resultado es ${resultado}`); */

/* Deconstrucción de objetos */
/* const objeto = {
    nombre: "Jose",
    edad: 15,
    otro_objeto:{
        uno: 1
    }
}
objeto.ejemplo = "Otra cosa";

const {uno} = objeto.otro_objeto;
console.log(uno); */

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango", [1,2,3]];

// Destructuring Assignment
const frutas = [...fruits];
/* console.log(`Fruits tiene ${fruits} y frutas tiene ${frutas}`); */
frutas[4][1] = "Modificado";
/* console.log(`Fruits tiene ${fruits} y frutas tiene ${frutas}`); */


/* frutas.forEach((elemento)=>{console.log(elemento)}); */

//frutas.forEach(f);
/* const suma = (a, b) => {a + b};
const primos = ()=> {3}

a = suma(2,3);
console.log(a); */
/* 
const a = [1, 2, 3];
const b = [...a];
b[1] = 100;
console.log(a); */


/* function cuadrado(i){
    return i * i;
}
const a = [1,2,3,4,5,6,7,8,9,10]
console.log(a.filter((i)=>i%2 == 0).map((i)=>i*i).map((i)=>i*2)); */

/* const f = ()=>{console.log("Hola mundo")};
const invoker = (manzana) => {manzana()};
invoker(f); */

const a = [1,2,3,4,5,6,7,8,9,10];
const b = a.map((i)=>{return i*i}, a);
console.log(b);