//import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css'


const NavBar = () => {
    return (

        <div className={style.mainContainer} >
                       
            <button >
                <NavLink to='/home'>HOME</NavLink>
            </button>
            <button>
                <NavLink to='/create'>FORM</NavLink>
            </button>
           
            
        </div>
    )
}
export default NavBar;