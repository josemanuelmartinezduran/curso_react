import React, { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);
  const [texto, setText] = useState("");
  const [lista, updateLista] = useState([]);

  const onClick = ()=>{
    setCount(count + 1);
  }

  const onChangeText = () => {
    const paramTexto:string = prompt("Dime el texto ")||"";
    setText(paramTexto);
  };

  return (
    <div>
      <h2>{texto}</h2>
      <p>Has hecho clic {count} veces</p>
      <button onClick={onClick}>
        Haz clic aquí
      </button>
      <button onClick={onChangeText}>
        Cambiar texto
      </button>
      <ul>
        <li>Elemento uno</li>
      </ul>
    </div>
  );
}


function Lista(texto:[]) {
  return texto.map((i:String) => {
      <p>{i}</p>
  })
}