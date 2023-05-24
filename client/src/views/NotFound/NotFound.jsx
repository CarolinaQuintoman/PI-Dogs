import React from 'react'
import style from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={style.notFounded} >
         <h1 className={style.title}>Where are you going?</h1>
         <h2 className={style.title2}>OPS!!!!!</h2> 
         <h2 className={style.title3}>Page not found </h2>
            
    </div>
  )
}

export default NotFound