import React from 'react'

function Historial(props) {
    console.log(props)
    return (
        <div className="recordatorio">
            <h3>Selección anterior: {props.seleccionPrevia}</h3>
            <h4>Historial de opciones elegidas:</h4>
            <ul>
                {props.historial.map((opcion, index) => (
                    <li key={opcion + index}>{opcion}</li>))}
            </ul>
        </div>
    )
}

export default Historial
