import React from "react";
function Boton ({texto,esBotonDeClic,manejarClic}){
  return (
    <button 
    className= { esBotonDeClic ? 'boton-Clic' : 'boton-Reiniciar' }
    onClick={manejarClic}>
    {texto}
  </button>);
 }
 export default Boton;
