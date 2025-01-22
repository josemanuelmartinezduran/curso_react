import React, { useState } from "react";

export default function MyApp() {
  const [lineas, setLineas] = useState([new LineaPedido("Jabon", 5, 2),
    new LineaPedido("Shampoo", 7, 3)
  ]);
  const [linea, setLinea] = useState(new LineaPedido("", 0, 0));
  async function addLinea(){
    await setTimeout(()=>{
      console.log("Dentro de add Linea")
    console.log(linea);
    const l = [...lineas];
    l.push(linea);
    setLineas(l);
    },2000);
    
  }
  
  return (
    <>
      <div className="container">
        <h1>Cotizador</h1>
        <Cotizador linea={linea} setLinea={setLinea} addLinea={addLinea}></Cotizador>
        <Sumatoria lineas={lineas}></Sumatoria>
      </div>
    </>
  );
}

function Cotizador({ linea, setLinea, addLinea }) {
  let producto = "";
  let cantidad = 0;
  let precio = 0;

  function agregaProducto(){
    const l = new LineaPedido(producto, cantidad, precio);
    console.log(l);
    setLinea(l);
    addLinea();
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="productInput" className="form-label">
          Producto
        </label>
        <input
          type="text"
          className="form-control"
          id="productInput"
          onChange={(event)=> producto = event.target.value}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cantidadInput" className="form-label">
          Cantidad
        </label>
        <input type="number" className="form-control" id="cantidadInput" onChange={(event)=>cantidad = event.target.value}/>
      </div>
      <div className="mb-3">
        <label htmlFor="precioInput" className="form-label">
          Precio
        </label>
        <input type="number" className="form-control" id="precioInput" onChange={(event)=>precio = event.target.value} />
      </div>
      <button className="btn btn-success btn-block" onClick={agregaProducto}>Agregar</button>
    </>
  );
}

function Sumatoria({ lineas }) {
  console.log(typeof(lineas));
  console.log(lineas);

  return (
    <>
      <table className="cleanTable">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <RenderLines lineas={lineas}></RenderLines>
        </tbody>
      </table>
    </>
  );
}

function RenderLines({ lineas }) {
  console.log("Render de lineas");
  console.log(lineas);
  console.log(typeof(lineas));
  const rows = lineas.map((linea, index) => (
    <tr key={index}>
      <td>{linea.producto}</td>
      <td>{linea.precio}</td>
      <td>{linea.cantidad}</td>
      <td>{linea.total}</td>
    </tr>
  ));
  
  return (
    <>
      {rows}
    </>
  );
}

class LineaPedido {
  constructor(producto, cantidad, precio) {
    this.producto = producto;
    this.cantidad = cantidad;
    this.precio = precio;
    this.total = cantidad * precio;
  }
}
