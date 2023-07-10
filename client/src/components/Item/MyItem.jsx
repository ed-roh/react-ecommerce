import React from 'react'
import './MyItem.css'
const MyItem = ({item}) => {
  return (
    <div className='card'> 
    <div className='card__image-container'>
      <img src={item.image} alt="character" />
    </div>
    <div className='card__content-container'>
      <p>{item.name}</p>
      <p style={{color:item.status === 'Alive'? 'green':item.status === 'Dead'? 'red':'black'}}>{item.status}</p>
    </div>

    </div>
  )
}

export default MyItem