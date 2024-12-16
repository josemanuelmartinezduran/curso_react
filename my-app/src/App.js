import './App.css';

function App() {
  const myElement = (
    <ol>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ol>
  );
  
  const myList = ()=>{
    const l = ["Uno", "Dos", "Tres"];
    return (
      <h1>Valor de las variables {l[0]} {l[1]} {l[2]}</h1>
    );
  }
  
  const a = ()=>{
    return "Desde la función";
  }
  //Devuelve jsx

  //Log en la consola
  console.log("En donde puedo ver esto?");

  //Variables de react (se pueden ver en el código)
  const x = 10;
  let texto = "";

  //Session storage el usuario lo puede modificar desde la consola
  window.sessionStorage.setItem("id_usuario", 20);
  if(x<10)
    texto = "Menor de 10";
  else
    texto = "Mayor o igual a 10";

  return (
    <div className="App">
      <h1 id="hola"> Hola mundo {texto}</h1>
      <h2>Bienvenidos {a()}</h2>
      {myElement}
      {myList()}
    </div>
  );
}

export default App;
