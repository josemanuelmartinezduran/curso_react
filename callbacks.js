/* const parametros = (i)=>{console.log("El parámetro vale "+i);}
parametros(console.log); */

al_cuadrado = (n) => {
    return n*n;
}
/* const resultado = al_cuadrado(2); */
/* console.log(resultado) */

const callback = (f, a)=>{return f(a)}
callback(console.log, "Hola mundo");


/* Hacer una funcion callback que determine si un numero es par */

/*
Callback hell
Límite de callback = 1
 */
/* setTimeout(()=>{
    console.log("A")
    setTimeout(()=>{
        console.log("B")
        setTimeout(()=>{
            console.log("C")
            setTimeout(()=>{
                console.log("F")
                setTimeout(()=>{
                    console.log("G")
                    setTimeout(()=>{
                        console.log("H")
                    }, 50);
                }, 100);
                setTimeout(()=>{
                    console.log("I")
                }, 10);
            }, 300);
        }, 50);
    }, 100);
    setTimeout(()=>{
        setTimeout(()=>{
            console.log("A")
            setTimeout(()=>{
                console.log("B")
                setTimeout(()=>{
                    console.log("C")
                    setTimeout(()=>{
                        console.log("F")
                        setTimeout(()=>{
                            console.log("G")
                            setTimeout(()=>{
                                console.log("H")
                            }, 50);
                        }, 100);
                        setTimeout(()=>{
                            console.log("I")
                        }, 10);
                    }, 300);
                }, 50);
            }, 100);
            setTimeout(()=>{
                console.log("D")
            }, 10);
        }, 300);
        console.log("D")
    }, 10);
}, 300); */

