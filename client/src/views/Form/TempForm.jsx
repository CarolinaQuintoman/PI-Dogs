import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemperaments } from "../../redux/actions";
import style from "./TempForm.module.css";

const TempForm = () => {
    const temperaments = useSelector((state) => state.temperaments);
    const dispatch = useDispatch()
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

    

    const handleTempClick = (temperament) => {
      if (selectedTemperaments.includes(temperament)) {
        setSelectedTemperaments(selectedTemperaments.filter(temp => temp !== temperament));
      } else {
        setSelectedTemperaments([...selectedTemperaments, temperament]);
      }
    };

      useEffect(() => {
        dispatch(getAllTemperaments());
      }, [dispatch]);
      
  return (
    <div>
    <div className={style.containerTemp}>
      <label className={style.labelTitle}>Select Temperament:</label>
      <div className={style.temperamentContainer}>
        {temperaments.map((temperament, index) => (
          <span
            key={index}
            className={selectedTemperaments.includes(temperament) ? style.selectedTemp : style.temp}
            onClick={() => handleTempClick(temperament)}
          >
            {temperament}
          </span>
        ))}
      </div>
    </div>
  </div>
  )
}

export default TempForm