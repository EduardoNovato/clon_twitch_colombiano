
import React from 'react'
import "../styles/Canal.css"

function Canal({avatar,name,followers}) {
  return (
    <div className='channel'>
            <div className='channel__details'>
                <img src={avatar} alt='avatar'/>
                <p>{name}</p>
            </div>
            <p>{followers}</p>
        </div>
  )
}

export default Canal