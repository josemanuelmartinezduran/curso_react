/* const miCallback = ()=>{
    setTimeout(()=>{
        const exito = true;
        const a = exito;
        console.log(a);
        return true;
    }, 2000)
} */


// Creamos una promesa
/* const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; 
      if (exito) {
        resolve("¡La operación fue exitosa!");
      } else {
        reject("Hubo un error en la operación.");
      }
    }, 2000);
  });

console.log(`Antes de 3 segundos ${miPromesa}`);
console.log(miPromesa);

setTimeout(()=>{
  console.log(`Despues de 3 segundos ${miPromesa}`);
  console.log(miPromesa)
}, 3000);

miPromesa.then((resultado) => {
  console.log("El resultado de la promesa es:")
  console.log(resultado);
});

console.log("Ultima linea"); */

/*Promise hell*/
// Usamos la promesa
/* miPromesa
  .then((mensaje) => {
    console.log(mensaje);// Esto se ejecuta si la promesa se resuelve exitosamente
    miPromesa.then((mensaje) => {
      console.log("Segunda instrucción");
    })
  })
  .catch((error) => {
    console.error(error); // Esto se ejecuta si la promesa es rechazada
  }); */


/* new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve("¡La operación fue exitosa!");
    } else {
      reject("Hubo un error en la operación.");
    }
  }, 2000);
}).then((res) =>{
  console.log(`El resultado es ${res}`);
}).catch((err)=>{
  console.log(`El error es ${err}`);
}).finally(()=>{
  console.log("programa finalizado");
}); */


// Escriba un programa que contenga un ciclo de 0 a n que 
// imprima una leyenda y se detenga en cada iteración
// utilizando promesas

recur_power = (num, pow)=>{
  if(pow === 0){
      return num
  } else {
      return num * recur_power(num, pow -1);
  }
}

const ar = [0, 1, 2, 3, 4]
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(0);
    console.log(0);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
        console.log(1);
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(2);
            console.log(2);
          }, 2000);
        })
      }, 2000);
    })
  }, 2000);
})