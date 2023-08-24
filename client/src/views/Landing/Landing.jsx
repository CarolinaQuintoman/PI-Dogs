import React from 'react'
import style from './Landing.module.css'
import frontPage from '../../assets/estresperros.jpg';

import { NavLink } from 'react-router-dom';


const Landing = () => {
  return (
    <div className={style.container}>
       <div className={style.imgConteiner}>
          <img src={frontPage} className={style.imgLanding} alt={frontPage} />
          <h1 className={style.caption}>All Dogs information and creation of your own dog</h1>
        </div>
        <NavLink to='/home'className={style.getStart}>Get Start
        </NavLink>
                 
    </div>
  

    
  )
}

export default Landing;