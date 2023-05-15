import React from 'react'
import style from './Landing.module.css'
import frontPage from '../../assets/34-dog-friendly.jpg';
//import { NavLink } from 'react-router-dom';


const Landing = () => {
  return (
    <div>
        
          <img src={frontPage} className={style} alt={frontPage} />
        

          
    </div>
  

    
  )
}

export default Landing;