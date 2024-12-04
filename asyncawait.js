function miPromesa() {
    return new Promise((resolve, reject) => {
      // Simulamos una operación asíncrona usando setTimeout
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

async function ejecutarPromesa() {
    const valor = await miPromesa();
    console.log(valor);
  }

ejecutarPromesa();
