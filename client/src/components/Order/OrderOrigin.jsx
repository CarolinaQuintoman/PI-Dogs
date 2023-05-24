import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../redux/actions";




export default function SearchBar() {
   
   const [dog, setDog] = useState("");
   const dispatch = useDispatch()

   const handlerChange = (event) => {
      dispatch(filterByOrigin(event))
   }
   const handleClick =() =>{
      setDog("")
   }


   return (
      <div>
         <input
          type='search'
          onChange={(event) => {setDog(event.target.value); handlerChange(event.target.value)}} 
          value={dog} 
          placeholder="Search for a dog"/>
         <button type="submit" onClick={(event) => handleClick(event)}>Search By Origin</button>
         
      </div>
   );
}