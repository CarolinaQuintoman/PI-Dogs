import React from 'react'
import style from './Card.module.css'


const Card = (props) => {
  return (
    <div className={style.card}>
        
        <p className={style.title}>{props.name}</p>
        <img src={props.image} alt="" /> 
        <p>Weight {props.weight}</p>
        <p>Height {props.height}</p>
        <p>LifeSpan: {props.life_span}</p>
        
    </div>
  )
}

export default Card