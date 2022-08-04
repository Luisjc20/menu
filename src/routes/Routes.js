import { Divider } from '@material-ui/core';
import React from 'react';
import Encabezado from '../componentes/Encabezado.js';
//import Comp from "../componentes/Comp.js";
//import Boton from "../componentes/Boton.js";
import Encabezados from "../componentes/Encabezado.js";
import Inicio from "../pages/Inicio.js";
function app() {
  return (
    <div className="Routes">
      <Encabezados/>
      <Divider/>
    
    </div>
    
  );
}

export default app;
