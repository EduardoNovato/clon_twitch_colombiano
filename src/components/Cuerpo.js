import React from 'react'

import Perfil from "./Perfil"
import "../styles/Cuerpo.css"

function Cuerpo() {
  return (
    <div className="body">
        <div className="body__left">
          <Perfil/>
        </div>

        <div className="body__rightPlaceHolder">
            
        </div>

    </div>
  )
}

export default Cuerpo 