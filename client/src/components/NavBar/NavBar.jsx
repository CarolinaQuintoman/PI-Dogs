import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import icon from '../../assets/russel_dog_animal_15954.png'
import SearchBar from '../SearchBar/SearchBar'


const NavBar = () => {
    return (

        <div className={style.mainContainer} >
            <div>
             <img src={icon} alt="Dog Icon" className={style.dogIcon} />          
                <button className={style.buttonNav} >
                    <NavLink to='/home' className={style.navLink} >HOME</NavLink>
                </button>
            
                <button className={style.buttonNav}>
                    <NavLink to='/create' className={style.navLink} >FORM</NavLink>
                </button>
            </div>
           <SearchBar />
            
        </div>
    )
}
export default NavBar;