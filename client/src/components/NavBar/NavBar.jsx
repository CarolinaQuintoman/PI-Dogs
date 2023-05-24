import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css'


const NavBar = () => {
    return (

        <div className={style.mainContainer} >
                       
            <button className={style.buttonNav} >
                <NavLink to='/home' className={style.navLink} >HOME</NavLink>
            </button>
            
            <button className={style.buttonNav}>
                <NavLink to='/create' className={style.navLink} >FORM</NavLink>
            </button>
           
            
        </div>
    )
}
export default NavBar;