// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { filterByOrigin } from "../../redux/actions";




// export default function SearchBar() {
   
   
//    const dispatch = useDispatch()

//    const [ filter, setFilter] = useState({
//       origin: "All"
//    })

//    const handleFilterByOrigin = (event) => {
//       const selectedOrigin = event.target.value;
//       dispatch(filterByOrigin(selectedOrigin));
//       setFilter({
//          origin: selectedOrigin
//       });
//    }
   


//    return (
//       <div>
//             <div>Origin
//               <select value = {filter.origin} onChange={handleFilterByOrigin}>
//                 <option value="All">All dogs</option>
//                 <option value="api">Api dogs</option>
//                 <option value="bdd">My dogs</option>
//               </select>   
//             </div>
//         </div>
//    );
// }

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByOrigin } from '../../redux/actions'

export default function DogList() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('All');
  const allDogs = useSelector(state => state.allDogs);
  const allDogsOrder = useSelector(state => state.allDogsOrder);
  const apiDogs = useSelector(state => state.apiDogs);

  const handleFilterChange = event => {
    const selectedFilter = event.target.value;
    dispatch(filterByOrigin(selectedFilter))
    setFilter(selectedFilter);
  };

  // const filterDogs = () => {
  //   if (filter === 'All') {
  //     return allDogs;
  //   } else if (filter === 'api') {
  //     return apiDogs;
  //   } else if (filter === 'bdd') {
  //     return filterByOrigin;
  //   }
  // };

  return (
    <div>
      <div>
        Origin
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All dogs</option>
          <option value="api">Api dogs</option>
          <option value="bdd">My dogs</option>
        </select>
      </div>

      
    </div>
  );
}