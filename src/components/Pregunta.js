import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({setpresupuesto, setrestante, setMostrarPregunta}) => {

    const [cantidad, setcantidad] = useState(0);

    const [error, seterror] = useState(false);
    const definirPresupuesto = (e) =>{
        //console.log( parseInt(e.target.value) );
        setcantidad( parseInt(e.target.value, 10) );
    }

    //submit
    const agregarPresupuesto = (e) =>{
        e.preventDefault();
        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            seterror(true);
            return;
        }
        seterror(false);
        //
        setpresupuesto(cantidad);
        setrestante(cantidad);
        setMostrarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>
            { error ? <Error mensaje="Presupuesto Incorrecto"/>: null}
            <form
                onSubmit={ agregarPresupuesto }
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="coloca tu presupuesto"
                    onChange={ definirPresupuesto }
                />
                <input type="submit" 
                    className = "button-primary u-full-width"
                    value="definirpresupuesto"
                />
            </form>
        </Fragment>
     );
}
 
Pregunta.propTypes = {
    setpresupuesto : PropTypes.func.isRequired, 
    setrestante : PropTypes.func.isRequired, 
    setMostrarPregunta :PropTypes.func.isRequired
}
export default Pregunta;