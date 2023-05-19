import React from 'react'
import style from './Card.module.css'
import { NavLink } from 'react-router-dom'


const Card = ({id, name, image, weight, height, life_span, temperament}) => {

  return (
    <div className={style.card}>
        
        <p className={style.title}>{name}</p>
        <NavLink to={`/detail/${id}`}>
        <img src={image} alt={name} />
        </NavLink> 
        <p>Weight {weight}</p>
        <p>Height {height}</p>
        <p>LifeSpan: {life_span}</p>
        <p>Temperamnets: {temperament}</p>
    </div>
  )
}

export default Card