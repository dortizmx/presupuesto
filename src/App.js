import React, { Fragment, useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  //state 
  const [presupuesto, setpresupuesto] = useState(0);
  const [restante, setrestante] = useState(0);
  const [mostrarpregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false);


  

  useEffect(()=> {

    //agrega nuevo presupuesto
    if(crearGasto){
      setGastos([...gastos, gasto]);

      const presupuestoRestante = restante - gasto.cantidad;
      setrestante(presupuestoRestante);
      setCrearGasto(false);

    }

    
    
  }, [gasto, crearGasto, gastos, restante])

  return (
    <Fragment>
      <div className="container">
          <header>
            <h1>Gasto Semanal</h1>
            <div className="contenido-principal contenido">
              { mostrarpregunta ?
                    (
                      <Pregunta
                        setpresupuesto={setpresupuesto}
                        setrestante = {setrestante}
                        setMostrarPregunta = {setMostrarPregunta}
                      />
                    )
              :
                    (
                      <div className="row">
                        <div className="one-half column">
                          <Formulario 
                            setGasto = {setGasto}
                            setCrearGasto = {setCrearGasto}
                          />
                        </div>
                        <div className="one-half column">
                          <Listado 
                            gastos={gastos}
                          />
                          <ControlPresupuesto 
                            presupuesto = {presupuesto}
                            restante = {restante}
                          />
                        </div>
                      </div>
                    ) 
              }
              
              
            </div>
            
          </header>

      </div>
    </Fragment>
    
  );
}

export default App;
