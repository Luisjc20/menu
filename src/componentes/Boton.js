import React from "react";
import Button from "@material-ui/core/Button";
function boton(props){
    return(
       <div>
        <Button variant="contained" color="primary" href="www.google.com">
         Subir Silabo
        </Button>
        <Button variant="contained" color="primary" href="www.google.com">
         Registrar curso
        </Button>
       </div>
    );
}
export default boton;