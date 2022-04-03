import React from 'react'

function Opciones(props) {
  return (
    <div className="opciones">                    
    <div className="opcion">
        <button id="A" onClick={props.funcionClick} className="botones">A</button>
        <h2>{props.opcionA}</h2>
    </div>
    <div className="opcion">
        <button id="B" onClick={props.funcionClick} className="botones">B</button>
        <h2>{props.opcionB}</h2>
    </div>                        
    </div>
  );
}
export default Opciones;