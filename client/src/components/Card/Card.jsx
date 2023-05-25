import React, { useState } from 'react'
import style from './Card.module.css'
import { NavLink } from 'react-router-dom'


const Card = ({id, name, image, weight, height, life_span, temperament}) => {
  const [ showDetails, setShowDetails ] = useState(false);
  const toogleDetails = () =>{
    setShowDetails(!showDetails);
  }
  return (
    <div className={`${style.card} ${showDetails ? style.showDetails : ''}`} onMouseEnter={toogleDetails} onMouseLeave={toogleDetails}>
        
        <p className={style.title}>{name}</p>
        <NavLink to={`/detail/${id}`}>
        <img src={image} alt={name} className={style.imgCard}/>
        </NavLink>
        <div className={style.details}>
          <p>Weight {weight}</p>
          <p>Height {height}</p>
          <p>LifeSpan: {life_span}</p>
          
        </div>
    </div>
  )
}

export default Card