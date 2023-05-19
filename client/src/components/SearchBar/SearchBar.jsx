import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../redux/actions";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   
   const [dog, setDog] = useState("");
   const dispatch = useDispatch()

   const handlerChange = (event) => {
      dispatch(getName(event))
   }
   const handleClick =() =>{
      setDog("")
   }


   return (
      <div>
         <input className={style}
          type='search'
          onChange={(event) => {setDog(event.target.value); handlerChange(event.target.value)}} 
          value={dog} 
          placeholder="Search for a dog"/>
         <button type="submit" onClick={(event) => handleClick(event)}>Search</button>
      </div>
   );
}