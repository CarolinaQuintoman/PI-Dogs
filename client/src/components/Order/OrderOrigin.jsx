import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../redux/actions";
import style from './OrderOrigin.module.css'

export default function DogList() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");
  

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    dispatch(filterByOrigin(selectedFilter));
    setFilter(selectedFilter);
  };

  return (
    <div className={style.originContainer}>
      <div className={style.originTitle}>
        <p className={style.ordering}>Origin</p>
        <select className={style.originSelect} value={filter} onChange={handleFilterChange}>
          <option value="All">All dogs</option>
          <option value="api">Api dogs</option>
          <option value="bdd">My dogs</option>
        </select>
      </div>
    </div>
  );
}
