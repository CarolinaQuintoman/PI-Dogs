import React from 'react'
import style from './Landing.module.css'
import frontPage from '../../assets/34-dog-friendly.jpg';
import { NavLink } from 'react-router-dom';


const Landing = () => {
  return (
    <div>
       <div className={style.imgConteiner}>
        
          <img src={frontPage} className={style.imgLanding} alt={frontPage} />
          <h1 className={style.caption}>Bienvenidos - Welcome</h1>
        </div>
        <NavLink to='/home'className={style.navLink}>ENTRAR - ENTER
        </NavLink>
        
        <div className={style.text1}>
          <h3 >
          Jamás te sentirás solo si tienes la compañia de un perro, porque su tierna mirada y el movimiento de su cola te dicen: "Te quiero"
          </h3>
        </div>
        <div className={style.text2}>
          <h3 >You will not feel lonely if you have the company of a dog, because his tender look and the movement of its tail tell you: "I love you"
          </h3>
        </div>

          
    </div>
  

    
  )
}

export default Landing;