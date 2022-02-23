
import React from 'react'
import "../styles/Recientes.css"

function Recientes({url,title}) {
  return (
    <div className='item'>
<iframe
 width="400"
  height="235 "
  src={url} 
  title={title} 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

  </iframe>

  <div className="item__detailsText">
  <img src="https://depor.com/resizer/USuYX3C023XWcnl87IlpxzRkXHQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JJU22YXGJ5AGLHRQPZ45E5TZJY.jpg"/>
    <h4>{title}</h4>
    <p>NmskXKvm</p>
    <p>Vlogs y entrentenimiento</p>
  </div>
    </div>
  )
}

export default Recientes