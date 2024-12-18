import React, { Component } from "react";
import Car from "./Car";
import Red from "./Red";
import Blue from "./Blue";

class Class extends Component {
  numeros = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete"];
  indice = 0;
  constructor(props) {
    super(props);
    this.state = { dato: "Uno", index: 0, texto: "", toggleRed: true };
    
  }

  componentDidMount() {
    const elemento = document.getElementById("Uno");
    console.log(`Valor del elemento ${elemento}`);
    /* setTimeout(() => {
        this.setState({dato: "Hola mundo"});
    }, 5000); */
  }

  shouldComponentUpdate(){
    /* const res = window.confirm("El componente se va a actualizar?");
    return res; */
    /* alert("El componente de va a actualizar?"); */
    return true;
  }

  /* componentDidUpdate(){
    alert("El numero ya cambió");
  } */


  changeState = () => {
    this.indice++;
    if(this.indice >= this.numeros.length)
        this.indice = 0;
    const valor = this.numeros[this.indice]
    this.setState({ dato: valor });
  };

  eventosClick = (event) =>{
    console.log(event);
    if(event.ctrlKey){
        alert("Estabas apretando control");
    }
  }

  renderExternalComponent = ()=>{
    if(this.state.toggleRed)
        return <Red></Red>
    else
        return <Blue></Blue>
  }

  onTextChanged =  (event) => {
    console.log(event);
    const target = event.target;
    console.log(`El contenido del control es ${target.value}`)
    const texto = target.value;
    this.setState({texto});
  }

  render() {
    return (
      <React.Fragment>
        <h1>Componente en Clase {this.state.texto}</h1>
        <h2 id="Uno">La variable props.color contiene {this.props.color}</h2>
        <hr />
        <h3>Variable dato dentro de state {this.state.dato}</h3>
        <button className="btn btn-primary" onClick={(event)=>{this.eventosClick(event)}}>
          Cambiar estado
        </button>
        <input type="text" onChange={(event)=>{this.onTextChanged(event)}} />
        <hr />
        {this.renderExternalComponent()}
        <button className="btn btn-danger" onClick={()=>{this.setState({toggleRed: !this.state.toggleRed})}}>Cambia componente</button>
      </React.Fragment>
    );
  }
}
export default Class;
