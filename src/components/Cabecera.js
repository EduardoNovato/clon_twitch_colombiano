import React from "react";
import { Avatar } from "@material-ui/core";

//Stilos
import "../styles/Cabecera.css";
import logo from "../assets/logo.png";


function Cabecera() {
  return (
    <div className="header">
      
      <div className="header__left">
        <img src={logo} alt="" className="header__leftLogo" />
        <h2>Siguiendo</h2>
        <h2>Explorar</h2>
        <div className="header__verticalLine">
        <h2>Musica</h2>
        <h2>Esports</h2>
        <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>


      <div className="header__center">
      <input type="text" placeholder="Busqueda" />
        <div className="header__centerLogoContainer">
        <i className="fas fa-search"></i>
        </div>
      </div>


      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>

          <div className="header__rightBits">
            <i className="fas fa-gem"></i>
            <h4>Bits</h4>
          
          </div>
        
        </div>
        
        <Avatar />
      
      </div>
    
    </div>
  );
}

export default Cabecera;
