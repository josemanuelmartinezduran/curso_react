const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // Puedes cambiar esto a false para ver cómo se maneja el rechazo
      if (exito) {
        resolve("¡La operación fue exitosa!");
      } else {
        reject("Hubo un error en la operación.");
      }
    }, 2000); // Simula una operación que toma 2 segundos
  });
}
const resultado = async()=>{
  const res = await miPromesa();
  console.log(`Dentro de la funcion si se espera ${res}`)
}
resultado();

async function ejecutarPromesa() {
  const valor = await miPromesa();
  console.log(valor);
  console.log("Promesa ejecutada con async await")
}
miPromesa().then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log("Promesa ejecutada con promise");
});
ejecutarPromesa();
/* 
async function ejemplo(){
  
}

$(document).ready(async () => {
  
}); */