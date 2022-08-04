import React from "react";

function comp(props){
    return(
        <div className="Menu">
        <img
        className="img"
        src={require("../assets/img/img1.jpg")}
        alt="Arqui"/>
        <div className="cont-text">
            <p className="name">Bienvenido a EvalComp</p>
            <p className="desc"> Este es el menú principal</p>
        </div>
        </div>
    );
}
export default comp;