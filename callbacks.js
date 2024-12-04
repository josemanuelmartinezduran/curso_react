const a = (i)=>{console.log("El parámetro vale "+i.toString())}

const b = (f, a)=>{f(a)}

b(a, 3);

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

