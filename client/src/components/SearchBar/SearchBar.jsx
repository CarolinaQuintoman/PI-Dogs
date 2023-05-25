import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../redux/actions";
import Order from "../Order/Order";
import style from './SearchBar.module.css'
import OrderOrigin from "../Order/OrderOrigin";


export default function SearchBar() {
   
   const [dog, setDog] = useState("");
   const dispatch = useDispatch()

   const handlerChange = (event) => {
      dispatch(getName(event))
   }
   const handleClick =() =>{
      setDog("")
   }


   return (
      <div className={style.searchBar}>
         <input className={style.inputSearch}
          type='search'
          onChange={(event) => {setDog(event.target.value); handlerChange(event.target.value)}} 
          value={dog} 
          placeholder="Search for a dog"/>
         <button className={style.searchButton} type="submit" onClick={(event) => handleClick(event)}>Search</button>
         <div>
         <Order />
         <OrderOrigin />
         </div>
      </div>
   );
}