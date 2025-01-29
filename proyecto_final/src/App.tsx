import { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Icon from '@mui/material/Icon';
import Contador from './hooks/UseState';

function App() {
  let username="";
  const [count, setCount] = useState(0);

  const handleTextChange: Function = (event: Event) => {
    console.log(event);
    const t: any = event.target;
    alert(t.value);
  };

  const updateUsername:Function = (event: Event) =>{
    const target:any  = event.target;
    username = target.value||"";
  };

  return (
    <>
      <Contador></Contador>
      {/* <RenderForm></RenderForm>
      <div className="container">
        <div className="form-group">
        <TextField
          id="outlined-basic"
          label="Nombre de usuario"
          variant="outlined"
          required
          placeholder="Nombre del usuario"
          onChange={updateUsername}
        />
        </div>
        <div className="form-group">
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          required
          placeholder="nombreDelUsuario"
          onChange={handleTextChange}
        />
        </div>
        <div className="row" >
        <Button variant="contained" color="primary" onClick={()=>{console.log(username)}}>
          <Icon>login</Icon>Iniciar Sesion
        </Button>
        </div>
      </div> */}
    </>
  );
}

function RenderForm(){
  if(window.sessionStorage.getItem("idusuario") == "1")
    return <>
      <h1>Bienvenido Jefe</h1>
    </>;
  else 
  return <></>
}

export default App;


