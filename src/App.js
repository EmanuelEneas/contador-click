
import './App.css';
import Boton from './componentes/Botenera';
import Contador from './componentes/Contador';
import logoAdidas from './imagenes/imagen.adidas.webp';
import {useState} from 'react'

function App() {
  const [numClic,setNumClic]= useState(0);

  const manejarClic =()=> {
    
  setNumClic(numClic+1);
  }
  const reiniciarContador=()=>{
   setNumClic(0);
  }
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img
        className='logo'
        src={logoAdidas}
        alt ="fotos logo"/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClic={numClic}/>
        <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>

        <Boton 
         texto='Reiniciar'
         esBotonDeClic={false}
         manejarClic={reiniciarContador} />

      </div>
    
    </div>
  );
}

export default App;
