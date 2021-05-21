import React, {Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('');   
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //
    const agregarGasto = (e)=>{
        e.preventDefault();
        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' ){
            setError(true);
            return;
        }

        setError(false);
        const gasto = {
            nombre,
            cantidad,
            id : shortid.generate()
        }
        
        //Construir gasto

        //pasar el gasto al componente principal
        //resetear el form
        setGasto(gasto);
        setCrearGasto(true);
        setNombre('');
        setCantidad(0);
    }
    return ( 
        <Fragment>
            <form
                onSubmit={agregarGasto}
            >
                <h2>Agrega tus Gastos</h2>
                { error ? <Error mensaje="Gasto no valido" />: null }
                <div className="Campo">
                    <label>Descripción del Gasto</label>
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value = {nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="Campo">
                    <label>Cantidad</label>
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value = {cantidad}
                        onChange = {e=> setCantidad( parseInt(e.target.value,10))}
                    />
                </div>
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value = "Agregar Gasto"
                />
            </form>
        </Fragment>

        
            
     );
}
 
Formulario.propTypes ={
    setGasto : PropTypes.func.isRequired, 
    setCrearGasto : PropTypes.func.isRequired
}
export default Formulario;