import React from "react";
import data from "../data.json";
import Opciones from "../opciones/Opciones";
import Historial from "../historial/Historial";

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            historial: [],
            seleccionPrevia: "",
        };
    }

    manejadorClick = (event) => {
        console.log("preciona más despacio este botón " + event.target.id);
        const decision = event.target.id; // preciona A o B
        if (this.state.contador >= 7) {
            window.alert("¡Ya estamos de jugar! Hora de estudiar Front o.O");
        }
        else {
            if (this.state.contador === 0 && decision === "A") {
                this.setState({
                    contador: this.state.contador + 1,
                    seleccionPrevia: decision,
                })
            }
            if (this.state.contador === 0 && decision === "B") {
                this.setState({
                    contador: this.state.contador + 2,
                    seleccionPrevia: decision,
                })
            }
            if (this.state.seleccionPrevia === "A" && decision === "A") {
                this.setState({
                    contador: this.state.contador + 2,
                    seleccionPrevia: decision,
                })
            }
            if (this.state.seleccionPrevia === "A" && decision === "B") {
                this.setState({
                    contador: this.state.contador + 3,
                    seleccionPrevia: decision,
                })
            }
            if (this.state.seleccionPrevia === "B" && decision === "B") {
                this.setState({
                    contador: this.state.contador + 2,
                    seleccionPrevia: decision,
                })
            }
            if (this.state.seleccionPrevia === "B" && decision === "A") {
                this.setState({
                    contador: this.state.contador + 1,
                    seleccionPrevia: decision,
                })
            }
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contador !== this.state.contador) {
            this.setState({
                historial: [...this.state.historial, this.state.seleccionPrevia],
            });
        }
    }

    render() {

        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Opciones
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                    funcionClick={this.manejadorClick}
                />
                <Historial 
                    seleccionPrevia ={this.state.seleccionPrevia}
                    historial={this.state.historial}
                />
            </div>
        );
    }
}

export default Container;
