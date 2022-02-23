import React from 'react'
import Canal from './Canal'
import "../styles/Lateral.css"

function Lateral() {
  return (
    <div className='sidebar'>
    <div className='sidebar__top'>
        <h5>CANALES SEGUIDOS</h5>
        <Canal avatar='https://p16-amd-va.tiktokcdn.com/tos-maliva-avt-0068/00135e276a867fab3f25ade3f221cddf~c5_720x720.jpeg?x-expires=1638646400&x-signature=uH1OKNkwMNYp3I8HXgDkBZieaef%3D'
            name='La pelirroja que esta enomarada de JH'
            followers='820k'
        />
        <Canal avatar='https://pbs.twimg.com/profile_images/1321962367530524673/OSQNzcAV_400x400.jpg'
            name='El parcero que tiene un voleo de suscriptores en Twitch'
            followers='200k'
        />
        <h5>CANALES RECOMENDADOS</h5>
        <Canal avatar='https://images.emojiterra.com/twitter/v13.1/512px/1f920.png'
            name='nsmkxkvm'
            followers='250k'
        />
        <p className='sidebar__topShowMore'>Mostrar mas</p>
    </div>
    <div className='sidebar__bottom'>
        <div className='sidebar__bottomContainer'>
                <i className='fas fa-search'></i>
                <input type="text" placeholder='Buscar' />

        </div>
    </div>
</div>
  )
}

export default Lateral