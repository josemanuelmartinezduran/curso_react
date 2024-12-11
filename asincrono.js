/* const miCallback = ()=>{
    setTimeout(()=>{
        const exito = true;
        const a = exito;
        console.log(a);
        return true;
    }, 2000)
} */
/* console.log("Iniciando la ejecución ...");
setTimeout(()=>{
    console.log("Hola mundo")
}, 5000);
console.log("Fin del programa"); */

//Callback asíncrono
/* const callback = (f, timeout) => {
    console.log("Iniciando la ejecución ...");
    setTimeout(()=>{
        console.log("hola mundo");
        f();
    }, timeout);
}

callback(()=>console.log("Fin del programa"), 2000); */

// Escribir un programa en javascript que ejecute una función map sobre un arreglo dado
// de números debe multiplicarlos por tres esperar n segundos y filtrar los números pares
// mostrar dichos números uno por uno
// esperar m segundos e imprimir en la pantalla el mensaje terminado

/* const a = [1,2,3,4,5,6,7,8,9,10];

const primera_espera = (n, m)=>{
    const triple = a.map((i)=>{return i*3});
    console.log("Map Ejecutado");
    setTimeout(()=>{
        const pares = triple.filter((i)=>{return i%2===0})
        pares.forEach((i) => {console.log(`El número es ${i}`)});
        setTimeout(()=>{
            console.log("Programa terminado");
        }, m);
    }, n)
}

primera_espera(3000, 2000); */


// Ejecutar de manera recursiva una tetración utilizando potencias
// dejando n cantidad de tiempo entre operaciones
// tetracion(3, 4, 1000)

/* tetracion = (n, t, tiempo)=>{
    recur_power = (num, pow)=>{
        if(pow === 0){
            return num
        } else {
            return num * recur_power(num, pow -1);
        }
    }
    let base = n;
    for(let i = 0; i<t; i++){
        setTimeout(()=>{
            base = recur_power(base,n);
            console.log(`Potencia realizada ${base}`)
            console.log(`Ejecución del ciclio ${i}`)
        }, (tiempo - (i)));
    }
    console.log("For terminado")
}

tetracion(4,3, 2000); */

// Hacer un ciclo en javascript que imprima el cada uno de los números
// de un arreglo dado y espere entre uno y otro n segundos

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const espera = (el, t) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(el), t)

    })
}
const f = async () => {
    for(const e of arr){   
        console.log(await espera(e, 1000));
    };
}
f();

const g = async () => {
    const t = 2000;
    for(const e of arr){   
        console.log(await new Promise((resolve, reject) => {setTimeout(()=>resolve(e), t)}));
    };
}
g();