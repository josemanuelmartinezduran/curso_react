const miCallback = ()=>{
    setTimeout(()=>{
        const exito = true;
        const a = exito;
        console.log(a);
        return true;
    }, 2000)
}


// Creamos una promesa
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; 
      if (exito) {
        resolve("¡La operación fue exitosa!");
      } else {
        reject("Hubo un error en la operación.");
      }
    }, 2000);
  });
  
  /*Promise hell*/
  // Usamos la promesa
  miPromesa
    .then((mensaje) => {
      console.log(mensaje);// Esto se ejecuta si la promesa se resuelve exitosamente
      miPromesa.then((mensaje) => {
        console.log("Segunda instrucción");
      })
    })
    .catch((error) => {
      console.error(error); // Esto se ejecuta si la promesa es rechazada
    });