import React, { useState } from 'react'
import style from './Card.module.css'
import { NavLink } from 'react-router-dom'


const Card = ({id, name, image, weight, height, life_span}) => {
  const [ showDetails, setShowDetails ] = useState(false);
  const toogleDetails = () =>{
    setShowDetails(!showDetails);
  }
  return (
    <div className={`${style.card} ${showDetails ? style.showDetails : ''}`} onMouseEnter={toogleDetails} onMouseLeave={toogleDetails}>
        
        <NavLink to={`/detail/${id}`}>
        <img src={image} alt={name} className={style.imgCard}/>
        </NavLink>
        <NavLink to={`/detail/${id}`} className={style.details}>
          <p className={style.titleDetail}>{name}</p>
          <p>Weight {weight}</p>
          <p>Height {height}</p>
          <p>LifeSpan: {life_span}</p>
        
        </NavLink>
    </div>
  )
}

export default Card