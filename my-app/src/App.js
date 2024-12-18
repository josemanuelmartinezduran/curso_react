import './App.css';
import Class from './components/Class';
import Function from './components/Function';

function App() {
  let color = "Red";

  setTimeout(()=>{
    color = "Blue"
  }, 5000)

  return (
    <>
     <div className='container'>
      <Function color={color} ></Function>
      <Class color={color} ></Class>
      </div>
    </>

  );
}

export default App;