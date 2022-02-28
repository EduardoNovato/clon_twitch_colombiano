import React from "react";
import nmsk from "../assets/bill.jpg";
import "../styles/Perfil.css";
import Recientes from "./Recientes";

function Perfil() {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img src={nmsk}></img>
        <div className="profile__topLeftDetails">
          <h1>Juansin</h1>
          <h3>820k followers</h3>
        </div>
      </div>
      <div className="profile__topRight">
        <i className="fas fa-heart graybg"></i>
        <i className="fas fa-bell graybg"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="profile__menu">
        <h3 className="active">Inicio</h3>
        <h3>Info</h3>
        <h3>Horario</h3>
        <h3>Videos</h3>
        <h3>
          <i className="fas fa-arrow-up"></i>
        </h3>
        <h3>Chat</h3>
        <div className="profile__recent">
          {/* <h3>Recientes</h3>
          <div className="profile__recentItems">
            <Recientes
              url={"https://www.youtube.com/watch?v=19oyIxirj7o"}
              title={"Carrangiza"}
            />

            <Recientes
              url={"https://www.youtube.com/watch?v=eOexk-Q2Ca8"}
              title={"Otro set de guaracha"}
            />

            <Recientes
              url={"https://www.youtube.com/watch?v=0pFi6cQlIKs"}
              title={"No se que poner"}
            />

            <Recientes
              url={"https://www.youtube.com/watch?v=0pFi6cQlIKs"}
              title={"Yo?"}
            />
          </div> */}
          {/* <div className="profile__categories">
            <h2>Hptas programadores de la India ni para copiar codigo sirven</h2>
            <img src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/uso-dos-emoji-1024x538.png" />
            <h3>Me tiene arto este clon</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
